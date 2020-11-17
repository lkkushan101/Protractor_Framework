var homePage = require('../Pages/homePage.js');
var data = require('../Data/data.json');
var loginPage = require('../Pages/loginPage.js');
describe('Login to guru99', function() {
  it('Login to guru99', function() {
      browser.ignoreSynchronization = true;
      loginPage.get();
      browser.waitForAngularEnabled(false) 
     loginPage.setEmail(data.userName);
    loginPage.setPassword(data.password);
    loginPage.clickSubmit();
    browser.waitForAngularEnabled(false);
    homePage.verifyUserName(data.user);
  });
});