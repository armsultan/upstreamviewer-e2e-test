module.exports = {
// Run the following command in terminal:
// node_modules/nightwatch/bin/nightwatch --env chrome|firefox|safari

  'project test' : function (browser) {
    browser
      .windowMaximize()
      .url('http://localhost:3000')
      .waitForElementVisible('body', 5000)
      .click('a[href="/login"]')
      .waitForElementVisible('body', 5000)
      .saveScreenshot('reports/Login-Screenshot.png')
      .setValue('input[type=email]', 'testuser@testaccount.com')
      .setValue('input[type=password]', 'test')
      .click('button[type=button]')
      .assert.containsText("h4", "Add Upstream",5000)
      .setValue('input[type=text]', 'test')
      .setValue('input[type=url]', 'https://demo.nginx.com/status/upstreams/trac-backend')
      .click('button[type=submit]')
      .waitForElementVisible('body', 5000)
      .click('a[alt=test]')
      .waitForElementVisible('body', 5000)
      .saveScreenshot('reports/Upstreamview-Screenshot.png')
      .end();
  }


};