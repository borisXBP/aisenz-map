import { babel } from '@rollup/plugin-babel';
import commonjs from "@rollup/plugin-commonjs";
import eslint from "@rollup/plugin-eslint";
import typescript from "@rollup/plugin-typescript";
import json from "rollup-plugin-json";
import resolve from "rollup-plugin-node-resolve";
import pkg from "./package.json";
const formatName = "hello";
export default {
  input: "./src/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "esm",
    },
    {
      file: pkg.browser,
      format: "umd",
      name: formatName,
    },
  ],
  plugins: [
    json(),
    commonjs({
      include: /node_modules/,
    }),
    resolve({
      preferBuiltins: true,
      jsnext: true,
      main: true,
      brower: true,
    }),
    typescript(),
    eslint(),
    babel({ exclude: "node_modules/**" }),
  ],
}; 