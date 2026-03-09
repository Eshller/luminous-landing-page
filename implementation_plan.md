# Hero Section Implementation Plan — AI Data Services Landing (Phase One)

**Purpose:** Autonomous execution blueprint for building the Hero Section with canvas-based scrollytelling (data chaos → neural grid sequence).  
**Scope:** Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, Lenis, preloaded JPEG sequence.  
**Assets:** Single sequence at `/public/sequence-1/` — **120 frames**, naming: `ezgif-frame-001.jpg` … `ezgif-frame-120.jpg` (3-digit zero-padded).

---

## 1. Technology Stack (Verification & Gaps)

| Layer        | Choice                         | Action |
|-------------|---------------------------------|--------|
| Framework   | Next.js 16 (App Router)         | Already present. |
| Language    | TypeScript                      | Already present. |
| Styling     | Tailwind CSS v4                 | Already present. |
| Animation   | Framer Motion                   | **Add dependency.** |
| Smooth scroll | Lenis (@studio-freight/lenis) | **Add dependency.** |
| Fonts       | Geist, Inter (layout already loads) | Use for hero; ensure `--font-geist-sans` / `--font-inter` available. |

**Commands to run (from repo root):**
```bash
npm install framer-motion @studio-freight/lenis
npm install -D @types/lenis
```
If `@types/lenis` is not available, declare a minimal type in `lib/lenis.d.ts` (see Section 6).

---

## 2. Project Folder Structure (Target)

Create the following. Existing files (e.g. `app/layout.tsx`, `app/globals.css`, `lib/utils.ts`) are modified in place; new paths are created as needed.

```
app/
  layout.tsx              # Optional: wrap children with LenisProvider (see Section 6)
  page.tsx                 # Replace with Hero + spacer (Section 7)
  globals.css              # Add hero CSS variables (Section 3)
components/
  hero/
    HeroScroll.tsx         # Main hero: sticky container, canvas, scroll→frame (Section 8)
    HeroOverlay.tsx        # Glassmorphic headline, subheadline, CTA (Section 9)
hooks/
  useImagePreloader.ts     # Preload sequence images (Section 5)
  useScrollProgress.ts     # Optional: normalized scroll 0–1 for a given ref (Section 8)
lib/
  utils.ts                 # Existing (cn)
  constants.ts             # Hero constants: frame count, paths, FPS (Section 4)
  lenis.d.ts               # If no @types/lenis: minimal Lenis type declaration
```

All client-side components and hooks must live in files that start with `"use client";`.

---

## 3. Visual & UX — CSS Variables (globals.css)

Add to `app/globals.css` (e.g. inside `:root` and `.dark`, or a dedicated `[data-theme="hero"]` block if you prefer scoping):

- **Background:** Deep black/charcoal gradient or solid.
  - `--hero-bg-start: #050505;`
  - `--hero-bg-end: #000000;`
- **Accents (for overlays, borders, CTAs):**
  - `--hero-accent-blue: #3b82f6` (or more electric, e.g. `#0ea5e9`);
  - `--hero-accent-purple: #8b5cf6`;
  - `--hero-accent-emerald: #10b981`.
- **Glassmorphism:**
  - `--hero-glass-bg: rgba(255,255,255,0.04);`
  - `--hero-glass-border: rgba(255,255,255,0.08);`
  - `--hero-glass-blur: 12px;`
- **Typography:** Use existing `--font-geist-sans` or `--font-inter`; add if needed:
  - `--hero-heading-tracking: 0.02em` (or wider for subheadings, e.g. `0.08em`).

Ensure the hero container uses these variables so the overlay and CTA match the “deep tech, minimalist, ultra-premium” direction.

---

## 4. Hero Constants (lib/constants.ts)

Create `lib/constants.ts` (no `"use client"` needed; plain constants).

- **Frame count:** `SEQUENCE_FRAME_COUNT = 120`.
- **Base path:** `SEQUENCE_BASE_PATH = "/sequence-1/ezgif-frame-"`.
- **File naming:** Frames are `ezgif-frame-001.jpg` … `ezgif-frame-120.jpg`. Provide a helper:
  - `getSequenceFramePath(index: number): string`  
  - Returns `SEQUENCE_BASE_PATH + String(index + 1).padStart(3, "0") + ".jpg"`  
  - For `index` in `[0, SEQUENCE_FRAME_COUNT - 1]`.
- **FPS (for reference only, e.g. preload timing):** `SEQUENCE_FPS = 15`.
- **Total duration (seconds):** `SEQUENCE_DURATION = SEQUENCE_FRAME_COUNT / SEQUENCE_FPS`.

Export these so `useImagePreloader` and `HeroScroll` use the same values.

---

## 5. useImagePreloader Hook (hooks/useImagePreloader.ts)

- **File:** `hooks/useImagePreloader.ts`.
- **Directive:** `"use client";`.
- **Signature:**  
  `useImagePreloader(urls: string[]): { images: (HTMLImageElement | null)[]; isReady: boolean; error: Error | null }`
- **Behavior:**
  - Accept an array of image URLs (e.g. generated from `getSequenceFramePath` for indices `0..SEQUENCE_FRAME_COUNT-1`).
  - On mount, create `new Image()` for each URL, set `src`, and collect into an array (order preserved).
  - Track when all images have loaded (use `onload` / `onerror`). Set `isReady` to `true` only when every image has loaded; on any error, set `error` and still consider “ready” so the UI can fallback (e.g. show first frame or placeholder).
  - Avoid loading the same URL twice; keep a single array of `HTMLImageElement | null` (null for failed).
- **Usage:** The hero will pass URLs built from `getSequenceFramePath(i)` for `i = 0..119`. Preload as soon as the hero component mounts (e.g. in `HeroScroll`).

---

## 6. Lenis Smooth Scroll

- **Install:** `@studio-freight/lenis` (and `@types/lenis` if available).
- **Integration:** Initialize Lenis on the document scroll (e.g. in a `useEffect` in `layout.tsx` or in a small client wrapper that wraps `{children}`). On each frame (e.g. `requestAnimationFrame`), call `lenis.raf(time)`.
- **Optional:** Expose Lenis instance via React context so the hero can optionally hook into scroll position from Lenis instead of `window` (recommended for buttery scroll-to-frame sync).
- **Reduced motion:** If `window.matchMedia("(prefers-reduced-motion: reduce)").matches`, do not initialize Lenis (or disable smoothing) and rely on native scroll.
- **Type declaration:** If there is no `@types/lenis`, add `lib/lenis.d.ts` with a minimal declaration for the Lenis constructor and `raf`, `scrollTo`, and any properties you use (e.g. scroll position).

---

## 7. Page Structure (app/page.tsx)

- **Directive:** The page can remain a Server Component; only the hero tree needs to be client.
- **Structure:**
  - A single main wrapper (e.g. `<main>`).
  - First child: `<HeroScroll />` (client component).
  - Second child: A spacer/section with sufficient height (e.g. `min-h-screen` or `h-[300vh]`) so users can scroll through the hero’s sticky area (e.g. 400vh) and see the full sequence.
- **No navbar/footer required in this phase;** focus is hero only.

---

## 8. HeroScroll Component (components/hero/HeroScroll.tsx)

- **Directive:** `"use client";`.
- **Structure:**
  - **Outer container:** Sticky wrapper with height `h-[400vh]` (or equivalent in Tailwind). This creates the long scroll range for the sequence.
  - **Sticky inner container:** A div with `position: sticky; top: 0; height: 100vh; width: 100%` so it stays in view while the user scrolls through the 400vh.
  - **Canvas:** A single `<canvas>` that fills the sticky inner container (100% width/height). Use a resize observer (or window resize) to set `canvas.width` and `canvas.height` to the element’s client dimensions (and scale for devicePixelRatio if desired for sharpness).
  - **Scroll → frame index:**  
    - Get scroll progress in `[0, 1]` over the hero’s 400vh (e.g. using scroll position relative to the section’s offsetTop and height, or using Lenis scroll if available).  
    - `frameIndex = Math.min(Math.floor(scrollProgress * SEQUENCE_FRAME_COUNT), SEQUENCE_FRAME_COUNT - 1)`.  
    - Clamp so it never goes out of range.
  - **Drawing:** In a `useEffect` or animation frame loop that runs when `frameIndex` or canvas size changes: get the preloaded image for `frameIndex` from `useImagePreloader`; if it exists, draw it onto the canvas (scale to cover or contain the canvas as per design; typically `ctx.drawImage(img, 0, 0, canvas.width, canvas.height)` for cover).
  - **Preloading:** Call `useImagePreloader` with the array of 120 URLs from `getSequenceFramePath`. Optionally show a loading state (e.g. overlay or placeholder) when `!isReady`; start drawing only when `isReady` (or when the current frame’s image is loaded).
- **Overlay:** Render `<HeroOverlay />` (or equivalent overlay UI) as a sibling of the canvas inside the sticky inner container, positioned above the canvas (z-index), so the glassmorphic text and CTA sit on top.

---

## 9. Hero Overlay (components/hero/HeroOverlay.tsx)

- **Directive:** `"use client";`.
- **Layout:** Absolutely positioned over the hero canvas; use the hero CSS variables for background, border, blur (glassmorphism). Centered or left-aligned as per design (e.g. max-width container with padding).
- **Content (copy):**
  - **Primary headline:** “Powering Frontier AI with Imperative Data.” (Or a one-line variant suitable for ML Directors.)
  - **Subheadline:** One short, technical line — e.g. “Enterprise-grade data pipelines and infrastructure for training and inference at scale.”
  - **Primary CTA:** Button, e.g. “Request a demo” or “Speak to an expert,” linking to `#contact` or a placeholder route.
- **Animation (Framer Motion):**  
  - Receive `scrollProgress: number` (0–1) as a prop from `HeroScroll`.  
  - **Fade in** headline/subheadline/CTA when `scrollProgress` is in a low range (e.g. 0–0.15).  
  - **Fade out or translate** (e.g. opacity and y) when `scrollProgress` exceeds a threshold (e.g. 0.7–1) so the overlay recedes as the user approaches the end of the hero.  
  - Use `motion.div` (or `motion.h1`, `motion.p`, `motion.a`) with `animate` driven by `scrollProgress` (e.g. `opacity: scrollProgress < 0.15 ? 1 : scrollProgress > 0.7 ? 0 : 1`, and optional `y` for subtle parallax). Avoid `whileInView` for this; use explicit progress so it stays in sync with canvas.
- **Styling:** Typography — elegant technical sans (Geist/Inter); wide letter-spacing on subheadline; accent color for CTA (e.g. electric blue or emerald from CSS variables).

---

## 10. Scroll Progress for Hero

- **Source of truth:** The same element that defines the 400vh height (the sticky wrapper) should be used to compute progress. Options:
  - **Option A:** Use `useScrollProgress(ref)` where `ref` is the outer 400vh container: progress = (scrollY - ref.offsetTop) / (ref.offsetHeight - window.innerHeight), clamped to [0, 1].
  - **Option B:** If using Lenis, use Lenis’s scroll position and the same formula with the section’s top and height.
- **Update frequency:** Prefer updating on Lenis’s `raf` or on `scroll` (throttled or passive) so the canvas frame index and overlay animations stay in sync.

---

## 11. Performance & Best Practices

- **Preload:** All 120 images are preloaded via `useImagePreloader` before enabling scroll-driven frame updates (or show loading state until ready). This avoids frame drops and flicker.
- **Canvas:** Draw only the current frame; no need to redraw when scroll hasn’t changed. Use a single `useEffect` that depends on `frameIndex`, canvas ref, and image array.
- **Client boundaries:** Every component that uses `useState`, `useEffect`, Framer Motion, or canvas must be in a file with `"use client";` (HeroScroll, HeroOverlay, useImagePreloader, and any Lenis wrapper).
- **Reduced motion:** If `prefers-reduced-motion: reduce`, consider showing only the first or last frame (no scroll-driven animation) and still show the overlay.

---

## 12. Copy Summary (Enterprise Hero)

- **Headline:** “Powering Frontier AI with Imperative Data.”
- **Subheadline:** “Enterprise-grade data pipelines and infrastructure for training and inference at scale.”
- **CTA:** “Request a demo” (or “Speak to an expert”) — link to `#contact` or `/contact` placeholder.

Vocabulary and tone should sound authoritative and technical, suitable for Machine Learning Directors and data/ML platform leads.

---

## 13. Execution Order for an AI Agent

1. Install dependencies: `framer-motion`, `@studio-freight/lenis`, and types if available.
2. Add hero CSS variables to `app/globals.css` (Section 3).
3. Create `lib/constants.ts` with frame count, base path, and `getSequenceFramePath` (Section 4).
4. Implement `hooks/useImagePreloader.ts` (Section 5).
5. Add Lenis setup (and optional context) and `lib/lenis.d.ts` if needed (Section 6).
6. Create `components/hero/HeroScroll.tsx`: sticky 400vh container, canvas, scroll→frame, preloader integration, draw current frame (Section 8).
7. Create `components/hero/HeroOverlay.tsx`: glassmorphism panel, headline, subheadline, CTA, Framer Motion driven by scroll progress (Section 9).
8. Wire scroll progress in HeroScroll and pass it to HeroOverlay; ensure overlay is rendered inside the sticky inner container (Section 10).
9. Update `app/page.tsx`: render HeroScroll and a spacer section (Section 7).
10. Optionally add `useScrollProgress` hook if you use a ref-based progress (Section 10).
11. Test: scroll through the page and verify the sequence plays from chaos to grid with no dropped frames and smooth overlay fade in/out.
12. Verify reduced-motion behavior and Lenis disabled when preferred.

---

## 14. Asset Reference (Exact)

- **Path:** `/public/sequence-1/`
- **Naming:** `ezgif-frame-001.jpg` … `ezgif-frame-120.jpg` (3-digit zero-padded).
- **Count:** 120 frames.
- **FPS:** 15 (for timing reference only; playback is scroll-driven).
- **Content:** Data chaos → structured neural grid (camera push).

The implementation must use this exact path and naming. Do not assume `0001.jpg`; use `ezgif-frame-XXX.jpg` as above.
