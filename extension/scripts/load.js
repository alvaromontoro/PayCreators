const paymentMethodsElement = document.querySelector('meta[property="creator-payments"][content]');
const paymentMethodsUrl = paymentMethodsElement?.getAttribute("content");
let paymentData = null;

async function readJson(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    return await response.json();
  } catch(error) {
    console.error("Error fetching payment data: ", error);
    throw error;
  }
}

// Listen for messages from the popup.
chrome.runtime.onMessage.addListener((message, sender, response) => {
  if (message.from === 'popup' && message.subject === 'popupReady') {
    response(paymentData);
  }
});

if (paymentMethodsElement && paymentMethodsUrl) {
  chrome.runtime.sendMessage({
    action: 'readPaymentMethods'
  });

  readJson(paymentMethodsUrl).then(function(creatorData) {
    paymentData = creatorData;
  });
}