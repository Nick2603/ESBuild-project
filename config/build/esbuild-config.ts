import { BuildOptions } from "esbuild";
import path from "path";
import { CleanPlugin } from "./plugins/CleanPlugin";
import { HTMLPlugin } from "./plugins/HTMLPlugin";

const mode = process.env.MODE || "dev";

const isDev = mode === "dev";
const isProd = mode === "prod";

function resolveRoot (...segments: string[]) {
  return path.resolve(__dirname, "..", "..", ...segments);
};

const config: BuildOptions = {
  outdir: resolveRoot("build"),
  entryPoints: [resolveRoot("src", "index.jsx")],
  entryNames: "[dir]/bundle.[name]-[hash]",
  allowOverwrite: true,
  bundle: true,
  tsconfig: resolveRoot("tsconfig.json"),
  minify: isProd,
  sourcemap: isDev,
  metafile: true,
  loader: {
    ".png": "file",
    ".svg": "file",
    ".jpg": "file",
  },
  plugins: [
    CleanPlugin,
    HTMLPlugin({
      title: "ESbuild Project",
    })
  ],
}

export default config;
