run();
function run(){
    // Select the button element using its class name or another appropriate selector
// var button = document.querySelector(".epia9gcq");

// // Check if the button is found on the page
// if (button) {
//   // Trigger the click event on the button
//   button.click();
// } else {
//   console.log("Button not found.");

 
// }

   
      var elements = document.querySelectorAll("[aria-label='Send']");

      elements.forEach(el=>el.click())

    //   function triggerClick(element) {
    //     var event = new MouseEvent('click', {
    //       bubbles: true,
    //       cancelable: true,
    //       view: window
    //     });
    //     element.dispatchEvent(event);
    //   }
      
      // Loop through the NodeList and trigger click events on each element
    //   nodeList.forEach(function(elements) {
        // triggerClick(elements);
    //   });
    // var button = document.querySelector(".tvf2evcx.oq44ahr5.lb5m6g5c.svlsagor.p2rjqpw5.epia9gcq");

    // var button = document.querySelector (".tvf2evcx oq44ahr5 lb5m6g5c svlsagor p2rjqpw5 epia9gcq");
    //  var elements = document.getElementsByClassName("tvf2evcx oq44ahr5 lb5m6g5c svlsagor p2rjqpw5 epia9gcq");
    function getElementByXpath(path) {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      }
   //var elements=getElementByXpath("//*[@id='main']/footer/div[1]/div/span[2]/div/div[2]/div[2]/button")
      
    console.log("by me::",elements,"btn2224:");
    // button.click();
    //  elements.click();
}

