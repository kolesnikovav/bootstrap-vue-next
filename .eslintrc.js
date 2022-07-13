module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    "vue/setup-compiler-macros": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "@vue/typescript/recommended",
    "prettier",
  ],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    "prettier/prettier": ["warn", { endOfLine: "auto" }],
    "no-alert": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "arrow-body-style": "warn",
    "arrow-parens": "warn",
    eqeqeq: "error",
    "generator-star-spacing": "warn",
    "grouped-accessor-pairs": "warn",
    "no-caller": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "warn",
    "no-eval": "error",
    "no-extra-bind": "warn",
    "no-implied-eval": "error",
    "no-labels": "warn",
    "no-lone-blocks": "warn",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-return-await": "warn",
    "no-template-curly-in-string": "warn",
    "no-throw-literal": "error",
    "no-undef-init": "warn",
    "no-useless-call": "warn",
    "no-useless-constructor": "warn",
    "no-useless-rename": "warn",
    "no-useless-return": "warn",
    "no-var": "error",
    "object-shorthand": "warn",
    "prefer-const": "warn",
    "prefer-destructuring": "warn",
    "prefer-numeric-literals": "warn",
    "prefer-rest-params": "warn",
    "prefer-spread": "warn",
    "prefer-template": "warn",
    "require-atomic-updates": "warn",
    "rest-spread-spacing": "warn",
    "sort-imports": [
      "warn",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    "template-curly-spacing": "warn",
    "yield-star-spacing": "warn",
    yoda: "warn",
    "@typescript-eslint/no-explicit-any": "off",
    "vue/require-default-prop": "off",
  },
};
