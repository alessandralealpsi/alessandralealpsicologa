import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/site-config";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 rounded-full bg-primary px-4 py-3 text-xs font-medium tracking-[0.1em] uppercase text-primary-foreground shadow-[0_2px_18px_rgba(58,71,80,0.16)] transition-colors duration-300 hover:bg-primary-dark sm:bottom-8 sm:right-8 sm:px-5"
    >
      <MessageCircle className="size-4 shrink-0" aria-hidden="true" />
      <span>Falar pelo WhatsApp</span>
    </a>
  );
}
