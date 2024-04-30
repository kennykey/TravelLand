const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  coverageProvider: 'v8',
  collectCoverage: true,
  moduleNameMapper: {
    "^@/pages/(.*)$": "<rootDir>/src/pages/$1",
  },
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
    "!**/node_modules/**",
    "!<rootDir>/coverage/**",
    "!<rootDir>/.next/**",
    "!<rootDir>/src/useApi/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/redux/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/component/**/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/pages/detail/activity/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/pages/detail/banner/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/pages/detail/category/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/pages/detail/promo/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/pages/detail/Register.js",
    "!<rootDir>/src/pages/dashPage/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/pages/form/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/pages/_app.js",
    "!<rootDir>/src/pages/_document.js",
    "!<rootDir>/src/pages/activity.js",
    "!<rootDir>/src/pages/promo.js",
  ],
};

module.exports = createJestConfig(customJestConfig);