"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { signOut, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession()

  const router = useRouter();


  return (
    <nav className="z-50 fixed top-0 w-full bg-white/5 backdrop-blur-lg border-b-2 border-white/10 shadow-lg transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span className="text-white/90 text-lg font-semibold sm:inline">
              SaaSJet
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden sm:flex items-center gap-6">
            <Link href="/" className="text-sm text-white/70 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="/" className="text-sm text-white/70 hover:text-white transition-colors">
              Docs
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">

            {/* Authenticated */}
            {session?.user ? (
              <div className="hidden sm:flex items-center gap-4">
                <span className="text-white/80 text-sm">
                  Welcome back, <span className="font-semibold">{session?.user.name}</span>
                </span>

                <Button
                  variant="default"
                  onClick={() => signOut()}
                  className="rounded-md cursor-pointer"
                >
                  Sign out
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => router.push("/dashboard")}
                  className="rounded-md cursor-pointer"
                >
                  Dashboard
                </Button>
              </div>
            ) : (
              <>
                {/* Not logged in */}
                <Link
                  href={"/sign-in"}
                  className="hidden sm:inline text-sm text-white/90 hover:text-white transition-colors"
                >
                  Sign in
                </Link>
              </>
            )}

            {/* Mobile toggle button */}
            <Button
              onClick={() => setOpen(!open)}
              className="inline-flex sm:hidden items-center justify-center rounded-md p-2 text-white/90 hover:bg-white/10 transition cursor-pointer"
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="sm:hidden border-t border-white/10 bg-black/60 backdrop-blur-lg rounded-b-2xl">
          <div className="flex flex-col px-4 py-4 gap-3 text-white/80">

            <Link href="#features" className="hover:text-white transition">
              Features
            </Link>
            <Link href="/" className="hover:text-white transition">
              Docs
            </Link>

            {/* MOBILE AUTH UI */}
            {!session?.user ? (
              <Link
                href="/sign-in"
                className="mt-2 inline-flex items-center justify-center rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition"
              >
                Sign In
              </Link>
            ) : (
              <>
                <span className="text-sm text-white/70">
                  Welcome back, <span className="font-semibold">{session?.user.name}</span>
                </span>

                <Button
                  onClick={() => signOut()}
                  variant="default"
                  className="rounded-md bg-white/10 hover:bg-white/20 cursor-pointer text-white"
                >
                  Sign out
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => router.push("/dashboard")}
                  className="rounded-md cursor-pointer"
                >
                  Dashboard
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
