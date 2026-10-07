# Promotional experiences

This context is the white-label product (working title Raspa) that an Organization uses to publish interactive promotional Experiences. The Calais Churros raspadinha in this repository is the reference Experience, not the product itself.

## Language

**Organization**:
The business that owns Campaigns, Leads, and API keys.
_Avoid_: Account, workspace, tenant, client, customer

**Member**:
A person who signs in to the Studio for an Organization. In this plan an Organization has one Member.
_Avoid_: User, admin, marketer, developer

**Visitor**:
A person who opens an Experience. A Visitor has no Studio account.
_Avoid_: User, player, lead

**Studio**:
The signed-in surface where a Member manages Campaigns.
_Avoid_: Dashboard, admin, backoffice, builder

**Catalog**:
The list of Templates a Member can start from.
_Avoid_: Marketplace, gallery, theme store

**Template**:
A platform-defined interaction, with its own runtime and its own Studio fields. Raspadinha and Roleta are Templates.
_Avoid_: Theme, skin, game, widget

**Raspadinha**:
The Template in which a Visitor removes a Cover to reach a Reveal.
_Avoid_: Scratch card, scrape card

**Roleta**:
The Template in which a Visitor spins a wheel that stops on the Outcome.
_Avoid_: Wheel, roulette, spinner

**Campaign**:
One configured promotion, built from a single Template, owned by an Organization.
_Avoid_: Project, page, post, ad, landing

**Experience**:
The published page for a Campaign. It is the only page a Visitor opens.
_Avoid_: Landing page, microsite, site, link

**Share URL**:
The public address of an Experience.
_Avoid_: Link, permalink, slug (a slug is only the last part of the Share URL)

**Play**:
One Visitor's attempt on an Experience, from the moment it starts until it is revealed or abandoned.
_Avoid_: Session, game, scratch, spin

**Cover**:
The coating a Visitor removes on a Raspadinha.
_Avoid_: Overlay, mask, foil, scratch layer

**Reveal**:
The moment a Play shows its Outcome.
_Avoid_: Win screen, result

**Prize**:
One possible reward configured on a Campaign, with a label, a weight, artwork, and an Outcome action.
_Avoid_: Gift, reward, offer, loot

**Outcome**:
The Prize drawn for a Play. It is chosen when the Play starts and stored with the Play.
_Avoid_: Result, prize (a Prize is the configuration; the Outcome is the draw)

**Coupon**:
A single-use code issued for an Outcome whose action is a coupon.
_Avoid_: Voucher, discount code, code

**Lead**:
The contact details a Visitor submits on an Experience, stored with the Play.
_Avoid_: Contact, subscriber, customer

**Outcome action**:
What the Reveal presents for the Outcome: a Coupon, an Event, or a message.
_Avoid_: Webhook, CTA, effect

**Event**:
An Outcome action that describes a happening: title, when, where, and a link.
_Avoid_: Analytics event, domain event, party

**API key**:
A secret that lets software act for the Organization through the same rules as the Studio.
_Avoid_: Token, password, secret key

**Preview Play**:
A Play a Member runs before publish. It does not issue a Coupon and does not store a Lead.
_Avoid_: Test play, draft session

**Plan**:
The limits applied to an Organization. This plan ships a free Plan.
_Avoid_: Tier, subscription, package
