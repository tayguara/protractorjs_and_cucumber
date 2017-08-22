# [ProtractorJS](http://www.protractortest.org) and [CucumberJS](https://cucumber.io/docs/reference/javascript)

Structure of E2E Test and BDD ([Behavior-driven development](https://en.wikipedia.org/wiki/Behavior-driven_development))
concept, with Protractor and Cucumber support, pageObjects and DataDriven.

Execution by environment set and with parallelism concept.    

Necessary Javascript 6 ([ECMAScript 6](http://es6-features.org/)), lasted version of [nodeJS](https://nodejs.org/en/) and
lasted version of ProtractorTest. To work, execute the code below:

## Installation

```bash
$ git clone ssh://git@stash.sexlog.dev:7999/es/js-protractor-and-cucumber-framework-e2e-tests.git
$ cd js-protractor-and-cucumber-framework-e2e-tests/
$ npm install
$ npm install -g protractor
$ webdriver-manager update
```

## Run your tests

```bash
$ webdriver-manager start
$ protractor protractor.conf.js
```

## License

The MIT License (MIT)

Copyright (c) 2008-2017 eSapiens Internet S/A

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.