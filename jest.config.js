module.exports = {
    collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/*.js'],
    coverageReporters: ['html', 'text'],
    moduleFileExtensions: ['js', 'json', 'jsx'],
    setupTestFrameworkScriptFile: '<rootDir>/setup-tests.js',
    snapshotSerializers: ['enzyme-to-json/serializer'],
    testMatch: ['**/?(*.)+(spec|test).js?(x)'],
    testURL: 'http://localhost',
    transform: {
        '^(?!.*\\.(js|jsx|mjs|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
        '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
        '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js'
    },
    verbose: false
};
