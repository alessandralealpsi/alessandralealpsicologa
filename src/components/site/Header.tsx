import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { CRP, NAV_LINKS, whatsappHref } from "@/lib/site-config";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "border-b border-border bg-background/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-[84rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-6 py-4 md:px-10 lg:py-6">
        <a href="#inicio" className="flex min-w-0 flex-col leading-none">
          <span className="font-display truncate text-xl tracking-tight sm:text-2xl">
            Alessandra Leal
          </span>
          <span className="eyebrow mt-1.5 truncate">Psicóloga · {CRP}</span>
        </a>

        <div className="flex shrink-0 items-center gap-8">
          <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-primary px-6 py-3 text-xs font-medium tracking-[0.14em] uppercase text-primary-foreground transition-colors duration-300 hover:bg-primary-dark md:inline-flex"
          >
            Agendar atendimento
          </a>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center text-foreground transition-colors hover:text-primary lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="menu-mobile"
          className="border-t border-border bg-background px-6 pb-8 pt-2 lg:hidden"
        >
          <nav aria-label="Navegação principal (mobile)" className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 font-display text-2xl text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex w-full items-center justify-center rounded-full bg-primary px-6 py-4 text-xs font-medium tracking-[0.14em] uppercase text-primary-foreground"
          >
            Agendar atendimento
          </a>
        </div>
      )}
    </header>
  );
}
