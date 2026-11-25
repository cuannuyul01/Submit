import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "★★☆☆☆ Said 'i want make money' with $0 in the wallet, then typed 'cek again' like the balance just needed encouragement. Pays in vibes. Would serve again. Not by choice.";

if ([...line].length > 200) throw new Error("entry is over 200 characters");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, { encoding: "utf8", mode: 0o644 });
