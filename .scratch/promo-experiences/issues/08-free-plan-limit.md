# 08: The free Plan publishes one Campaign

Part of `.scratch/promo-experiences/spec.md`.

**What to build:** An Organization on the free Plan can have any number of drafts and one published Campaign. A second publish is refused, in Portuguese, with a clear explanation. Unpublishing frees the slot so a different Campaign can be published.

**Blocked by:** 03: A Member publishes an Experience and shares it

**Status:** ready-for-agent

- [ ] The first publish on an Organization succeeds
- [ ] A second publish while one Campaign is published returns 422 and a pt-BR explanation
- [ ] Extra drafts can still be saved
- [ ] Unpublishing the published Campaign allows a different Campaign to be published
- [ ] HTTP tests cover the refusal and the freed slot
