import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  {
    // Flat config only ignores node_modules by default; skip build output.
    ignores: [".next/**", "out/**", "next-env.d.ts"],
  },
  ...nextVitals,
  {
    rules: {
      // Carried over from .eslintrc.json (which misspelt the rule name).
      "react/no-unescaped-entities": "off",
      // New in eslint-config-next 16 (React Compiler rules). Existing code
      // sets state in effects; warn until those are reworked.
      "react-hooks/set-state-in-effect": "warn",
    },
  },
];

export default eslintConfig;
