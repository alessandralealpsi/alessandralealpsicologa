import { createFileRoute } from "@tanstack/react-router";
import { Clock, CalendarDays, Monitor } from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { Reveal } from "@/components/site/Reveal";
import { whatsappHref } from "@/lib/site-config";

import sobrePhoto from "@/assets/foto-principal.jpeg";



const TITLE = "Alessandra Leal | Psicóloga | Psicoterapia e Bem-Estar Sexual Feminino";
const DESCRIPTION =
  "Psicoterapia individual voltada ao bem-estar sexual feminino, autoconhecimento, corpo, desejo e saúde emocional. Conheça o trabalho de Alessandra Leal.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Alessandra Leal",
          jobTitle: "Psicóloga",
          description:
            "Psicóloga e pós-graduanda em Psicoterapia da Sexualidade. Psicoterapia individual voltada ao bem-estar sexual feminino.",
          knowsAbout: [
            "psicoterapia feminina",
            "sexualidade feminina",
            "autoconhecimento",
            "bem-estar feminino",
            "saúde sexual",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const TEMAS = [
  { n: "01", t: "Autoconhecimento corporal e emocional" },
  { n: "02", t: "Prazer feminino, desejo e bem-estar sexual" },
  { n: "03", t: "Desconstrução de bloqueios e mitos" },
  { n: "04", t: "Busca por mais qualidade de vida e bem-estar feminino" },
];

const CONCEITOS = [
  {
    t: "Escuta",
    d: "Um espaço para falar sobre suas experiências, sentimentos e questões sem julgamentos.",
  },
  {
    t: "Autoconhecimento",
    d: "Um processo de compreensão das emoções, do corpo, dos desejos e das próprias experiências.",
  },
  {
    t: "Cuidado",
    d: "Um acompanhamento construído respeitando o ritmo, a singularidade e as necessidades de cada pessoa.",
  },
];

const FUNCIONAMENTO = [
  {
    icon: Clock,
    label: "Duração da sessão",
    value: "50 minutos",
    text: "Cada encontro tem a duração de 50 minutos.",
  },
  {
    icon: CalendarDays,
    label: "Frequência",
    value: "Semanal",
    text: "As sessões costumam ocorrer com frequência semanal, garantindo o ritmo e a evolução necessários para o processo terapêutico. A frequência pode ser reavaliada ao longo do acompanhamento conforme a necessidade do caso.",
  },
  {
    icon: Monitor,
    label: "Formato",
    value: "Online",
    text: "Atendimentos em formato online, em ambiente reservado, ético e em conformidade com as diretrizes do Conselho Federal de Psicologia (CFP).",
  },
];

const ETAPAS = [
  {
    n: "01",
    label: "Contato inicial",
    sub: "Via WhatsApp",
    text: "Você clica no botão de agendamento e conversa diretamente comigo pelo WhatsApp. Nesse primeiro momento, podemos tirar suas dúvidas iniciais sobre a consulta e verificar os horários disponíveis na agenda.",
  },
  {
    n: "02",
    label: "Primeira sessão",
    sub: "Nosso primeiro encontro",
    text: "Agendamos o nosso primeiro encontro online. Nessa sessão inicial, teremos um espaço de escuta para entender suas demandas, alinhar expectativas e estabelecer o contrato terapêutico.",
  },
  {
    n: "03",
    label: "Acompanhamento contínuo",
    sub: "Construindo o processo",
    text: "Após o alinhamento inicial, mantemos a frequência das sessões nos dias e horários combinados.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppFloat />

      <main>
        {/* HERO */}
        <section id="inicio" className="relative overflow-hidden pt-28 pb-16 md:pt-40 md:pb-24">
          {/* Elementos gráficos decorativos */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 -top-16 size-[28rem] rounded-full bg-primary/[0.07] md:size-[40rem]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 bottom-0 hidden size-[16rem] rounded-full bg-accent/[0.06] md:block"
          />

          <div className="relative z-10 mx-auto max-w-[72rem] px-6 md:px-10">
            <div className="grid items-start gap-10 md:gap-20 lg:grid-cols-[55fr_45fr] lg:gap-24">
              {/* COLUNA ESQUERDA — título principal */}
              <div className="md:pt-6 lg:pt-4">
                <Reveal>
                  <span className="hairline-accent" />
                  <p className="eyebrow mt-7">Psicoterapia individual · Online</p>
                  <h1 className="mt-6 text-[2.1rem] leading-[1.12] sm:text-4xl lg:text-[2.95rem]">
                    Um espaço para compreender você, seu corpo e sua sexualidade com mais liberdade e
                    acolhimento.
                  </h1>
                </Reveal>
              </div>

              {/* COLUNA DIREITA — texto complementar + botões */}
              <div className="lg:pt-28">
                <Reveal delay={140}>
                  <p className="max-w-xl text-[0.975rem] text-muted-foreground">
                    Psicoterapia individual para mulheres que desejam desenvolver o autoconhecimento,
                    compreender sua relação com o corpo e a sexualidade e construir uma relação mais
                    leve consigo mesmas.
                  </p>
                  <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <a
                      href={whatsappHref()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-xs font-medium tracking-[0.14em] uppercase text-primary-foreground transition-colors duration-300 hover:bg-primary-dark"
                    >
                      Agendar atendimento
                    </a>
                    <a
                      href="#sobre-mim"
                      className="inline-flex items-center justify-center rounded-full border border-primary/40 px-8 py-4 text-xs font-medium tracking-[0.14em] uppercase text-primary-dark transition-colors duration-300 hover:border-accent hover:text-accent"
                    >
                      Conheça meu trabalho
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>


        {/* SOBRE MIM — seção unificada */}
        <section id="sobre-mim" className="py-20 md:py-28">
          <div className="mx-auto max-w-[84rem] px-6 md:px-10">
            <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              {/* Coluna esquerda — fotografia */}
              <Reveal className="relative order-1">
                <div
                  aria-hidden="true"
                  className="absolute -left-6 -top-6 hidden h-[58%] w-[58%] rounded-tl-[12rem] border border-accent/40 sm:block"
                />
                <img
                  src={sobrePhoto}
                  alt="Alessandra Leal, psicóloga, em ambiente acolhedor"
                  className="relative aspect-[4/5] w-full rounded-t-[8rem] object-cover"
                />
              </Reveal>

              {/* Coluna direita — apresentação */}
              <div className="order-2">
                <Reveal>
                  <span className="hairline-accent" />
                  <p className="eyebrow mt-7">Sobre mim</p>
                  <h2 className="mt-3 max-w-xl text-[2.1rem] sm:text-4xl lg:text-[2.9rem]">
                    Muito prazer, sou Alessandra.
                  </h2>
                </Reveal>

                <Reveal
                  delay={120}
                  className="mt-8 max-w-xl space-y-5 text-[0.975rem] text-muted-foreground"
                >
                  <p>
                    Sou apaixonada por escutar histórias, pela reflexão contínua e pela forma como
                    as conexões humanas transformam a nossa vida. Sempre fui movida pela curiosidade
                    de entender como nos relacionamos com nós mesmas, com o nosso corpo e com os
                    nossos próprios desejos.
                  </p>
                  <p>
                    Acredito que a empatia, o respeito e o diálogo sem julgamentos são as
                    ferramentas mais potentes para construir pontes e transformar realidades.
                  </p>
                  <p>
                    Sou graduada em Psicologia e atualmente estou me especializando através da
                    pós-graduação em Psicoterapia da Sexualidade.
                  </p>
                  <p>
                    Escolhi trilhar esse caminho por acreditar que o bem-estar, a saúde mental e o
                    prazer caminham juntos. Meu objetivo é desmistificar tabus sobre relações, corpo
                    e sexualidade.
                  </p>
                </Reveal>

                {/* Destaque — síntese da proposta */}
                <Reveal delay={200} className="mt-10 max-w-xl">
                  <div className="relative pl-6">
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-1 h-[calc(100%-0.5rem)] w-px bg-accent/60"
                    />
                    <p className="font-display text-2xl leading-snug text-primary-dark sm:text-[1.7rem]">
                      Um espaço de escuta, acolhimento e reflexão.
                    </p>
                  </div>
                </Reveal>

              </div>
            </div>
          </div>
        </section>

        {/* COM O QUE PODEMOS TRABALHAR */}
        <section className="bg-card py-20 md:py-28">
          <div className="mx-auto max-w-[84rem] px-6 md:px-10">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">Com o que podemos trabalhar</p>
              <h2 className="mt-6 text-[2rem] sm:text-4xl">
                Nos encontros, trabalharemos os temas relacionados a:
              </h2>
            </Reveal>

            <ul className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
              {TEMAS.map((item, i) => (
                <Reveal as="li" key={item.n} delay={i * 90}>
                  <div className="border-t border-border pt-6">
                    <span className="numeral">{item.n}</span>
                    <h3 className="mt-3 max-w-xs text-xl leading-snug sm:text-2xl">{item.t}</h3>
                    <span className="hairline-accent mt-5" aria-hidden="true" />
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* PSICOTERAPIA INDIVIDUAL */}
        <section id="psicoterapia" className="py-20 md:py-28">
          <div className="mx-auto grid max-w-[84rem] gap-14 px-6 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow">Psicoterapia</p>
              <h2 className="mt-6 max-w-md text-[2rem] sm:text-4xl">Psicoterapia individual</h2>
              <p className="mt-7 max-w-md text-[0.975rem] text-muted-foreground">
                O acompanhamento psicológico voltado para a saúde sexual e o bem-estar feminino é um
                processo contínuo, seguro e confidencial.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <dl className="divide-y divide-border border-y border-border">
                {CONCEITOS.map((c) => (
                  <div key={c.t} className="grid gap-2 py-8 sm:grid-cols-[10rem_1fr] sm:gap-8">
                    <dt className="font-display text-2xl text-primary-dark">{c.t}</dt>
                    <dd className="text-[0.95rem] text-muted-foreground">{c.d}</dd>
                  </div>
                ))}
              </dl>
              <p className="eyebrow mt-8">Cuidado também é autoconhecimento</p>
            </Reveal>
          </div>
        </section>

        {/* COMO FUNCIONA A PSICOTERAPIA */}
        <section className="bg-card py-20 md:py-28">
          <div className="mx-auto max-w-[84rem] px-6 md:px-10">
            <Reveal className="max-w-2xl">
              <span className="hairline-accent" />
              <h2 className="mt-7 text-[2rem] sm:text-4xl">Como funciona a psicoterapia</h2>
            </Reveal>

            <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
              {FUNCIONAMENTO.map((item, i) => (
                <Reveal key={item.label} delay={i * 90} className="border-t border-border pt-7">
                  <item.icon
                    className="size-5 text-accent"
                    strokeWidth={1.25}
                    aria-hidden="true"
                  />
                  <p className="eyebrow mt-5">{item.label}</p>
                  <h3 className="mt-2 text-2xl">{item.value}</h3>
                  <p className="mt-4 text-[0.925rem] text-muted-foreground">{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA O ATENDIMENTO */}
        <section id="como-funciona" className="py-20 md:py-28">
          <div className="mx-auto max-w-[84rem] px-6 md:px-10">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">Como funciona o atendimento</p>
              <h2 className="mt-6 text-[2rem] sm:text-4xl">
                Seu primeiro passo pode ser mais simples do que parece.
              </h2>
            </Reveal>

            <ol className="relative mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
              <span
                aria-hidden="true"
                className="absolute left-[0.3rem] top-2 h-full w-px bg-border md:left-0 md:top-[0.3rem] md:h-px md:w-full"
              />
              {ETAPAS.map((e, i) => (
                <Reveal as="li" key={e.n} delay={i * 110} className="relative pl-8 md:pl-0 md:pt-10">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-2 size-[0.6rem] rounded-full bg-accent md:top-0"
                  />
                  <span className="numeral">{e.n}</span>
                  <p className="eyebrow mt-2">{e.label}</p>
                  <h3 className="mt-3 text-2xl">{e.sub}</h3>
                  <p className="mt-4 max-w-sm text-[0.925rem] text-muted-foreground">{e.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* CTA / CONTATO */}
        <section id="contato" className="bg-primary py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
            <Reveal>
              <span className="mx-auto block h-px w-10 bg-primary-foreground/50" aria-hidden="true" />
              <h2 className="mt-8 text-[2.1rem] text-primary-foreground sm:text-[2.7rem]">
                Talvez seja hora de olhar para você com mais cuidado.
              </h2>
              <p className="mx-auto mt-7 max-w-xl text-[0.975rem] text-primary-foreground/85">
                Se você sente que gostaria de compreender melhor sua relação com o corpo, o desejo,
                a sexualidade e consigo mesma, podemos conversar.
              </p>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-11 inline-flex items-center justify-center rounded-full bg-card px-9 py-4 text-xs font-medium tracking-[0.14em] uppercase text-primary-dark transition-colors duration-300 hover:text-accent"
              >
                Quero conversar
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
