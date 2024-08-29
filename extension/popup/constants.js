/**
 * Supported payment methods in alphabetical order.
 * 
 * [id]: key to the payment method (single word between quotes, must match logo file name)
 * name: payment method name to be displayed in the popup
 * url: address template ([ID] is a placeholder for the username)
 */
export const SUPPORTED_METHODS = {
  "buy-me-a-coffee": {
    name: "Buy me a coffee",
    url: "https://buymeacoffee.com/[ID]"
  },
  "crowdfundly": {
    name: "Crowdfundly",
    url: "https://crowdfundly.com/[ID]"
  },
  "ko-fi": {
    name: "Ko-fi",
    url: "https://ko-fi.com/[ID]"
  },
  "patreon": {
    name: "Patreon",
    url: "https://www.patreon.com/[ID]/membership"
  },
  "paypal": {
    name: "PayPal",
    url: "https://paypal.me/[ID]"
  },
  "tipeee": {
    name: "Tipeee",
    url: "https://tipeee.com/[ID]"
  },
  "venmo": {
    name: "Venmo",
    url: "https://venmo.com/u/[ID]"
  }
};
