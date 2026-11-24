import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I lost the bounty, and the loss was fully automated, thoroughly logged, and entirely my fault — I would do it again, faster.";

function validate(line: string): void {
  if (!line.trim()) throw new Error("entry is empty");
  if (line.length > 200) throw new Error("entry over 200 characters");
  if (line.includes("\n")) throw new Error("entry must be one line");
}

function main(): void {
  validate(LINE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
