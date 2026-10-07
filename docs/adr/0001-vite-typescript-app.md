# Vite and TypeScript for the product app

**Status:** accepted

The product is one Vite app written in TypeScript. Planning asked for a bundle of CSS and JavaScript that agents can work in directly, with Tailwind for styling. The public Experience is a small interactive page, and the Studio is a form-driven editor over the same API, so a single client bundle plus one HTTP server is the whole deploy.

## Considered options

- **Next.js.** Set aside. The server/client split adds surface that this product does not need, and it fights a runtime whose job is a canvas or a wheel on one public page.
- **Astro.** Set aside. A second rendering model for the marketing page and the Studio gives agents two ways to build the same form.
- **Plain script tags, as in the Calais page.** Set aside for the product shell. The reference page stays as a static file. The product needs a dev server, a test runner, and a CSS pipeline.

## Consequences

Studio routes and the Experience host live in the same Vite build. One Node process serves that build and the HTTP API on the same origin in production.
