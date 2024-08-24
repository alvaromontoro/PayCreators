import { SUPPORTED_METHODS } from './constants.js';

/**
 * Basic string sanitation: only keep alphanumerical characters -, _, . and @
 * @param {String} str - a string of text
 * @returns {String} the string without invalid characters
 */
export const cleanString = str => str.trim().replace(/[^a-zA-Z0-9-_.@]/g, '');

/**
 * Check if an account identifier is correct: 
 *   - it must have a valud
 *   - it must only contain valid characters
 * @param {String} id - an account identifier
 * @returns {Boolean} validity of the ID
 */
export const isValidId = id => (id && id === cleanString(id));

/**
 * creates a new payment method
 * @param {String} id 
 * @param {String} username 
 * @returns {PaymentMethod}
 */
const paymentMethod = (id, username) => ({
  service: id,
  username: username
});

/**
 * Parses the provided payment methods to only allow the supported ones
 * that have valid values
 * @param {Object} paymentMethods 
 * @returns {[PaymentMethods]}
 */
export const parsePaymentMethods = paymentMethods => {
  const providedMethods = Object.keys(paymentMethods);
  const supportedMethods = Object.keys(SUPPORTED_METHODS);

  return providedMethods.map(method => {
    if (supportedMethods.includes(method) && isValidId(paymentMethods[method])) {
      return paymentMethod(method, paymentMethods[method]);
    }
    return false;
  }).filter(Boolean);
}

/**
 * Generates the HTML for link to the payment method based on its values
 * @param {String} method - paymentMethod ID
 * @param {String} id - username for the specified payment method
 * @returns {DOMNode} A link to the payment method
 */
const paymentMethodDOM = (method, id) => {
  const listItem = document.createElement("a");
  const cleanId = cleanString(id);
  const methodInfo = SUPPORTED_METHODS[method];
  listItem.textContent = methodInfo.name;
  listItem.href = methodInfo.url.replace("[ID]", cleanId);
  listItem.target = "_blank";
  listItem.className = `payment-method ${method}`;
  return listItem;
}

/**
 * Appends the payment methods to the pop-up window
 * @param {[PaymentMethods]} acceptedMethods 
 */
export const updatePaymentMethodsDOM = (acceptedMethods) => {
  const container = document.querySelector(".payment-methods");
  
  // remove the "no payments available" message
  container.querySelector(".message").textContent = "This creator accepts payments in...";

  // append all the payment methods to the screen
  acceptedMethods.forEach(method => {
    const { service, username } = method;
    const paymentNode = paymentMethodDOM(service, username);
    container.appendChild(paymentNode)
  });
};
