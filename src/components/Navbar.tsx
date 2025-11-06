"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="relative z-50 bg-black px-4 py-5 md:px-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/logo-anargya.jpeg"
              alt="180DC ITS Logo"
              width={48}
              height={48}
              className="cursor-pointer"
            />
          </Link>
          {/* Desktop & Tablet Navigation Menu */}
          <div className="ml-[20px] hidden items-center space-x-4 md:flex lg:ml-[50px] lg:space-x-8">
            <Link
              href="/"
              className="font-medium text-white transition-colors hover:text-[#d9d9d9]"
            >
              Home
            </Link>
            <Link
              href="/"
              className="font-medium text-white transition-colors hover:text-[#d9d9d9]"
            >
              About Us
            </Link>
            <Link
              href="/products"
              className="font-medium text-white transition-colors hover:text-[#d9d9d9]"
            >
              Products
            </Link>
          </div>
        </div>

        {/* Desktop & Tablet Right Side Actions */}
        <div className="hidden items-center space-x-2 md:flex lg:space-x-4">
          <Button
            variant="outline"
            className="rounded-[14px] border-2 border-white bg-transparent px-3 text-sm text-white hover:bg-white hover:text-[#434343] lg:px-6 lg:text-base"
          >
            Login
          </Button>
          <Button
            className="rounded-[14px] px-3 text-sm text-black hover:opacity-90 lg:px-6 lg:text-base"
            style={{
              background:
                "linear-gradient(263deg, #9AF6B0 5.17%, #FFF 187.22%)",
            }}
          >
            Sign Up
          </Button>
          <ShoppingCart className="h-5 w-5 cursor-pointer text-white transition-colors hover:text-[#d9d9d9] lg:h-6 lg:w-6" />
        </div>

        {/* Mobile Right Side - Cart and Burger Menu */}
        <div className="flex items-center space-x-4 md:hidden">
          <ShoppingCart className="h-6 w-6 cursor-pointer text-white transition-colors hover:text-[#d9d9d9]" />
          <button
            onClick={toggleMenu}
            className="text-white transition-colors hover:text-[#d9d9d9]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 border-t border-gray-700 pb-4 md:hidden">
          <div className="flex flex-col space-y-4 pt-4">
            <Link
              href="/"
              className="px-4 py-2 font-medium text-white transition-colors hover:text-[#d9d9d9]"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="px-4 py-2 font-medium text-white transition-colors hover:text-[#d9d9d9]"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/clients"
              className="px-4 py-2 font-medium text-white transition-colors hover:text-[#d9d9d9]"
              onClick={() => setIsOpen(false)}
            >
              Clients
            </Link>
            <Link
              href="/store"
              className="px-4 py-2 font-medium text-white transition-colors hover:text-[#d9d9d9]"
              onClick={() => setIsOpen(false)}
            >
              Store
            </Link>
            <Link
              href="/events"
              className="px-4 py-2 font-medium text-white transition-colors hover:text-[#d9d9d9]"
              onClick={() => setIsOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/services"
              className="px-4 py-2 font-medium text-white transition-colors hover:text-[#d9d9d9]"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>

            {/* Mobile Buttons */}
            <div className="flex flex-col space-y-3 px-4 pt-4">
              <Button
                variant="outline"
                className="w-full rounded-[14px] border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#434343]"
              >
                Login
              </Button>
              <Button
                className="w-full rounded-[14px] text-black hover:opacity-90"
                style={{
                  background:
                    "linear-gradient(263deg, #9AF6B0 5.17%, #FFF 187.22%)",
                }}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
