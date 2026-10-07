# 06: The Catalog is the front door

Part of `.scratch/promo-experiences/spec.md`.

**What to build:** The Studio opens on a Catalog. Raspadinha can be started from it. Roleta, Caixa de presente, Quiz, Memória, Grade da sorte, and Slot are visible and cannot be started. The signed-out home and the Catalog use Tailwind and the Aceternity components this product copied in, including motion. The Experience keeps the Campaign theme and does not pick up that Studio look.

**Blocked by:** 02: A Member saves a Raspadinha draft

**Status:** ready-for-agent

- [ ] After sign-in, the Member lands on the Catalog
- [ ] Starting Raspadinha creates a draft the Member can save, as in ticket 02
- [ ] The five placeholders and Roleta are visible and cannot be started
- [ ] An unknown Template id is refused by the API
- [ ] The home page and the Catalog use Aceternity components and their motion
- [ ] A published Experience still renders with the Campaign theme, not the Studio chrome
- [ ] HTTP tests cover starting Raspadinha from the Catalog and refusing an unknown Template
