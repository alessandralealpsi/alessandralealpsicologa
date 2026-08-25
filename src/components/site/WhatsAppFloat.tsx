import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/site-config";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-24 right-5 z-50 inline-flex items-center justify-center rounded-full bg-primary p-4 text-primary-foreground shadow-[0_2px_18px_rgba(58,71,80,0.16)] transition-colors duration-300 hover:bg-primary-dark sm:bottom-28 sm:right-8"
    >
      <MessageCircle className="size-5 shrink-0" aria-hidden="true" />
    </a>
  );
}
