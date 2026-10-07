# 01: A Visitor plays the seeded Raspadinha

Part of `.scratch/promo-experiences/spec.md`.

**What to build:** A Visitor opens the seeded Calais Experience on a phone-width page, scratches the Cover or uses the reveal control, and sees the stored prize message. Reloading shows the same Outcome. The page is the Campaign's brand, in one column, with no Studio navigation. This ticket also brings up the Vite app, Postgres, and the HTTP API, because the repository is still the static Calais page. That static page stays in the repo as the visual reference.

**Blocked by:** None (can start immediately).

**Status:** ready-for-agent

- [ ] A Visitor can open the seeded Share URL and see the Calais header, the instruction "Raspe aqui", the validity line, and the store footer
- [ ] The theme matches the reference colors: background `#ed6b6e`, text `#fff9e5`, accent `#f9de7e`, Cover `#3f3e3e`
- [ ] The prize artwork stays covered until 45% of the Cover is cleared or the Visitor uses the reveal control
- [ ] Finger and mouse both scratch, through one coordinate path, and the page does not scroll during the gesture
- [ ] The brush is about 18% of the shorter side of the frame
- [ ] Play start returns the drawn prize artwork and omits any Coupon code, other Prizes, and weights
- [ ] Reveal returns the prize label and the message "Você ganhou 50% OFF nos churros tradicionais. Aproveite!"
- [ ] Reloading with the same visitor key returns the same Play and the same Outcome
- [ ] An unknown slug shows a not-available page
- [ ] The Reveal animation runs, and reduced motion shows the prize immediately
- [ ] HTTP tests cover start, reveal, and reload for the seeded Campaign
- [ ] The original static Calais page is still in the repository
