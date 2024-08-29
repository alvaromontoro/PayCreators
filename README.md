# PayCreators

Monetizing content is a common challenge for content creators. While many platforms and services exist, they can be difficult to find or may present options in a way that feels invasive. Imagine an easy way to share all your preferred payment methods without annoying your web visitors.

That's the goal of this extension!

When users visit a website with payment information, the extension will notify them. If they wish, they can open the extension and donate using one of the creator’s preferred methods. The extension serves purely as a bridge, connecting users to the payment platforms.

## How It Works

### Web Visitors

Simply install the extension and browse the web as usual. If a creator has added a payment method, the extension icon will light up, notifying you that you can donate or tip. (To test it on a website, try [https://alvaromontoro.com](https://alvaromontoro.com).)

### Creators

You don't need the extension unless you want to support other creators. To enable donations, follow these two steps:

1. Create a JSON file with your supported payment methods.
2. Link the file on your web site using a `creator-payments` meta tag.

For example, your `payments.json` file might look like this::

```
{
  "paypal": "alvaromontoro",
  "patreon": "alvaromontoro",
  "venmo": "Alvaro-Montoro",
  "ko-fi": "alvaromontoro",
  "buy-me-a-coffee": "alvaromontoro",
  "crowdfundly": "alvaromontoro"
}
```

> NOTE: The order of the payment methods will be preserved by the extension. Also, you don't need to have all the payment methods available. And if you add an incorrect one, it will be ignored.

In the `<head>` section of your webpage, you would add the following meta tag:

```html
<meta property="creator-payments" content="payments.json" />
```

## Development and Testing

If you'd like to contribute or test the extension locally, follow these steps:

1. Clone the project to your machine
2. Open the project in your favorite IDE
3. Make your changes
4. Open a Chromium-based browser
5. Go to Options > Extensions
6. Activate the Developer Mode
7. Click on "Load unpacked"
8. Select the extension folder
