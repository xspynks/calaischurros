# 10: Roleta uses the same Campaign rules

Part of `.scratch/promo-experiences/spec.md`.

**What to build:** A Member starts Roleta from the Catalog. A Visitor sees a wheel whose segments are the Prize labels, without weights, and the wheel stops on the Outcome the server drew. Coupons, Events, messages, the lead form, Preview Plays, the Share URL, the Plan, and the API key behave as they do for Raspadinha. An API client can create a Roleta Campaign by Template id.

**Blocked by:** 06: The Catalog is the front door; 07: An Event on the Reveal; 09: The same rules through an API key

**Status:** ready-for-agent

- [ ] Roleta can be started from the Catalog, and the other placeholders still cannot
- [ ] Play start includes a segment label for every Prize and omits weights
- [ ] The wheel stops on the index returned at Reveal
- [ ] A coupon Prize, an Event Prize, and a message Prize Reveal with the same payloads as Raspadinha
- [ ] The lead form, Preview Play, unpublish, and free Plan behave as they do on Raspadinha
- [ ] An API client can create and publish a Roleta Campaign and receive a playable Share URL
- [ ] HTTP tests cover a Roleta Play from the Studio and from an API key
