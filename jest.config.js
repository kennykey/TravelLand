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
    "^@/pages(.*)$": "<rootDir>/pages/$1",
  },
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!<rootDir>/coverage/**",
    "!<rootDir>/.next/**",
    "!<rootDir>/styles/**",
    "!<rootDir>/*.js",
    '!<rootDir>/src/pages/_app.js',
    '!<rootDir>/src/pages/_document.js',
  ],
};

module.exports = createJestConfig(customJestConfig);