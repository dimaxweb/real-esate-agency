import globals from "globals";
// import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.node }},
  {
    ignores: [
        "node_modules/*",           // ignore its content
        "dist/*",                   // ignore its content
    ]
},
  ...tseslint.configs.recommended,

];