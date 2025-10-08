const fs = require("fs");
const path = require("path");

const root = path.resolve("data/items");
const out = path.resolve("data/items.index.json");

function readDir(dir) {
  const items = [];
  for (const brand of fs.readdirSync(dir)) {
    const bdir = path.join(dir, brand);
    for (const file of fs.readdirSync(bdir)) {
      if (file.endsWith(".json")) {
        const data = JSON.parse(fs.readFileSync(path.join(bdir, file), "utf8"));
        items.push(...data);
      }
    }
  }
  return items;
}

const items = readDir(root);
fs.writeFileSync(out, JSON.stringify(items, null, 2));
console.log(`✅ Indexed ${items.length} items -> ${out}`);
