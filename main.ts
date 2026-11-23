// One Word, First Thought — entry program.
// Writes exactly one word to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Deterministic: no network, no clock, no randomness, no input.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Defenestration";

function main(): void {
  // Runtime guard: the gate requires UTF-8 text of 1-24 chars, not only
  // whitespace, and the judge requires exactly one word. "Defenestration"
  // (14 chars) is a single token: the act of throwing something out of a
  // window — surprising, vivid, and funny on a second look.
  if (!/^\S{1,24}$/.test(WORD) || WORD.length !== 14) {
    throw new Error(`invalid entry word: ${JSON.stringify(WORD)}`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
}

main();
