/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageThreshold: {
    global: {
      branches: 30,
      lines: 30,
      functions: 30,
      statements: 30,
    },
  },
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  testMatch: ['**/?(*.)+(spec|test).[t]s?(x)'],
  testEnvironment: 'jsdom',
  verbose: true,
};
