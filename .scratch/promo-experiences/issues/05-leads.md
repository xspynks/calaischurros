# 05: Leads from an Experience

Part of `.scratch/promo-experiences/spec.md`.

**What to build:** A Member turns a lead form on, chooses which of name, email, and phone are hidden, optional, or required, and writes the consent sentence. After a Reveal, the Visitor can submit the form. A submission without consent is refused and stored nowhere. The Studio lists each Lead with its Outcome, shows counts of Plays, Reveals, and Leads, and downloads a CSV.

**Blocked by:** 03: A Member publishes an Experience and shares it

**Status:** ready-for-agent

- [ ] The lead form can be off, and a Reveal then has no form
- [ ] Name, email, and phone can each be off, optional, or required
- [ ] The consent sentence is the Member's copy
- [ ] The form is shown only after Reveal
- [ ] A submission without consent is refused and creates no Lead
- [ ] A valid Lead is listed in the Studio with the Play's Outcome
- [ ] CSV download contains those Leads
- [ ] The Studio shows counts of Plays, Reveals, and Leads
- [ ] A Preview Play does not store a Lead
- [ ] HTTP tests cover a refused submission, a stored Lead, the counts, and the CSV
