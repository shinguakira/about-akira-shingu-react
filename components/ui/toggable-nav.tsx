"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function TogglableNav() {
  const [isOpen, setIsOpen] = useState(false);
  const _pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex flex-shrink-0 items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              Your Name
            </Link>
          </div>

          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-500"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-controls="nav-menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      <div
        id="nav-menu"
        // className={cn(
        //   "absolute left-0 right-0 z-10 bg-white shadow-md transition-all duration-300 ease-in-out",
        //   isOpen ? "max-h-96 opacity-100" : "max-h-0 overflow-hidden opacity-0"
        // )}
      >
        <div className="mx-auto max-w-7xl space-y-1 px-4 py-2 sm:px-6 lg:px-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              // className={cn(
              //   "block rounded-md px-3 py-2 text-base font-medium",
              //   pathname === link.href
              //     ? "bg-gray-900 text-white"
              //     : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              // )}
              onClick={toggleMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
