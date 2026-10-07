# 04: Weighted Prizes and Coupons

Part of `.scratch/promo-experiences/spec.md`.

**What to build:** A Member defines several Prizes with labels, weights, and artwork. A Prize either draws a Coupon from an uploaded pool, receives a generated code, or shows a message. A Visitor's Play uncovers only the drawn Prize, and two Plays never share a code. When a pool is empty, later Plays are drawn among Prizes that can still be awarded. If none can, the Visitor sees a fallback message and no code. The Member can see available, issued, and redeemed Coupons, and can mark one redeemed.

**Blocked by:** 03: A Member publishes an Experience and shares it

**Status:** ready-for-agent

- [ ] A Member can add Prizes with a label, a positive integer weight, artwork, and an Outcome action of coupon-pool, coupon-generated, or message
- [ ] Play start sends only the drawn Prize's artwork
- [ ] Reveal of a coupon Prize returns one code, and a second Play does not receive that same code
- [ ] Generated codes omit `0`, `O`, `1`, and `I`
- [ ] An exhausted pool drops that Prize from later draws
- [ ] When nothing can still be awarded, Reveal shows "Os prêmios desta promoção se esgotaram." and no code
- [ ] The Studio lists Coupons as available, issued, or redeemed, and a Member can mark an issued Coupon redeemed
- [ ] A Preview Play still shows `PREVIEW` for a coupon Prize and does not consume a code
- [ ] Weights, other Prizes, and codes are absent from the play-start response
- [ ] HTTP tests cover a weighted draw, a unique code, an exhausted pool, and redemption
