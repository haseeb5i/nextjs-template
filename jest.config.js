const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('@jest/types').Config.InitialOptions} */
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@i18n$": "<rootDir>/i18n",
  },
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
