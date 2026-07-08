import type { Metadata } from "next";
import { Unbounded, Space_Grotesk } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  weight: ["400", "500", "600", "700", "900"],
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

export const metadata: Metadata = {
  title: "CABINE | Booking de DJs",
  description:
    "Encontre DJs de psytrance, techno, tech house e mais. Booking direto com quem toca, gratuito para o DJ.",
  openGraph: {
    title: "CABINE | Booking de DJs",
    description:
      "O line-up certo para a sua festa. DJs por vertente, agenda aberta, booking direto.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${unbounded.variable} ${grotesk.variable} bg-ink font-body text-zinc-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
