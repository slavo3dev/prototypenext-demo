module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      js: true,
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "prettier/prettier": "error",
  },
};
