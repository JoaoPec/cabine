import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

type PlanName = "Gratuito" | "Pro" | "Premium";

interface DJData {
  artist: string;
  name: string;
  genre: string;
  city: string;
  state: string;
  country: string;
  bio: string;
  fee: string;
  plan: PlanName;
  verified: boolean;
  visits: number;
  photos: string[];
  sets: { platform: "YouTube" | "SoundCloud"; title: string; url: string }[];
  social: { instagram?: string; spotify?: string; soundcloud?: string; youtube?: string };
  availableDates: string[];
}

const djsBySlug: Record<string, DJData> = {
  kaora: {
    artist: "KAORA",
    name: "Marina Yamauchi",
    genre: "Psytrance",
    city: "Alto Paraíso",
    state: "GO",
    country: "Brasil",
    bio: "Marina é uma das revelações da cena psytrance brasileira. Residente do Universo Paralello desde 2023, ela transita entre o dark prog e o full-on com sets que vão do amanhecer ao pôr do sol. Já tocou em festivais como Ozora, Boom e Universo Paralello.",
    fee: "R$ 2.400",
    plan: "Premium",
    verified: true,
    visits: 2847,
    photos: [
      "photo-1533174072545-7a4b6ad7a6c3",
      "photo-1516450360452-9312f5e86fc7",
      "photo-1501281668745-f7f57925c3b4",
      "photo-1470225620780-dba8ba36b745",
    ],
    sets: [
      { platform: "YouTube", title: "KAORA - Live @ Universo Paralello 2025", url: "#" },
      { platform: "SoundCloud", title: "KAORA - Dark Prog Set (143 BPM)", url: "#" },
    ],
    social: {
      instagram: "kaora.psy",
      spotify: "#",
      soundcloud: "kaora-psy",
      youtube: "#",
    },
    availableDates: ["15 Jul 2026", "22 Jul 2026", "05 Ago 2026", "19 Ago 2026"],
  },
  vela: {
    artist: "V\u0112LA",
    name: "Bárbara Antunes",
    genre: "Melodic Techno",
    city: "São Paulo",
    state: "SP",
    country: "Brasil",
    bio: "Bárbara Antunes assina como V\u0112LA desde 2021. Seu som combina melodias profundas com baixos graves — um melodic techno que bebe do progressive house e do afro. Residente da D-EDGE, já dividiu line-up com Mind Against, Tale Of Us e Adriatique.",
    fee: "R$ 1.800",
    plan: "Pro",
    verified: false,
    visits: 1342,
    photos: [
      "photo-1493673272479-a20888bcee10",
      "photo-1574391884720-bbc3740c59d1",
      "photo-1563841930606-67e2bce48b78",
    ],
    sets: [
      { platform: "SoundCloud", title: "V\u0112LA - Warm Up D-EDGE (Mar 2026)", url: "#" },
    ],
    social: {
      instagram: "vela.music",
      spotify: "#",
      soundcloud: "vela-music",
    },
    availableDates: ["20 Jul 2026", "02 Ago 2026", "16 Ago 2026"],
  },
  rudiger: {
    artist: "RÜDIGER",
    name: "Rodrigo Kruger",
    genre: "Hard Techno",
    city: "Curitiba",
    state: "PR",
    country: "Brasil",
    bio: "Rodrigo Kruger é RÜDIGER desde que o hard techno ainda era 'techno pesado'. Radicado em Curitiba, ele pilota sets de 140+ BPM com kicks distorcidos e breakdowns hipnóticos. Manda no baile mais insalubre da região Sul.",
    fee: "R$ 2.100",
    plan: "Premium",
    verified: true,
    visits: 4210,
    photos: [
      "photo-1574391884720-bbc3740c59d1",
      "photo-1563841930606-67e2bce48b78",
      "photo-1493673272479-a20888bcee10",
      "photo-1501386761578-eac5c94b800a",
    ],
    sets: [
      { platform: "YouTube", title: "RÜDIGER - Warehouse Set @ Curitiba", url: "#" },
      { platform: "SoundCloud", title: "RÜDIGER - Hard Techno 145 BPM", url: "#" },
    ],
    social: {
      instagram: "rudiger.hard",
      spotify: "#",
      soundcloud: "rudiger-hard",
      youtube: "#",
    },
    availableDates: ["10 Jul 2026", "25 Jul 2026", "08 Ago 2026", "22 Ago 2026", "30 Ago 2026"],
  },
  malta: {
    artist: "MALTA",
    name: "Caio Malta",
    genre: "Tech House",
    city: "Florianópolis",
    state: "SC",
    country: "Brasil",
    bio: "Caio Malta leva o groove da ilha pro tech house. Seus sets são praianos, sujos na medida certa, com vocal chops e muito swing. Residente do P12 e do Warung Beach Club.",
    fee: "R$ 1.600",
    plan: "Pro",
    verified: false,
    visits: 923,
    photos: [
      "photo-1429962714451-bb934ecdc4ec",
      "photo-1518972559570-7cc1309f3229",
      "photo-1501281668745-f7f57925c3b4",
    ],
    sets: [
      { platform: "SoundCloud", title: "MALTA - Sunset Set @ P12", url: "#" },
    ],
    social: {
      instagram: "maltadj",
      spotify: "#",
      soundcloud: "maltadj",
    },
    availableDates: ["18 Jul 2026", "01 Ago 2026", "15 Ago 2026"],
  },
  dandara: {
    artist: "DANDARA",
    name: "Dandara Reis",
    genre: "House",
    city: "Salvador",
    state: "BA",
    country: "Brasil",
    bio: "Dandara Reis pilota house com gingado baiano. Seus sets misturam clássicos do Garage, afro house e vocal house com samples do samba-reggae. Residente do Festival Solar.",
    fee: "R$ 1.500",
    plan: "Gratuito",
    verified: false,
    visits: 187,
    photos: [
      "photo-1501281668745-f7f57925c3b4",
      "photo-1492684223066-81342ee5ff30",
    ],
    sets: [],
    social: {
      instagram: "dandara.house",
    },
    availableDates: [],
  },
  subsolo: {
    artist: "SUBSOLO",
    name: "Ian Prado",
    genre: "Drum & Bass",
    city: "Belo Horizonte",
    state: "MG",
    country: "Brasil",
    bio: "Ian Prado comanda a noite do D&B mineiro. SUBSOLO é selo e festa. No palco, entrega sets que vão do liquid ao neurofunk sem deixar o BPM cair.",
    fee: "R$ 1.900",
    plan: "Gratuito",
    verified: false,
    visits: 98,
    photos: [
      "photo-1501386761578-eac5c94b800a",
      "photo-1545128485-c400e7702796",
    ],
    sets: [],
    social: {
      instagram: "subsolo.dnb",
      soundcloud: "subsolo-dnb",
    },
    availableDates: [],
  },
};

const freeDjs = ["dandara", "subsolo"];

function PlanBadge({ plan }: { plan: PlanName }) {
  if (plan === "Premium") {
    return (
      <span className="flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[11px] font-medium text-amber-400">
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
          <path d="M5 8.5l2 2 4-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {plan}
      </span>
    );
  }
  if (plan === "Pro") {
    return (
      <span className="rounded-full border border-acid/30 bg-acid/10 px-3 py-1 text-[11px] font-medium text-acid">
        {plan}
      </span>
    );
  }
  return null;
}

export default async function DJProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dj = djsBySlug[slug];

  if (!dj) {
    return (
      <main>
        <Nav />
        <section className="flex min-h-[60vh] items-center justify-center pt-32">
          <div className="text-center">
            <h1 className="font-display text-4xl font-bold text-white">DJ não encontrado</h1>
            <Link href="/#djs" className="mt-6 inline-block rounded-full bg-acid px-6 py-3 text-sm font-semibold text-ink">
              Ver todos os DJs
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  const isFree = freeDjs.includes(slug);

  return (
    <main>
      <Nav />

      {/* Hero do perfil */}
      <section className="relative pt-24 lg:pt-32">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {/* Coluna da foto principal */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
                  <Image
                    src={`https://images.unsplash.com/${dj.photos[0]}?auto=format&fit=crop&w=600&h=720&q=80`}
                    alt={dj.artist}
                    width={600}
                    height={720}
                    className="w-full object-cover aspect-[5/6]"
                    priority
                  />
                </div>

                {/* Badges abaixo da foto */}
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {dj.verified && (
                    <span className="flex items-center gap-1 rounded-full bg-blue-500/10 px-3 py-1 text-[11px] font-medium text-blue-400">
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                        <path d="M5 8.5l2 2 4-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Verificado
                    </span>
                  )}
                  {dj.plan !== "Gratuito" && <PlanBadge plan={dj.plan} />}
                </div>
              </div>
            </div>

            {/* Coluna das infos */}
            <div className="lg:col-span-2">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
                    {dj.artist}
                  </h1>
                  <p className="mt-2 text-zinc-500">{dj.name}</p>
                </div>
                <span className="rounded-full border border-acid/30 bg-acid/10 px-4 py-1.5 text-[13px] font-medium text-acid">
                  {dj.genre}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-zinc-400">
                <span>{dj.city}, {dj.state}</span>
                <span className="text-zinc-700">|</span>
                <span>{dj.country}</span>
                {dj.plan !== "Gratuito" && (
                  <>
                    <span className="text-zinc-700">|</span>
                    <span>Cachê a partir de <strong className="font-semibold text-white">{dj.fee}</strong></span>
                  </>
                )}
              </div>

              {/* Bio */}
              <p className="mt-6 max-w-2xl leading-relaxed text-zinc-300">
                {dj.bio}
              </p>

              {/* Bloqueado - só mostra se for Pro ou Premium */}
              {isFree && (
                <div className="mt-6 rounded-[1.25rem] border border-white/10 bg-white/[0.02] p-6">
                  <p className="text-sm text-zinc-400">
                    <span className="font-semibold text-acid">{dj.artist}</span> está no plano{" "}
                    <span className="text-white">Gratuito</span>.{" "}
                    <Link href="/planos" className="underline underline-offset-4 hover:text-acid">
                      Faça upgrade pro plano Pro
                    </Link>{" "}
                    para ver cachê, agenda, fotos e formulário de orçamento.
                  </p>
                </div>
              )}

              {/* Redes sociais - apenas Pro e Premium */}
              {dj.plan !== "Gratuito" && (
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  {dj.social.instagram && (
                    <a href="#" className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[13px] text-zinc-400 transition-colors hover:border-white/30 hover:text-white">
                      <InstagramIcon /> @{dj.social.instagram}
                    </a>
                  )}
                  {dj.social.soundcloud && (
                    <a href="#" className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[13px] text-zinc-400 transition-colors hover:border-white/30 hover:text-white">
                      <SoundCloudIcon /> {dj.social.soundcloud}
                    </a>
                  )}
                  {dj.social.spotify && (
                    <a href="#" className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[13px] text-zinc-400 transition-colors hover:border-white/30 hover:text-white">
                      <SpotifyIcon /> Spotify
                    </a>
                  )}
                </div>
              )}

              {/* Galeria de fotos - apenas Pro e Premium */}
              {dj.photos.length > 1 && dj.plan !== "Gratuito" && (
                <div className="mt-10">
                  <h2 className="font-display text-lg font-semibold text-white">Fotos</h2>
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {dj.photos.map((photo, i) => (
                      <div
                        key={i}
                        className="overflow-hidden rounded-[1rem] border border-white/10"
                      >
                        <Image
                          src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=400&h=300&q=80`}
                          alt={`${dj.artist} foto ${i + 1}`}
                          width={400}
                          height={300}
                          className="w-full object-cover aspect-[4/3]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Sets - apenas Pro e Premium */}
              {dj.sets.length > 0 && dj.plan !== "Gratuito" && (
                <div className="mt-10">
                  <h2 className="font-display text-lg font-semibold text-white">Sets</h2>
                  <div className="mt-4 flex flex-col gap-3">
                    {dj.sets.map((set, i) => (
                      <a
                        key={i}
                        href={set.url}
                        className="flex items-center gap-3 rounded-[1rem] border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-white/30"
                      >
                        <span className={`text-[11px] font-medium ${set.platform === "YouTube" ? "text-red-400" : "text-orange-400"}`}>
                          {set.platform}
                        </span>
                        <span className="text-sm text-zinc-300">{set.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Agenda - apenas Pro e Premium */}
              {dj.availableDates.length > 0 && dj.plan !== "Gratuito" && (
                <div className="mt-10">
                  <h2 className="font-display text-lg font-semibold text-white">Agenda disponível</h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {dj.availableDates.map((date) => (
                      <span
                        key={date}
                        className="rounded-full border border-acid/20 bg-acid/5 px-3 py-1.5 text-[13px] text-acid"
                      >
                        {date}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Estatísticas - apenas Premium */}
              {dj.plan === "Premium" && (
                <div className="mt-10">
                  <h2 className="font-display text-lg font-semibold text-white">Estatísticas</h2>
                  <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                    <div className="rounded-[1rem] border border-white/10 bg-white/[0.02] p-4">
                      <div className="font-display text-2xl font-bold text-white">
                        {dj.visits.toLocaleString("pt-BR")}
                      </div>
                      <div className="mt-1 text-[13px] text-zinc-500">Visitas ao perfil</div>
                    </div>
                    <div className="rounded-[1rem] border border-white/10 bg-white/[0.02] p-4">
                      <div className="font-display text-2xl font-bold text-white">12</div>
                      <div className="mt-1 text-[13px] text-zinc-500">Orçamentos recebidos</div>
                    </div>
                    <div className="rounded-[1rem] border border-white/10 bg-white/[0.02] p-4">
                      <div className="font-display text-2xl font-bold text-white">#1</div>
                      <div className="mt-1 text-[13px] text-zinc-500">Ranking {dj.genre}</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Formulário de booking - apenas Pro e Premium */}
              {dj.plan !== "Gratuito" && (
                <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-panel p-6 md:p-8">
                  <h2 className="font-display text-lg font-semibold text-white">Solicitar orçamento</h2>
                  <p className="mt-2 text-sm text-zinc-400">
                    Preencha os dados abaixo que {dj.artist} recebe a proposta direto.
                  </p>
                  <form className="mt-6 flex flex-col gap-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-[13px] font-medium text-zinc-400">
                          Nome
                        </label>
                        <input
                          type="text"
                          className="w-full rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:border-acid/40 focus:outline-none"
                          placeholder="Seu nome"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-[13px] font-medium text-zinc-400">
                          E-mail
                        </label>
                        <input
                          type="email"
                          className="w-full rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:border-acid/40 focus:outline-none"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-[13px] font-medium text-zinc-400">
                          Data do evento
                        </label>
                        <input
                          type="date"
                          className="w-full rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white focus:border-acid/40 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-[13px] font-medium text-zinc-400">
                          Tipo de evento
                        </label>
                        <select className="w-full rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white focus:border-acid/40 focus:outline-none">
                          <option value="">Selecione</option>
                          <option>Festa</option>
                          <option>Festival</option>
                          <option>Club</option>
                          <option>Casamento</option>
                          <option>Corporativo</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-[13px] font-medium text-zinc-400">
                        Mensagem
                      </label>
                      <textarea
                        rows={3}
                        className="w-full rounded-[1rem] border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:border-acid/40 focus:outline-none"
                        placeholder="Conte um pouco sobre o evento..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-full bg-acid py-3 text-sm font-semibold text-ink transition-transform duration-300 hover:scale-[1.01] active:scale-[0.98]"
                    >
                      Enviar proposta
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function SoundCloudIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.56 8.87V17h8.76c1.85 0 3.68-1.43 3.68-3.87 0-2.38-1.84-3.85-3.74-4.06-.41-2.52-2.36-5.07-6.43-5.07-1.49 0-2.61.48-3.49 1.28.12.37.19.77.22 1.19-.67-.36-1.41-.56-2.19-.56-1.29 0-2.43.62-3.14 1.58-.27-.07-.55-.11-.83-.11C3.23 8.38 1.5 10.06 1.5 12.14s1.73 3.76 3.87 3.76h.76V8.87h1.36v7.03h1.36V8.87h1.35v7.03h1.36V8.87z" />
    </svg>
  );
}

function SpotifyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}
