import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="flex h-auto flex-col items-center gap-8 self-stretch rounded-t-[20px] border-t-2 border-[#3CF167] px-4 py-8 text-white lg:h-[326px] lg:flex-row lg:gap-28 lg:px-[100px] lg:py-[50px]"
      style={{
        background: "rgba(0, 0, 0, 0.60)",
      }}
    >
      {/* Main Footer Content */}
      <div className="flex w-full flex-col items-center justify-between gap-8 lg:flex-row lg:gap-[124px]">
        {/* Logo Section */}
        <div className="flex flex-col items-center space-y-4 lg:items-start">
          <div className="mb-2 flex items-center gap-3">
            {/* 180Degrees Logo */}
            <div className="transition-transform duration-300 hover:scale-110">
              <Image
                src="/images/logo-anargya.jpeg"
                alt="180DC ITS Logo"
                width={200}
                height={200}
                className="h-32 w-32 object-contain lg:h-52 lg:w-52"
              />
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-4 text-center lg:text-left">
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 lg:gap-x-20 lg:gap-y-6">
            <Link
              href="/"
              className="block text-base font-bold text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/events"
              className="block text-base font-bold text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-white"
            >
              Events
            </Link>
            <Link
              href="/about"
              className="block text-base font-bold text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-white"
            >
              About Us
            </Link>
            <Link
              href="/consulting"
              className="block text-base font-bold text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-white"
            >
              Consulting
            </Link>
            <Link
              href="/clients"
              className="block text-base font-bold text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-white"
            >
              Clients
            </Link>
            <Link
              href="/faq"
              className="block text-base font-bold text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-white"
            >
              FAQ
            </Link>
            <Link
              href="/store"
              className="block text-base font-bold text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-white"
            >
              Store
            </Link>
            <Link
              href="/account"
              className="block text-base font-bold text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-white"
            >
              My Account
            </Link>
          </div>
        </div>

        {/* Social Media & Connect Section */}
        <div className="flex flex-col items-center space-y-6 lg:items-start">
          <div className="text-center lg:text-left">
            <h3 className="mb-4 text-2xl font-bold text-white lg:text-4xl">
              Let&apos;s Connect!
            </h3>
            <div className="flex justify-center gap-4 lg:justify-start">
              {/* Instagram */}
              <a
                href="#"
                className="group flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6 text-gray-300 transition-colors duration-300 group-hover:text-white" />
              </a>

              {/* TikTok */}
              <a
                href="#"
                className="group flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 transition-all duration-300 hover:scale-110 hover:bg-black"
                aria-label="TikTok"
              >
                <svg
                  className="h-6 w-6 text-gray-300 transition-colors duration-300 group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="group flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 transition-all duration-300 hover:scale-110 hover:bg-blue-600"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 text-gray-300 transition-colors duration-300 group-hover:text-white" />
              </a>
            </div>
          </div>

          <div className="space-y-2 text-center text-base text-gray-300 lg:text-left">
            <p className="font-semibold text-white">
              © 180DC ITS, 2025. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
