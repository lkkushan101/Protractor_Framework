'use strict';
var homePage = function() {
    this.userName = element(by.xpath('//table//tr[@class="heading3"]/td'));
   
      this.verifyUserName = function(user){
     expect(this.userName.getText()).toEqual(user);
    };
   
}; 
module.exports = new homePage();