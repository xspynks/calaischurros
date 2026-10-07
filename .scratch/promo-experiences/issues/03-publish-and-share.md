# 03: A Member publishes an Experience and shares it

Part of `.scratch/promo-experiences/spec.md`.

**What to build:** A Member publishes a draft and receives a Share URL. A Visitor who has never been to the Studio can open that URL and play the Member's Raspadinha, with the Member's brand and copy and with no Studio navigation. The Member can copy the URL, download a QR code, fix copy and theme without changing the URL, and unpublish. A Visitor who already has a Play still sees their Outcome after unpublish. A new Visitor then sees the not-available page.

**Blocked by:** 02: A Member saves a Raspadinha draft

**Status:** ready-for-agent

- [ ] Publish returns a Share URL at `/e/{slug}` and a Visitor can play that Experience
- [ ] The published page shows the Campaign brand and has no Studio navigation
- [ ] The Member can copy the Share URL and download a QR code image of it
- [ ] Copy and theme edits on a published Campaign apply to future Plays
- [ ] A Play that already has an Outcome keeps that Outcome after an edit
- [ ] Publish is refused when the slug is taken, or when headline, instruction, or Prize is missing
- [ ] Unpublish stops new Plays
- [ ] A Visitor who already has a Play still sees that Outcome after unpublish
- [ ] A new Visitor sees the not-available page after unpublish
- [ ] HTTP tests cover publish, a public Play, edit, and unpublish
