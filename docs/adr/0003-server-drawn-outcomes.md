# The server draws the Outcome when a Play starts

**Status:** accepted

The Calais page paints one prize image in the browser, and every Visitor uncovers the same artwork. A Campaign with weighted Prizes has to choose the Outcome on the server when the Play starts, then store it on the Play. The play-start payload includes the one artwork the Cover sits on. Other Prizes, weights, and Coupon codes stay on the server until Reveal. Starting again with the same visitor key returns the stored Play, so a refresh does not draw a second Coupon.

## Consequences

A Visitor who inspects the page can see the single prize image before scratching. That is accepted for a promotion. The Coupon code and the odds are the parts that must wait for Reveal. Roleta is allowed to show every Prize label on the wheel, because a wheel with hidden labels is no longer a wheel; it still hides weights, and it still lands on the stored Outcome.
