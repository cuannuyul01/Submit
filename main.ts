import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "★★☆☆☆ Said 'i want make money,' had $0 in the wallet, then typed 'cek again' like the balance would feel bad and change. Pays in vibes. Would serve again. Not by choice.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, { encoding: "utf8", mode: 0o644 });
