"use client";

import { useSession } from "@/context/session-context";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, loading } = useSession();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="w-full border-b-2 bg-white px-4 sm:px-6 md:px-10 lg:px-20 py-3 flex items-center justify-between sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/banner-light.png"
            alt="logo"
            width="120"
            height="47"
            className="sm:w-[130px] md:w-[140px] lg:w-[150px]"
          />
        </Link>
        <div className="hidden lg:flex items-center gap-6">
          <Link
            href="#"
            className="font-medium hover:border-b-2 border-[#14BA85]"
          >
            About
          </Link>
          <Link
            href="#"
            className="font-medium hover:border-b-2 border-[#14BA85]"
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="font-medium hover:border-b-2 border-[#14BA85]"
          >
            Blog
          </Link>
          {!loading &&
            (user ? (
              <Link
                href="/dashboard"
                className="bg-[#14BA85] text-sm border-2 border-black rounded-lg px-4 py-1.5 font-semibold shadow-[3px_3px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                href="/auth/sign-in"
                className="bg-[#14BA85] text-sm border-2 border-black rounded-lg px-4 py-1.5 font-semibold shadow-[3px_3px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition"
              >
                Sign In
              </Link>
            ))}
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                }`}
              ></span>
              <span
                className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-white">
            <div className="flex items-center justify-between px-4 py-3 border-b-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/banner-light.png"
                  alt="logo"
                  width="120"
                  height="120"
                />
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="px-4 py-6">
              <div className="space-y-0">
                <Link
                  href="#"
                  className="block text-lg font-medium py-4 border-b border-gray-200 hover:bg-gray-50 transition-colors -mx-4 px-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="block text-lg font-medium py-4 border-b border-gray-200 hover:bg-gray-50 transition-colors -mx-4 px-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="#"
                  className="block text-lg font-medium py-4 border-b border-gray-200 hover:bg-gray-50 transition-colors -mx-4 px-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <div className="pt-6">
                  {!loading &&
                    (user ? (
                      <Link
                        href="/dashboard"
                        className="block w-full bg-[#14BA85] border-2 border-black rounded-xl px-6 py-3 font-semibold shadow-[3px_3px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition text-center"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Dashboard
                      </Link>
                    ) : (
                      <Link
                        href="/auth/sign-in"
                        className="block w-full bg-[#14BA85] border-2 border-black rounded-xl px-6 py-3 font-semibold shadow-[3px_3px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition text-center"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Sign In
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
