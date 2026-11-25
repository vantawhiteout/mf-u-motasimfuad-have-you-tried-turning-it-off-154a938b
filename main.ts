import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const entry = "Your call is important to us. I've put you on hold to prove it.";
if (!entry.trim() || Buffer.byteLength(entry, "utf8") > 199) {
  throw new Error("entry must be non-blank UTF-8 of 1-199 bytes");
}
const path = "/output/entry.txt";
mkdirSync(dirname(path), { recursive: true });
writeFileSync(path, entry, "utf8");
