chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.action === "readPaymentMethods") {
    chrome.tabs.query({active: true, currentWindow: true}, ([tab]) => {
      if (tab.id) {
        chrome.action.setIcon({tabId: tab.id, path: '/images/icon-128-on.png'});
      }
    });

    sendResponse(true);
  }

  return true;
});