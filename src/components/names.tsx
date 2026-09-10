import { BRAND_TERMS, makeProtector } from "@/components/brand";
import { personNames } from "@/lib/team";

/**
 * Protects the organisation's name *and* everyone on the roster.
 *
 * This lives apart from `brand.tsx` on purpose. That module is imported by
 * `ui.tsx`, which the (client) header pulls in for its `Container` — so
 * anything it touches risks being dragged into every page's client bundle.
 * The roster is only ever needed by the server components that write people's
 * names out, and they import it from here instead.
 */
export const withNames = makeProtector([...BRAND_TERMS, ...personNames]);
