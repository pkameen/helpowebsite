"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image"; 
import Link from "next/link"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <Image
                src="/logo/helpo-logo.png"
                alt="HELPO Logo"
                width={140}
                height={45}
                priority
                className="h-auto w-40 object-contain"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-300 hover:text-white transition">
              Home
            </Link>

            <Link href="/services" className="text-gray-300 hover:text-white transition">
              Services
            </Link>

            <Link href="/portfolio" className="text-gray-300 hover:text-white transition">
              Portfolio
            </Link>

            <Link href="/process" className="text-gray-300 hover:text-white transition">
              Process
            </Link>

            <Link href="/about" className="text-gray-300 hover:text-white transition">
              About
            </Link>

            <Link href="/contact" className="text-gray-300 hover:text-white transition">
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button className="bg-blue-600 hover:bg-blue-500 transition px-6 py-3 rounded-xl text-white font-medium">
              <a href="#contact">Start Project</a> 
            </button>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 backdrop-blur-xl bg-slate-900/90 border border-white/10 rounded-2xl p-6">

            <div className="flex flex-col gap-4">

              <Link href="/" className="text-white">
                Home
              </Link>
          
              <Link href="/services" className="text-white">
                Services
              </Link>

              <Link href="/portfolio" className="text-white">
                Portfolio
              </Link>

              <Link href="/process" className="text-white">
                Process
              </Link>

              <Link href="/about" className="text-white">
                About
              </Link>

              <Link href="/contact" className="text-white">
                Contact
              </Link>

              <Link href="#contact" className="bg-blue-600 mt-4 py-3 rounded-xl text-white">
                Start Project
              </Link>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
}