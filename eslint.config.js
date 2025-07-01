import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
      "eqeqeq": "warn",
      "curly": "warn",
      "semi": ["warn", "always"],
      "quotes": ["warn", "double"]
    }
  }
];
