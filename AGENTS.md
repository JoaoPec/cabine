<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# CABINE — Booking de DJs

Plataforma de booking de DJs similar ao Fatal Model. DJs criam perfil por vertente, contratantes fazem orçamento direto. Receita via planos de assinatura mensal.

---

## Tech Stack

| Layer | Tech | Versão |
|---|---|---|
| Framework | Next.js (App Router) | 16.2.10 |
| React | | 19.2.4 |
| Styling | Tailwind CSS | ^4 (via `@tailwindcss/postcss`) |
| Animation | Motion (ex-Framer Motion) | ^12.42.2 |
| Icons | Phosphor Icons React | ^2.1.10 |
| Fonts | Unbounded (display), Space Grotesk (body) | Google Fonts via `next/font` |
| Linting | ESLint | ^9 (flat config) |
| Deploy | Vercel | `.vercel/` config presente |

---

## Design Tokens (Tailwind v4 — `app/globals.css`)

```css
@theme inline {
  --color-ink: #0b0b0c;          /* fundo principal */
  --color-panel: #131315;        /* cards / seções alternadas */
  --color-acid: #c8f169;         /* accent verde — CTAs, badges, destaques */
  --font-display: var(--font-unbounded);
  --font-body: var(--font-grotesk);
}
```

- Fundo: `bg-ink`
- Texto: `text-zinc-100` (body), `text-white` (headings)
- Corpo: `text-zinc-400`
- Bordas: `border-white/10` ou `border-white/5`
- CTA principal: `bg-acid text-ink`
- Seleção de texto: `bg-acid text-ink`
- Scrollbar: fina, cor `rgba(255,255,255,0.12)`

---

## Componentes Atuais

| Componente | Path | Descrição |
|---|---|---|
| `Nav` | `components/Nav.tsx` | Header fixo com blur, mobile menu animado com Motion |
| `Hero` | `components/Hero.tsx` | Hero com 2 imagens em cascata no eixo Z, CTAs |
| `Genres` | `components/Genres.tsx` | Rail horizontal com snap-scroll de vertentes |
| `Roster` | `components/Roster.tsx` | Grid de cards de DJ com badge de plano, link pra `/dj/[slug]` |
| `HowItWorks` | `components/HowItWorks.tsx` | 3 passos do booking (Escolha → Feche → Toque) |
| `ForDJs` | `components/ForDJs.tsx` | Seção de planos (Gratuito/Pro/Premium) com features e CTAs |
| `FinalCTA` | `components/FinalCTA.tsx` | CTA do fim da página |
| `Footer` | `components/Footer.tsx` | Footer com links |
| `Reveal` | `components/Reveal.tsx` | Wrapper de animação scroll-triggered via Motion |

---

## Rotas

| Rota | Tipo | Descrição |
|---|---|---|
| `/` | Static | Landing page com todas as seções (Hero, Genres, Roster, HowItWorks, ForDJs, FinalCTA) |
| `/planos` | Static | Página dedicada de comparação de planos com tabela e FAQ |
| `/dj/[slug]` | Dynamic | Perfil individual do DJ (mockado com dados hardcoded por enquanto) |

---

## Planos de Assinatura

| Plano | Preço | Destaques |
|---|---|---|
| **Gratuito** | R$ 0 | Perfil público, nome artístico, vertente, cidade, contato básico |
| **Pro** | R$ 29/mês | Fotos (8), vídeos/sets, agenda, redes sociais, formulário de orçamento, selo destacado |
| **Premium** | R$ 79/mês | Tudo do Pro + verificado (check azul), topo nas buscas, estatísticas, fotos (16), suporte 4h |

---

## Estrutura de Dados Planejada (Prisma)

```
User (id, name, email, password, image, role, timestamps)
  ├── DJProfile (1:1) → artistName, realName, bio, genres[], city, state, fee, 
  │                     photos[], videos[], socialLinks{}, agenda[], featured, verified, visits
  ├── Label (1:1) → name, description, logo, website, socialLinks{}
  │     └── DJProfile[] (1:N) → DJs vinculados à label
  └── Subscription (1:1) → planId, status, stripeSubscriptionId, periodStart/End

Plan (id, name, slug, price, features[], stripePriceId)

Booking (djProfileId, clientName, clientEmail, clientPhone, eventDate, eventType, 
         city, message, budget, status)
```

---

## ROADMAP — O que falta implementar

### Fase 1: Banco e Auth (backend mínimo)

- [ ] Instalar e configurar **Prisma** com **SQLite** (dev) / PostgreSQL (prod)
- [ ] Criar schema Prisma com todos os modelos acima
- [ ] Rodar `npx prisma db push` pra gerar o banco
- [ ] Configurar **NextAuth v5** (`next-auth@beta`) — **ATENÇÃO**: Next.js 16.2.10 não é compatível com next-auth@5.0.0-beta.25 (peer dependency `^14 || ^15`). Usar `--legacy-peer-deps` ou esperar atualização. Alternativa: implementar auth manual com JWT + bcryptjs.
- [ ] Criar middleware de proteção de rotas (`middleware.ts`)
- [ ] Páginas de login/registro (`/entrar`, `/cadastro`)

### Fase 2: Perfil do DJ (CRUD)

- [ ] Formulário de criação/edição de perfil (`/dashboard/perfil`)
- [ ] Upload de fotos (Cloudinary ou Vercel Blob)
- [ ] Embed de sets (YouTube/SoundCloud)
- [ ] Gerenciamento de agenda
- [ ] Página pública `/dj/[slug]` puxando dados reais do banco

### Fase 3: Labels

- [ ] CRUD de label (`/dashboard/label`)
- [ ] Vincular DJs à label
- [ ] Página pública `/label/[slug]` com grid de DJs da label

### Fase 4: Pagamentos (Stripe)

- [ ] Configurar Stripe Connect/Checkout
- [ ] Webhook de assinatura (`/api/webhooks/stripe`)
- [ ] Página de checkout e sucesso/cancelamento
- [ ] Gerenciar upgrade/downgrade/cancelamento

### Fase 5: Booking

- [ ] Formulário de orçamento funcional (envia e-mail pro DJ)
- [ ] Notificações (e-mail e in-app)
- [ ] Status do booking (pendente → aceito → concluído)

### Fase 6: Busca e Destaque

- [ ] Busca por vertente, cidade, data
- [ ] Ordenação por plano (Premium primeiro)
- [ ] Filtros avançados

---

## Convenções de Código

- **NÃO adicionar comentários** a menos que explicitamente solicitado
- **NÃO instalar dependências** sem antes confirmar compatibilidade com Next.js 16
- **NÃO criar integrações complexas** (banco, auth, pagamentos) sem o usuário pedir explicitamente — a landing page é prioridade
- Usar `Link` do `next/link` para navegação interna, nunca `<a>` puro
- Componentes "use client" só quando necessário (estado, eventos, animations)
- Imagens: usar `next/image` com `images.unsplash.com` (já configurado no `next.config.ts`)
- Motion: usar `useReducedMotion()` pra respeitar acessibilidade
- Tailwind v4: sem `@apply`, sem config JS — tudo no CSS via `@theme inline`
