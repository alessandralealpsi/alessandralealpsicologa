import { ADDRESS, CRP, EMAIL, INSTAGRAM_URL, NAV_LINKS, whatsappHref } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-[84rem] gap-12 px-6 py-16 md:grid-cols-[1.2fr_1fr_1fr] md:px-10 md:py-20">
        <div>
          <p className="font-display text-2xl">Alessandra Leal | Psicóloga</p>
          <p className="eyebrow mt-3">{CRP}</p>
          <span className="hairline-accent mt-6" aria-hidden="true" />
          <p className="mt-6 max-w-xs text-sm text-muted-foreground">
            Psicoterapia individual voltada ao bem-estar sexual feminino, ao autoconhecimento e à
            saúde emocional.
          </p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <p className="eyebrow">Navegação</p>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow">Contato</p>
          <ul className="mt-5 space-y-3">
            <li>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                WhatsApp
              </a>
            </li>
            {INSTAGRAM_URL && (
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  Instagram
                </a>
              </li>
            )}
            {INSTAGRAM_URL && (
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  Instagram
                </a>
              </li>
            )}
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                {EMAIL}
              </a>
            </li>
            {ADDRESS && <li className="text-sm text-muted-foreground">{ADDRESS}</li>}
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-[84rem] flex-col gap-2 border-t border-border px-6 py-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
        <p>© {new Date().getFullYear()} Alessandra Leal. Todos os direitos reservados.</p>
        {/* Espaço reservado para informações profissionais obrigatórias adicionais. */}
        <p>Atendimento conforme as diretrizes do Conselho Federal de Psicologia (CFP).</p>
      </div>
    </footer>
  );
}
