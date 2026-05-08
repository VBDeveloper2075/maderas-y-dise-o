"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200/80">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 min-h-[5rem] md:min-h-[5.75rem] py-2 flex items-center justify-between">
        <Link
          href="#"
          className="flex items-center gap-0.5 md:gap-1 shrink-0 min-w-0 transition-opacity hover:opacity-85"
          aria-label="Pablo Elias — Atelier de Carpintería, inicio"
        >
          <div className="relative h-14 w-36 md:h-16 md:w-44 lg:h-[4.5rem] lg:w-52 shrink-0">
            <Image
              src="/logo-principal.png"
              alt=""
              fill
              className="object-contain object-left"
              sizes="(max-width: 768px) 144px, (max-width: 1024px) 176px, 208px"
              priority
            />
          </div>
          <div className="flex flex-col items-start justify-center text-left min-w-0">
            <span className="font-semibold text-[#4A443F] tracking-[0.14em] sm:tracking-[0.16em] text-sm sm:text-base md:text-lg lg:text-xl leading-none">
              PABLO ELIAS
            </span>
            <span className="mt-0.5 font-normal text-[#4A443F] tracking-[0.12em] sm:tracking-[0.14em] text-[10px] sm:text-[11px] md:text-xs leading-none">
              ATELIER DE CARPINTERÍA
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-neutral-600 hover:text-[#333333] text-sm font-medium tracking-[0.12em] uppercase transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 text-neutral-600 hover:text-neutral-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menú"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-neutral-600 hover:text-neutral-900 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
