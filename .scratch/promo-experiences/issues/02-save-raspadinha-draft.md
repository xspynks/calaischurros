# 02: A Member saves a Raspadinha draft

Part of `.scratch/promo-experiences/spec.md`.

**What to build:** A person can read a short signed-out home page, create an Organization, and sign in to a pt-BR Studio. They can build a Raspadinha draft (name, slug, colors, logo, header, headline, instruction, validity, footer, prize artwork) and run a Preview Play that shows a sample Outcome without issuing a Coupon or storing a Lead. The draft is still there after a reload and after signing out and back in.

**Blocked by:** 01: A Visitor plays the seeded Raspadinha

**Status:** ready-for-agent

- [ ] A new Member can create an Organization with name, email, and password, then sign in
- [ ] The signed-out home explains that the product creates a promotional page to share, and it leads to sign-up
- [ ] Studio chrome is Portuguese (Brazil)
- [ ] A Member can save a Raspadinha draft with name, slug, theme colors, logo, header image, headline, instruction, validity, footer, and prize artwork
- [ ] Images are limited to PNG, JPEG, and WebP at 2 MB
- [ ] The draft survives a reload and a new session
- [ ] A Preview Play shows the draft Experience and a sample Outcome
- [ ] A Preview Play does not issue a Coupon or store a Lead
- [ ] Sign out ends the session
- [ ] HTTP tests cover sign-up, save, reload, and preview
