const sauce = require('./sauce');

module.exports = {
  beforeEach: function (browser) {
    browser
      .url('http://localhost:8000')
      .waitForElementVisible('body', 1000);
  },
  Smoke: function (browser) {
    browser.expect.element('select#ps-prov').to.be.visible;
    browser.expect.element('select#ps-mun').to.be.visible;
    browser.click('option[value="36"]');
    browser.expect.element('select#ps-mun').to.have.value.that.equals('36020');
    browser.click('option[value="36038"]');
    browser.expect.element('select#ps-mun').to.have.value.that.equals('36038');
  },
  after: sauce,
};
