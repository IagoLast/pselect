const TRAVIS_JOB_NUMBER = process.env.TRAVIS_JOB_NUMBER;
if (!process.env.TRAVIS) {
  require('dotenv').config();
}

module.exports = {
  src_folders: [
    'test/e2e'
  ],
  output_folder: 'reports',
  test_settings: {
    default: {
      launch_url: 'http://localhost:8000',
      selenium_port: 80,
      selenium_host: 'ondemand.saucelabs.com',
      silent: true,
      username: process.env.SAUCE_USERNAME,
      access_key: process.env.SAUCE_ACCESS_KEY,
      desiredCapabilities: {
        browserName: 'chrome',
        'build': `build-${TRAVIS_JOB_NUMBER}`,
        'tunnel-identifier': TRAVIS_JOB_NUMBER,
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox'
      }
    },
    edge: {
      desiredCapabilities: {
        browserName: 'MicrosoftEdge'
      }
    },
    ie9: {
      desiredCapabilities: {
        browserName: 'internet explorer',
        'version': '9'
      }
    }
  }
};
