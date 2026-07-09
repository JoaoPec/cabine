import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <Link href="/" className="font-display text-lg font-bold text-white">
            CABINE
          </Link>
          <p className="mt-2 max-w-xs text-[13px] text-zinc-500">
            Booking direto entre DJs e produtores. Planos a partir de R$ 0.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3 text-[13px] text-zinc-400">
          <Link href="/#djs" className="transition-colors hover:text-white">
            DJs
          </Link>
          <Link href="/#vertentes" className="transition-colors hover:text-white">
            Vertentes
          </Link>
          <Link
            href="/#como-funciona"
            className="transition-colors hover:text-white"
          >
            Como funciona
          </Link>
          <Link href="/planos" className="transition-colors hover:text-white">
            Planos
          </Link>
        </nav>

        <p className="text-[13px] text-zinc-600">
          © {new Date().getFullYear()} CABINE. Feito no Brasil.
        </p>
      </div>
    </footer>
  );
}
