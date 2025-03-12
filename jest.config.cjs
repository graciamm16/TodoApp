module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    setupFilesAfterEnv: ['./setupTests.js']
}