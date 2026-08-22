# ALTR site

Astro + Tailwind CSS v4 + GSAP. Five pages, one shared nav/footer.

## Run it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

## Structure

```
src/
  components/
    Nav.astro          top navigation (social links, About, Join ALTR, Prayer, Give)
    Footer.astro
    SocialLinks.astro   icon row — update hrefs to your real profiles
    AltrLogo.astro         the flame signature, reused across pages
  layouts/
    Layout.astro        shared head, fonts, nav/footer wrapper
  scripts/
    reveal.js           GSAP ScrollTrigger fade-up for anything with class="reveal"
  pages/
    index.astro         Landing: hero, where to find us, Twitch/Discord, previous services, YouTube, prayer CTA
    about.astro          Mission statement + who we are
    join.astro            Become part of ALTR + how to reach out
    prayer.astro          Prayer/connect form + direct email
    give.astro             Simple giving page (linked from nav)
```

## Things to swap out before launch

- **Social links** — `src/components/SocialLinks.astro` has placeholder
  hrefs for Instagram, TikTok, Facebook, YouTube, Twitch.
- **Twitch / Discord / YouTube URLs** — currently point at the bare
  platform homepages (`twitch.tv/`, `discord.gg/`, `youtube.com/`) in
  `index.astro`, `join.astro`, and `prayer.astro`.
- **Prayer form** — `src/pages/prayer.astro` renders a real form but it
  doesn't post anywhere yet. Wire the `<form>` up to a backend
  Google form.
- **Images** — the "Previous services" and YouTube sections use
  `picsum.photos` placeholder images (seeded, so they're stable across
  reloads). Swap the `src` in `index.astro` for real thumbnails/photos.
- **Stream schedule / copy** — service times, dates, and titles are
  placeholder content throughout `index.astro`; search for "7:00 PM ET"
  and the `services` array to update.

## Design notes

- Fonts load from Google Fonts in `Layout.astro` (Fraunces for display,
  Inter for body, JetBrains Mono for the small uppercase labels).
  Self-host them instead if you want to drop the external request.
- Color tokens live in `src/styles/global.css` under `@theme` — change
  the hex values there and they cascade everywhere (buttons, cards,
  text, the ember glow).
- Scroll-reveal is driven by `src/scripts/reveal.js`; add `class="reveal"`
  to any element you want to fade up into view. Respects
  `prefers-reduced-motion`.
