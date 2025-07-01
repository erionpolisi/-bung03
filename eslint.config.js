export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        document: true,
        window: true,
        setTimeout: true,
        location: true,
      },
    },
    rules: {
      semi: ["error", "always"],
      curly: "error",
      "no-unused-vars": "warn",
      "no-undef": "error",
      "eqeqeq": "error",                      // zwingt === statt ==
      "quotes": ["error", "single"],          // zwingt einfache Anführungszeichen
      "no-var": "error",                      // verbietet var
      "prefer-const": "warn",                 // empfiehlt const wenn möglich
      "keyword-spacing": ["error", { "before": true, "after": true }],
      "comma-dangle": ["error", "never"],     // kein , am Ende von Listen
      "no-multiple-empty-lines": ["error", { "max": 1 }],
      "max-len": ["warn", { "code": 80 }],    // warnt bei zu langen Zeilen
      "complexity": ["warn", 5],              // warnt bei zu komplexen Funktionen
      "max-depth": ["warn", 3],               // zu viele verschachtelte Ebenen
      "max-statements": ["warn", 15]          // zu viele Anweisungen pro Funktion
    }
  }
];

