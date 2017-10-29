var request = require('request');

function uploadSauceResults(browser, done) {
  // Finish browser session;
  browser.end();

  var user = browser.options.username;
  var key = browser.options.accessKey;
  var jobId = browser.sessionId;
  var passed = browser.currentTest.results.failed === 0;

  if (user && key && jobId) {
    var url = 'https://saucelabs.com/rest/v1/' + user + '/jobs/' + jobId;
    return request.put({
      url: url,
      auth: { username: user, password: key },
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ passed: passed })
    }, done);
  } else {
    console.warn('No user/key/jobId provided.');
    done();
  }
}

module.exports = uploadSauceResults;
