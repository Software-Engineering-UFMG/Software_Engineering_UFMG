/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  rootDir: "./src",
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  collectCoverage: true,
  coverageDirectory: "../coverage",
  coverageReporters: ["text", "lcov"],
  collectCoverageFrom: [
    "**/*.{ts,js}",
    "!**/node_modules/**",
    "!**/dist/**",
    "!**/*.d.ts",
    "!app.ts",
  ],
  coveragePathIgnorePatterns: ["src/config/", "src/routes/"],
  testPathIgnorePatterns: ["src/config/", "src/routes/"],
};
