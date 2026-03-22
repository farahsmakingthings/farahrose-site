# Farah Rose — Design Brainstorm

## Context
Farah Rose is a Product Designer at Meta (Instagram, Messenger) and a prolific fine artist based in Brooklyn. The site needs to hold a professional portfolio, a fine art gallery, an experimental/playground section, and a shop. The aesthetic must NOT be derived from the paintings themselves — it must be independently designed and sophisticated, drawing from the four inspiration sites.

---

<response>
<probability>0.07</probability>
<text>

## Idea A: "Archival Brutalism"

**Design Movement:** Neo-Brutalism meets Swiss International Style — the aesthetic of a well-worn design annual, photocopied zines, and museum catalog typography.

**Core Principles:**
1. Raw structure exposed — borders, rules, and grid lines are visible design elements, not hidden scaffolding.
2. Type as image — headlines are enormous, sometimes rotated or stacked, functioning as graphic objects.
3. Restraint in color, excess in form — a nearly monochromatic palette punctuated by one violent accent.
4. Every section feels like a different "page" in a printed publication.

**Color Philosophy:** Off-white (#F5F0E8 cream) as the base — warm, papery, aged. Deep charcoal (#1A1A1A) for all text. One accent: a burnt sienna/terracotta (#C85A2A) used sparingly for underlines, hover states, and price tags. The warmth of the cream prevents the brutalism from feeling cold.

**Layout Paradigm:** Asymmetric editorial grid. Navigation is a single horizontal bar of all-caps condensed type. The hero is a massive typographic statement with a small image inset — not the other way around. Sections are separated by thick 2px horizontal rules, not whitespace. The shop uses a strict 2-column grid with visible cell borders.

**Signature Elements:**
- Condensed uppercase serif (like "Playfair Display Condensed" or "Cormorant Garamond") for all display text.
- Visible grid lines and borders as decorative elements.
- Numbered sections (01, 02, 03) in small monospace type.

**Interaction Philosophy:** Hover states reveal information rather than animate it. Hovering a painting shows its title and year in a tooltip that looks like a museum label. Cursor changes to a crosshair over interactive elements.

**Animation:** Minimal. Page transitions are a quick horizontal wipe. Elements don't float in — they snap into place. The marquee ticker in the footer scrolls slowly with exhibition-style text.

**Typography System:**
- Display: Cormorant Garamond Condensed Bold — for hero text, section titles
- Body: IBM Plex Mono — for all body copy, giving a technical/archival feel
- Labels: Bebas Neue — for navigation and category labels

</text>
</response>

<response>
<probability>0.08</probability>
<text>

## Idea B: "Kinetic Modernism" ← SELECTED

**Design Movement:** Late-90s/early-2000s digital modernism filtered through contemporary motion design — think Emigre magazine meets a well-designed tech portfolio. The aesthetic of someone who works at Instagram but also paints on weekends. Confident, playful, precise.

**Core Principles:**
1. The grid is a tool, not a cage — layouts are structured but sections break the grid intentionally.
2. Motion is meaning — every interaction communicates something about the content it touches.
3. Dual-register typography — a bold grotesque for the "designer" voice, a delicate serif for the "artist" voice.
4. Color as punctuation — the palette is restrained until it isn't.

**Color Philosophy:** Near-black (#0D0D0D) background for the hero and navigation — this grounds the site in the "designer" register. Warm off-white (#F2EDE4) for content sections. Two accent colors: Electric Lime (#C8FF00) for the product design / tech sections, and Dusty Rose (#E8A89C) for the fine art / shop sections. These two accents never appear together — they mark different "modes" of Farah's identity.

**Layout Paradigm:** The homepage is a full-bleed dark hero with a large typographic statement. Below the fold, the layout shifts to a warm off-white with a loose, magazine-style editorial grid. The navigation is minimal — a wordmark on the left, 4 text links on the right. The experimental section uses a horizontal scroll paradigm, breaking the vertical flow of the rest of the site.

**Signature Elements:**
- A scrolling marquee ticker between sections (like heyefi.com and treeptours.com) carrying rotating text about Farah's identity.
- Image hover states that reveal a color overlay with the work's title in large type.
- A custom cursor — a small circle that expands on hover over clickable elements.

**Interaction Philosophy:** The site rewards curiosity. Hovering reveals; clicking transforms. The shop items have a subtle tilt effect on hover. The experimental section items are draggable.

**Animation:** Framer Motion-powered. Hero text enters with a staggered reveal (each word slides up from below). Section transitions use a smooth opacity + translateY. The marquee runs continuously. Image grids have a staggered entrance when scrolled into view.

**Typography System:**
- Display/Nav: DM Sans ExtraBold — clean, modern grotesque with personality
- Art sections: Playfair Display Italic — delicate, expressive, contrasts the grotesque
- Body: DM Sans Regular — readable, neutral
- Accent/Labels: Space Mono — for metadata, prices, dates, coordinates

</text>
</response>

<response>
<probability>0.06</probability>
<text>

## Idea C: "Tender Maximalism"

**Design Movement:** Maximalist editorial design inspired by fashion magazines (i-D, Dazed) and independent art publications — but tender rather than aggressive. Think: lots of elements, but all of them soft.

**Core Principles:**
1. More is more, but everything must be intentional.
2. Overlapping elements create depth and intimacy.
3. Handwritten or hand-drawn elements break the digital coldness.
4. The site feels like a personal scrapbook that happens to be very well designed.

**Color Philosophy:** A warm, saturated palette: deep burgundy (#5C1A2E), cream (#FAF0E0), sage green (#8FAF8A), and a pop of electric yellow (#FFE033). The background alternates between cream and burgundy sections, creating a strong rhythm.

**Layout Paradigm:** Collage-style. Images overlap text. Text overlaps images. There is no single grid — each section has its own internal logic. The navigation is a vertical sidebar on the left. The shop uses a masonry layout with items at slightly different scales.

**Signature Elements:**
- Hand-drawn underlines and circles (SVG) around key words.
- Sticker-style elements (small illustrated badges) scattered throughout.
- A "currently listening to" or "currently thinking about" widget in the corner.

**Interaction Philosophy:** The site feels alive and personal. Elements wobble slightly on hover. Clicking a painting opens a full-screen view with a handwritten note about the work.

**Animation:** Playful and organic. Elements enter with a slight rotation and scale. The cursor leaves a trail of small dots. Page transitions are a quick fade with a slight zoom.

**Typography System:**
- Display: Fraunces (variable, optical size) — expressive, literary
- Body: Libre Baskerville — warm, readable serif
- Accent: Caveat — handwritten feel for labels and annotations

</text>
</response>

---

## Selected Direction: **Idea B — "Kinetic Modernism"**

This direction best captures Farah's dual identity as a precision-oriented product designer and a free-spirited fine artist. The dark hero grounds the site in professional credibility; the warm editorial sections give the art room to breathe; and the motion design reflects the energy of someone who works at one of the world's most dynamic tech companies while maintaining a serious studio practice.
