# CodeceptJS-WebDriver

This project aims to create a sample E2E automated test framework using CodeceptJS with WebDriver.


- Author: Robson Hamilton
-----------------------------------------
## Requirements
- [CodeceptJS](https://codecept.io/).

- [InteliJ](https://www.jetbrains.com/pt-br/idea/) (or another Leinigen suported IDE ).

-----------------------------------------
## Technical Decisions

- Architecture:
  I chose to use the closest to [Screaming Architecture](https://blog.cleancoder.com/uncle-bob/2011/09/30/Screaming-Architecture.html), because the intuitive names help anyone with no knowledge of the project to find what they need without hard work.
- I tried to make the functions as small and granular as possible, to facilitate code reuse, create automated tests and facilitate possible debugging.
- Also tried to reuse most of the steps.

-----------------------------------------

## To install the dependencies
- Use this command in terminal, inside the root folder of the project ```$ npm install```.

-----------------------------------------
## To run the tests
- For run all tests, use this command in terminal, inside the root folder of the project ```$ npx codeceptjs run --verbose```.
- For run tests with specific tag use this command in terminal, inside the root folder of the project ```$ npx codeceptjs run --verbose --grep @YourTag```.
- For run tests with report generator, use this command in terminal, inside the root folder of the project ```$ npx codeceptjs run --verbose --plugins allure```.

-----------------------------------------
## To run report
- For build the report, use this command in terminal, inside the root folder of the project ```$  allure serve output```.

-----------------------------------------
## WIP

- Separate file for capabilities instead codecept.conf.js helpers section.

-----------------------------------------
## Tips

- For generate steps for a new feature run this command ```$  npx codeceptjs gherkin:snippets```.
- Add your new page at "include" section in the *codecept.conf.js* file
- Add your new step at "Gherkin" section in the *codecept.conf.js* file
- Add comum methods at *steps_file.js* file, as it extends the "I"

-----------------------------------------
## If you want build from scratch on your own repo:

Configurations:

- Run this command in terminal, inside the root folder of the project ```$ npx codeceptjs init```

Then you will choose the helper to use (in this project, WebDriver), the folder for tests, page, and outputs for tests.


- Run this command to download selenium standalone serve ```$ npm i @wdio/selenium-standalone-service --save-dev```


Now, in the codecept.conf.js, add the following content in the plugins section:

>wdio: { <br/>
enabled: true, <br/>
services: ['selenium-standalone'] <br/>
}

Also in the codecept.conf.js, we must now configure the WebDriver, add the following content in the helpers section:
>WebDriver: { <br/>
url: 'https://myapp.com', <br/>
browser: 'chrome', <br/>
host: '127.0.0.1', <br/>
port: 4444, <br/>
restart: false, <br/>
windowSize: '1920x1680', <br/>
desiredCapabilities: { <br/>
chromeOptions: { <br/>
args: [ /*"--headless",*/ "--disable-gpu", "--no-sandbox" ]
}
}
}

---------------------------------------------

## References:

[CodeceptJS Installation](https://codecept.io/installation/)

[CodeceptJS - What is Selenium WebDriver?](https://codecept.io/webdriver/#what-is-selenium-webdriver)

[CodeceptJS - Configuring WebDriver](https://codecept.io/webdriver/#configuring-webdriver)

[CodeceptJS - Basics](https://codecept.io/basics/)

