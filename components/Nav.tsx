"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import Link from "next/link";

const links = [
  { label: "DJs", href: "/#djs" },
  { label: "Vertentes", href: "/#vertentes" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Planos", href: "/planos" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-5">
        <nav className="flex w-full max-w-3xl items-center justify-between rounded-full border border-white/10 bg-ink/70 py-2 pl-5 pr-2 backdrop-blur-xl">
          <Link
            href="/"
            className="font-display text-sm font-bold tracking-tight text-white"
          >
            CABINE
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] text-zinc-400 transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/planos"
              className="hidden rounded-full bg-acid px-4 py-2 text-[13px] font-semibold text-ink transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.03] active:scale-[0.97] md:block"
            >
              Sou DJ
            </Link>

            <button
              type="button"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              onClick={() => setOpen(!open)}
              className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 md:hidden"
            >
              <span
                className={`absolute h-[1.5px] w-4 bg-white transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  open ? "rotate-45" : "-translate-y-[3px]"
                }`}
              />
              <span
                className={`absolute h-[1.5px] w-4 bg-white transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  open ? "-rotate-45" : "translate-y-[3px]"
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 flex flex-col justify-center bg-ink/95 px-8 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-6">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.08 * i,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="font-display text-3xl font-semibold text-white"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="/planos"
                onClick={() => setOpen(false)}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.08 * links.length,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-4 w-max rounded-full bg-acid px-6 py-3 font-semibold text-ink"
              >
                Sou DJ
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
