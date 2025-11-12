import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaClient } from "@prisma/client"
import { compare } from "bcryptjs"
import type { NextAuthConfig } from "next-auth"
import { prisma } from "./prisma"

export const authOptions: NextAuthConfig = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                try {
                    const email = credentials?.email as string
                    const password = credentials?.password as string

                    if (!email || !password) return null

                    const user = await prisma.user.findUnique({ where: { email } })
                    if (!user || !user.password) return null

                    const isValid = await compare(password, user.password)
                    if (!isValid) return null

                    return {
                        id: user.id,
                        name: user.name ?? undefined,
                        email: user.email ?? undefined,
                    }
                } catch (err) {
                    console.error("❌ [Auth Error]:", err)
                    return null
                }
            },
        }),
    ],

    session: { strategy: "jwt" },

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
                token.email = user.email
            }
            return token
        },

        async session({ session, token }) {
            if (token && session.user) {
                session.user.id = token.id as string
                session.user.email = token.email as string
            }
            return session
        },

        // Automatically sync OAuth users to DB
        async signIn({ user, account }) {
            if (!user?.email) return false
            const existingUser = await prisma.user.findUnique({
                where: { email: user.email },
            })

            if (!existingUser) {
                await prisma.user.create({
                    data: {
                        email: user.email,
                        name: user.name,
                    },
                })
            }
            return true
        },
    },

    secret: process.env.NEXTAUTH_SECRET,

    // Optional: Improve session cookies for production
    cookies: {
        sessionToken: {
            options: {
                httpOnly: true,
                sameSite: "lax",
                secure: process.env.NODE_ENV === "production",
            },
        },
    },
}
