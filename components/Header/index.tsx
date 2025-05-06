"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Image } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";
import Search from "../SearchBar/SearchBar";
import LoginButton from "../LoginButton/LoginButton";



export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { label: "HOME", href: "/", highlight: true },
    { label: "INTERACTIVE", href: "/interactive" },
    { label: "ABOUT", href: "/about" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <nav
      className="fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
      style={{ background: "linear-gradient(to bottom, #406c88, #294b61)" }}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-6 px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
         <Image
  src="/logo-w.svg"
  alt="Logo"
 
  style={{ width: '160px', height: '50px' }}
/>
        </Link>

        {/* Right section */}
        <div className="flex md:order-2 items-center gap-x-3 rtl:space-x-reverse relative">
          {/* 🔍 Desktop Search */}
          <div className="hidden md:block">
            <Search
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              searchOpen={searchOpen}
              setSearchOpen={setSearchOpen}
            />
          </div>

          {/* 🛒 Cart icon */}
          <Link
                  href="/cart">
          <button
            className="hidden md:inline-flex p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
            aria-label="Cart"
          >
            <IconShoppingCart size={22} />
          </button>
          </Link>

          {/* ☰ Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-full md:hidden hover:bg-white/20 transition"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* 🔐 Login desktop */}
    <LoginButton />
        </div>

        {/* 🧭 Desktop nav */}
        <div className="hidden md:flex md:flex-row items-center justify-between w-full md:w-auto md:order-1">
          <ul className="flex flex-col md:flex-row p-4 md:p-0 mt-4 md:mt-0 font-medium text-lg md:space-x-12 rtl:space-x-reverse border-0">
            {navLinks.map(({ label, href, highlight }) => (
              <li key={label}>
                <Link href={href}>
                  <span
                    className={`block py-2 px-3 transition-colors duration-200 md:p-0 ${
                      pathname === href
                        ? "text-[#bb8d38] hover:text-[#e0b94a]"
                        : href === "/"
                        ? "text-white"
                        : highlight
                        ? "text-[#bb8d38] hover:text-[#e0b94a]"
                        : "text-white hover:text-[#bb8d38]"
                    }`}
                  >
                    {label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 📱 Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 mt-2 z-30">
          <div className="flex flex-col gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-6 shadow-xl">
            <ul className="flex flex-col gap-4 text-white font-medium text-base">
              {navLinks.map(({ label, href, highlight }) => (
                <li key={label} className="border-b border-white/10 pb-2">
                  <Link href={href} onClick={() => setIsMobileMenuOpen(false)}>
                    <span
                      className={`block w-full transition-all duration-200 rounded-md px-2 py-1 hover:underline hover:scale-105 active:scale-95 ${
                        pathname === href
                          ? "text-[#bb8d38] hover:text-[#e0b94a] hover:bg-white/10"
                          : href === "/"
                          ? "text-white"
                          : highlight
                          ? "text-[#bb8d38] hover:text-[#e0b94a] hover:bg-white/10"
                          : "text-white hover:text-[#bb8d38] hover:bg-white/10"
                      }`}
                    >
                      {label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* 🔍 Search + 🛒 Cart + 🔐 Login mobile */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex gap-3">
                <Search
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  searchOpen={searchOpen}
                  setSearchOpen={setSearchOpen}
                />
                <Link
                  href="/cart">
                <button
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
                  aria-label="Cart"
                >
                  <IconShoppingCart size={22} />
                </button>
                </Link>
              </div>
             <LoginButton isMobile />

            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
