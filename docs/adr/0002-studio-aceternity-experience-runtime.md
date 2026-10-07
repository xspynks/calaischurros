# Aceternity in the Studio, a plain TypeScript runtime for Experiences

**Status:** accepted

Aceternity UI (named "Ace Eternity" in planning) is the visual language of the signed-out home and the Studio: Tailwind, and the motion those components ship with. Copy in the components the product actually uses. Aceternity's components are React, so the Studio host is React.

The Raspadinha and Roleta interactions live in a plain TypeScript runtime. A thin host mounts `mount(element, props)` and listens for progress. The Experience is painted with the Campaign theme (background, text, accent, Cover color, logo, copy). It does not wear the Studio's visual language.

## Considered options

- **Studio in plain DOM, with Aceternity restyled by hand.** Set aside. It drops the component kit planning asked for.
- **Experience built as React state around the canvas.** Set aside. The reference interaction is a canvas with pointer events. Keeping it in a small runtime makes the second Template a new module, not a new screen architecture.

## Consequences

A later three-dimensional Prize mounts inside that same runtime. Three.js does not enter the Studio. The Meshy plan in the spec attaches media to a Prize; it does not replace the host.
