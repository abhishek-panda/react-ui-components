module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/components'],
  testURL: 'http://localhost/',
  moduleFileExtensions: ["ts", "tsx", "js"],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFiles: ["<rootDir>/setupTests.ts"],
}
