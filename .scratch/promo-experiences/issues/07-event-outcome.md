# 07: An Event on the Reveal

Part of `.scratch/promo-experiences/spec.md`.

**What to build:** A Prize can be an Event with a title, a time, a place, and a link. After Reveal, the Visitor sees that Event and can open the link. A message Prize still shows only its message. No Coupon is issued for either action.

**Blocked by:** 04: Weighted Prizes and Coupons

**Status:** ready-for-agent

- [ ] A Member can save a Prize whose Outcome action is an Event with title, startsAt, location, and url
- [ ] Reveal shows those fields and a link the Visitor can open
- [ ] A message Prize shows its message and no code
- [ ] An Event Prize does not consume a Coupon
- [ ] HTTP tests cover Reveal of an Event and of a message
