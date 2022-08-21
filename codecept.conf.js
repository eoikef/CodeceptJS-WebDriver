exports.config = {
  tests: 'pages/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://google.com.br',
      browser: 'chrome',
      restart: false,
            windowSize: '1920x1680',
            desiredCapabilities: {
              chromeOptions: {
                args: [ /*"--headless",*/ "--disable-gpu", "--no-sandbox" ]
              }
            }
    }
  },
  include: {
    I: './steps_file.js',
    searchPage: './pages/Search/search_page.js'
  },
  bootstrap: null,
  mocha: {},
  gherkin: {
   features: './features/**/*.feature',
      steps:
      [ './stepDefinition/Search/search_steps.js'
      ]
  },
  plugins: {
        allure: {
        enabled: true
      },
      screenshotOnFail: {
        enabled: true
      },
      pauseOnFail: {},
      retryFailedStep: {
        enabled: true
      },
      tryTo: {
        enabled: true
      },
       wdio: {
            enabled: true,
            services: ['selenium-standalone']
          }
  },
  name: 'CodeceptJS-WebDriver'
}