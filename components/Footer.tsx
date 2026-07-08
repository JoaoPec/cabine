export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <div className="font-display text-lg font-bold text-white">
            CABINE
          </div>
          <p className="mt-2 max-w-xs text-[13px] text-zinc-500">
            Booking direto entre DJs e produtores. Gratuito para o DJ.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3 text-[13px] text-zinc-400">
          <a href="#djs" className="transition-colors hover:text-white">
            DJs
          </a>
          <a href="#vertentes" className="transition-colors hover:text-white">
            Vertentes
          </a>
          <a
            href="#como-funciona"
            className="transition-colors hover:text-white"
          >
            Como funciona
          </a>
          <a href="#para-djs" className="transition-colors hover:text-white">
            Para DJs
          </a>
        </nav>

        <p className="text-[13px] text-zinc-600">
          © {new Date().getFullYear()} CABINE. Feito no Brasil.
        </p>
      </div>
    </footer>
  );
}
