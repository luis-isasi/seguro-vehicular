module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  moduleNameMapper: {
    /* Handle CSS imports (with CSS modules) NO LO USAMOS
    https://jestjs.io/docs/webpack#mocking-css-modules */
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules) NO LO USAMOS
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

    /* Handle image imports
    https://jestjs.io/docs/webpack#handling-static-assets */
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$':
      '<rootDir>/__mocks__/fileMock.js',
    '@src/(.*)': '<rootDir>/src/$1',
    '@Public/(.*)': '<rootDir>/public/$1',
    '@Components/(.*)': '<rootDir>/src/components/$1',
    '@Views/(.*)': '<rootDir>/src/views/$1',
    '@Hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@Constants': '<rootDir>/src/constants.ts',
    '@Types': '<rootDir>/src/types.ts',
    '@Context/(.*)': '<rootDir>/src/context/$1',
    '@Hoc/(.*)': '<rootDir>/src/Hoc/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
    https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    // '^.+\\.module\\.(css|sass|scss)$',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}
