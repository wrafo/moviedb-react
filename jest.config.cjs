module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom', // Ensure this is correct
  setupFilesAfterEnv: ['@testing-library/jest-dom'], // Correct the path
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Handling TypeScript files
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
