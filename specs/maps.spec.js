const fetch = require("node-fetch");

describe("Map Page", function() {
  beforeEach(function() {
    browser.url("./maps");
   // browser.$('#root').waitForExist();
  });
  // it("renders map page", function() {
  //   var results = browser.checkDocument();

  //   results.forEach(function(result) {
  //     expect(result.isWithinMisMatchTolerance).to.equal(
  //       true,
  //       "screenshot failure"
  //     );
  //   });
  // });
  // it("check the page for broken links", async function() {
  //   const links = browser.$$("a");

  //   let urls = links.map(link => link.getAttribute("href"));

  //   const isValidUrl = url => {
  //     const regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  //     return regexp.test(url);
  //   };

  //   const validUrls = urls.filter(isValidUrl);

  //   const requests = validUrls.map(url => fetch(url));

  //   const responses = await Promise.all(requests);

  //   const statusCodes = responses.map(response => response.status);
  //   if (statusCodes.includes(404)) {
  //     console.log("============== Maps Page Broken links ===================");
  //     statusCodes.forEach((statusCode, i) => {
  //       if (statusCode == 404) {
  //         console.log("Invalid url " + validUrls[i]);
  //       }
  //     });
  //     var statusCodeExpeced = new Array(statusCodes.length).fill(200);
  //     expect(statusCodes).to.deep.equal(statusCodeExpeced);
  //   }
  // });
  it("renders map", function() {
    //browser.checkElement("body");
    browser.pause(2000);
    expect(browser.isExisting("div.gm-err-container")).to.equal(
      false
    );
  });
});