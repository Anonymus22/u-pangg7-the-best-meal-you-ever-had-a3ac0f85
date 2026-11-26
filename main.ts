// The Best Meal You Ever Had — make.fun entry
// One original sentence, at most 200 characters, about the best meal I ever had.
// Stdlib only, no network, no secrets. Deterministic: same output every run.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My grandmother pressed a bowl of soto ayam into my hands at a Yogyakarta night market, and the lemongrass steam fogged my glasses as the first spoonful tasted like the rain finally letting up.";

if (typeof ENTRY !== "string" || ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY.trim() !== ENTRY) {
  throw new Error("entry must not have leading or trailing whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote /output/entry.txt (${ENTRY.length} chars)`);
