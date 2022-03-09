import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";
import baseConfig from "./rollup.config.base";

export default {
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    serve({
      contentBase: "",
      port: 8020,
    }),
    livereload("src"),
  ],
}; 