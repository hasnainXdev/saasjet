"use client";

import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navigation } from "@/constants/constant";

export const Sidebar = () => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const NavContent = () => (
    <>
      <div className="p-6 border-b border-white/10">
        <Link href="/" className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-white" />
          <span className="text-xl font-bold text-white">BuildJet</span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navigation.map((item) => {
          const isActive = path === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive
                ? "bg-white/10 text-white font-medium"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10">
        <div className="p-4 rounded-xl bg-white/10 border border-white/20">
          <h4 className="font-semibold mb-2 text-sm text-white">Upgrade to Pro</h4>
          <p className="text-xs text-gray-400 mb-3">
            Unlock unlimited projects and advanced features.
          </p>
          <Button variant={"secondary"} className="w-full cursor-pointer">
            Upgrade Now
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile menu button */}
      <Button
        className="md:hidden fixed top-3.5 left-4 z-50 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <aside
            className="fixed left-0 top-0 bottom-0 w-64 bg-black border-r border-white/10 flex flex-col z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <NavContent />
          </aside>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden md:flex md:flex-col md:w-64 md:fixed md:left-0 md:top-0 md:bottom-0 bg-black border-r border-white/10">
        <NavContent />
      </aside>
    </>
  );
};
