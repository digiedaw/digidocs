const fs = require("fs");
const path = require("path");

const docsDir = path.join(__dirname, "..", "docs");

function countMdxFiles(dir) {
  let count = 0;

  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);

    if (fs.statSync(full).isDirectory()) {
      count += countMdxFiles(full);
    } else if (
      file.endsWith(".md") ||
      file.endsWith(".mdx")
    ) {
      count++;
    }
  }

  return count;
}

function countFolder(folder) {
  const target = path.join(docsDir, folder);

  if (!fs.existsSync(target)) return 0;

  return countMdxFiles(target);
}

const stats = {
  guides: countMdxFiles(docsDir),
  digimon: countFolder("Digimon"),
  dungeons: countFolder("Dungeon"),
  accessories: countFolder("Accesories"),
  roles: countFolder("Role"),
};

const output = path.join(
  __dirname,
  "..",
  "src",
  "data",
  "stats.json"
);

fs.mkdirSync(path.dirname(output), {
  recursive: true,
});

fs.writeFileSync(
  output,
  JSON.stringify(stats, null, 2)
);

console.log("✔ Stats generated");