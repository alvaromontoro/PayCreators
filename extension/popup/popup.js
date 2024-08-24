import { 
  parsePaymentMethods, 
  updatePaymentMethodsDOM 
} from './utils.js';

const setPaymentMethods = paymentMethods => {
  if (paymentMethods && typeof paymentMethods === 'object') {
    const acceptedMethods = parsePaymentMethods(paymentMethods);

    if (acceptedMethods.length) {
      updatePaymentMethodsDOM(acceptedMethods);
    } else {
      console.error("Unknown or invalid payment methods.");
    }
  }
}

// thanks! https://stackoverflow.com/a/20023723/3695983
window.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, tabs => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      {
        from: 'popup',
        subject: 'popupReady'
      },
      setPaymentMethods
    );
  });
});