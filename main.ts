// SPDX-License-Identifier: MIT
// One Line, One Minute: The Vending Machine Pickup Line Contest — make.fun entry.
// Writes exactly one pickup line (plus a trailing newline) to the output file.
// The line: a vending machine admits it hums at strangers all day, then turns
// the idiom "drop everything" literal — a coil drop, from coil C4 — so the
// punch lands in the last words. It won a 16-candidate tournament scored on
// the published judge criteria in order: machine-spoken pickup line first,
// then the machine's own world (hum, drop, coil), the laugh, brevity, charm.
// Refinement (iteration 3/4) tightened the draft by 11 characters without
// moving the punch.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I hum at strangers all day, but for you I'd drop everything — literally, from coil C4.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
