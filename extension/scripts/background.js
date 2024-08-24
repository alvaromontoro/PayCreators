chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.action === "readPaymentMethods") {
    chrome.tabs.query({active: true, currentWindow: true}, ([tab]) => {
      if (tab.id) {
        chrome.action.setIcon({tabId: tab.id, path: '/images/icon-48-on.png'});
        chrome.action.setBadgeText({tabId: tab.id, text: '$'});
        chrome.action.setBadgeBackgroundColor({color: '#44cc44'});
      }
    });

    sendResponse(true);
  }

  return true;
});