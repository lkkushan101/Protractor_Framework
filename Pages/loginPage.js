'use strict';
var data = require('../Data/data.json');
var loginPage = function() {
    this.userNameInput = element(by.name('uid'));
    this.passwordInput = element(by.name('password'));
    this.submitButton = element(by.name('btnLogin'));

   this.get = function() {
    browser.get(data.url);
    };
    this.setEmail = function(userName) {
     this.userNameInput.sendKeys(userName);
    };
    this.setPassword = function(password) {
     this.passwordInput.sendKeys(password);
    };
    this.clickSubmit = function(){
      this.submitButton.click();
    };
   
}; 
module.exports = new loginPage ();