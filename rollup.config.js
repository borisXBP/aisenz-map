import filesize from "rollup-plugin-filesize";
import { terser } from "rollup-plugin-terser";
import baseConfig from "./rollup.config.base";

export default {
  ...baseConfig,
  plugins: [...baseConfig.plugins, terser(), filesize()],
}; 