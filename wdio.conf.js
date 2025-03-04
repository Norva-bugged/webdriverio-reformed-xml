export const config = {
    runner: 'local',
    specs: ['./logs.test.js'],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome',
        'goog:loggingPrefs': { browser: 'ALL' } 
    }],
    logLevel: 'debug', 
    outputDir: './logs',
    waitforTimeout: 10000,
    mochaOpts: {
        ui: 'bdd',
        timeout: 120000
    },
    reporters: [
        'spec',
        ['junit', {
            outputDir: './junit-reports',
            outputFileFormat: (options) => `results.xml`,
            writeStandardOutput: true,
            writeStandardError: true
        }]
    ],
};