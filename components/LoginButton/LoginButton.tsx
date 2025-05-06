"use client";

import Link from "next/link";

interface LoginButtonProps {
  isMobile?: boolean;
}

export default function LoginButton({ isMobile = false }: LoginButtonProps) {
  return (
    <Link href="/login">
      <button
        type="button"
        className={
          isMobile
            ? "text-white bg-[#bb8d38] hover:bg-[#e09e09] px-6 py-2 text-sm font-medium rounded-full"
            : "hidden md:inline-block text-white bg-[#bb8d38] hover:bg-[#e09e09] focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-[45px] text-sm px-6 py-3 text-center"
        }
      >
        Log In
      </button>
    </Link>
  );
}
