import pluginVue from "eslint-plugin-vue";
import vueTsEslintConfig from "@vue/eslint-config-typescript";
import prettierConfig from "@vue/eslint-config-prettier";
import importPlugin from "eslint-plugin-import";

export default [
  ...pluginVue.configs["flat/essential"],
  ...vueTsEslintConfig(),
  importPlugin.flatConfigs.recommended,
  {
    files: ["**/*.{js,vue,ts,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "import/named": "off",
      "import/no-unresolved": "off",
      "import/order": [
        1,
        {
          groups: [
            "external",
            "builtin",
            "internal",
            "sibling",
            "parent",
            "index",
          ],
        },
      ],
    },
  },
  prettierConfig,
];
