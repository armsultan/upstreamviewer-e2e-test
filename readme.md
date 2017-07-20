# End to end test

End to end tests using [nightwatch.js](http://nightwatchjs.org/)

**Requirements**

user `testuser@testaccount.com` with password `test` must exist as all tests use this account

[upstream-viewer](https://github.com/armsultan/upstream-viewer) needs to be running

**How to Run**

Run the following commands in a terminal inside the project folder:

```node_modules/nightwatch/bin/nightwatch --env firefox```
```node_modules/nightwatch/bin/nightwatch --env chrome```

**Bugs:**

Safari tests don't work since it cannot find login input fields since `.windowMaximize()` does not work

Does not work :( :
```node_modules/nightwatch/bin/nightwatch --env safari```
