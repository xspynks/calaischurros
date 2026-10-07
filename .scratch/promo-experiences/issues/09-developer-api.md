# 09: The same rules through an API key

Part of `.scratch/promo-experiences/spec.md`.

**What to build:** A Member creates an API key, sees the full secret once, and can revoke it. With that key, a client can create a Raspadinha, set Prizes and the lead form, publish, and read the Share URL. The client can list Leads and the same Play, Reveal, and Lead counts. A Campaign created this way plays like one created in the Studio. Missing and revoked keys are rejected. The Plan limit and the publish checks apply here too.

**Blocked by:** 04: Weighted Prizes and Coupons; 05: Leads from an Experience; 08: The free Plan publishes one Campaign

**Status:** ready-for-agent

- [ ] Creating a key shows the full secret once, and a later read does not
- [ ] Revoking a key makes it fail with 401
- [ ] A missing or unknown key fails with 401
- [ ] A client can create a Raspadinha, set coupon and message Prizes, set the lead form, publish, and receive the Share URL
- [ ] A Visitor can play that Share URL, reveal a Coupon, and submit a Lead
- [ ] The client can list those Leads and the counts
- [ ] A second publish on the free Plan is refused the same way as in the Studio
- [ ] HTTP tests cover the key, a scripted Campaign, a public Play, and the Lead list
