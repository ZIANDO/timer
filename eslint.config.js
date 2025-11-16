module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "prettier", // هماهنگی با Prettier
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "jsx-a11y", "import"],
  rules: {
    "react/prop-types": "off", // چون معمولاً از TS یا PropTypes استفاده نمی‌کنیم
    "react/react-in-jsx-scope": "off", // در React 17+ نیاز نیست
    "no-unused-vars": "warn", // هشدار برای متغیرهای بدون استفاده
    "import/no-unresolved": "off", // برای راحتی در مسیرهای نسبی
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
