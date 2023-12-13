// eslint-disable-next-line no-undef
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.cjs'],
    "moduleNameMapper": {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy"
      },
}