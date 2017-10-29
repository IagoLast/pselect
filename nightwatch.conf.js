require('dotenv').config();

module.exports = {
  src_folders: [
    'test/e2e'
  ],
  output_folder: 'reports',
  test_settings: {
    default: {
      launch_url: 'http://localhost:5000',
      selenium_port: 80,
      selenium_host: 'ondemand.saucelabs.com',
      silent: true,
      username: process.env.SAUCE_USERNAME,
      access_key: process.env.SAUCE_ACCESS_KEY,
      desiredCapabilities: {
        browserName: 'chrome'
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
