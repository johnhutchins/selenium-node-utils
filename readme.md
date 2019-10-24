### Utility functions require a browser context.
1. ->eg. declaring `firefoxDriver = await new webdriver.Builder().forBrowser('firefox').build();`
1. importing into your file `const { getElementById } = require('./utilities')`
1. setting value to a var (*let? ;-)*): `let loginButton = await getElementById(firefoxDriver,'login-button')`
