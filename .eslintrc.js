module.exports = {

  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint/eslint-plugin"],
  "extends": ["@react-native-community", "prettier"],
  "rules": {
    "no-undef": "off",
    "no-unused-vars": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": 1,
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "argsIgnorePattern": "^_"
      }
    ],
    // turn off when refactor is complete
    "react-native/no-inline-styles": "off"
  }
  
}
