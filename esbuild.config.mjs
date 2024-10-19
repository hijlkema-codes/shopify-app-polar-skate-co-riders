import * as esbuild from 'esbuild';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// load all .mjs files
const assetDir = path.join(
    __dirname,
    "resources",
    "extensions",
    "theme-extension"
);
const files = fs.readdirSync(assetDir).filter(f => f.endsWith(".mjs"));
const entryPoints = files.map(f => path.join(assetDir, f));

const outputDir = path.join(__dirname, "extensions", "theme-extension", "assets");

await esbuild.build({
    entryPoints: [...entryPoints],
    bundle: true,
    outdir: outputDir,
    minify: true,
    sourcemap: process.argv.join('|').includes('|--dev|'),
});
