# One HTTP API in front of the Campaign rules

**Status:** accepted

The Studio, the Experience, and requests made with an API key are clients of one HTTP API. That API applies the Campaign rules: publish checks, the Plan limit, the draw, Coupon issuance, and Lead consent. Tests bind to this HTTP boundary. They assert responses and stored outcomes a client can observe. They do not assert canvas pixels or SQL rows.

There is one service behind that API. A second path that writes Campaigns, Plays, or Leads directly is a bug.

## Consequences

The ideal number of test seams in this product is one. A pure function for pointer math inside the Raspadinha runtime is allowed only as a helper the HTTP tests do not depend on. Gesture feel is checked by playing the Experience on a phone-sized viewport.
