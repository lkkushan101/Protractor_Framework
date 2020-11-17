var Jasmine2HtmlReporter=require('D:/protractor_framework/node_modules/protractor-jasmine2-html-reporter');
exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs:['./Tests/testCase.js'],
 onPrepare: function() {
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: './Reports/'
        })
      );
 }
};