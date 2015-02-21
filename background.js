// chrome.browserAction.onClicked.addListener(function(tab){
//   var newURL = "http://stackoverflow.com/";
//   // chrome.tabs.create({ url: newURL });
//   // chrome.windows.create({url: newURL});

//   chrome.tabs.create( {url: "http://www.stackoverflow.com/"});
//   //});
// });

chrome.commands.onCommand.addListener(function(command) {
  chrome.tabs.create({ url: "http://www.facebook.com/" });
  console.log('onCommand event received for message: ', command);
});

// chrome.browserAction.onClicked.addListener(function (activeTab) {
// 	console.log("onClicked event received");
//     chrome.tabs.create({ 'url': "http://www.google.com" });
// });

chrome.browserAction.onClicked.addListener(function()
{
   // var newURL = "http://www.youtube.com/watch?v=oHg5SJYRHA0";
   // chrome.tabs.create({ url: newURL });
});