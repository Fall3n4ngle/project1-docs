# ZoovuSDK.dataLayer

Allows for tracking actions that occur on the assistant.

## Methods

| method     |                                                                 |
| :--------- | :-------------------------------------------------------------- |
| `register` | enable tracking all assistant events and put events data to given dataLayer object |

**Examples**

:::info

`ASSISTANT_CODE` is optional, only use it to distinguish assistants when multiple instances exists on one page.

:::

```js
let dataLayer = [];

ZoovuSDK.dataLayer.register(dataLayer, <ASSISTANT_CODE>);
```

## GA4 integration

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- Zoovu SDK (zoovu-sdk.js) -->
        <script async src="<ZOOVU_SDK_BASE_URL>/zoovu-sdk-latest.min.js"></script>
        <script>ZoovuSDK = window.ZoovuSDK || { init: function () { ZoovuSDK.q = ZoovuSDK.q || [], ZoovuSDK.q.push(arguments) }, assitantInit: function () { ZoovuSDK.aq = ZoovuSDK.aq || [], ZoovuSDK.aq.push(arguments) } };</script>

        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=<GOOGLE_TAG>"></script>
        <script> window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); } gtag('js', new Date()); gtag('config', '<GOOGLE_TAG>'); </script>

        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Title of the page</title>
    </head>

    <body>
        <p>Welcome to my website!</p>

        <script>
            ZoovuSDK.assistantInit(function () {
                ZoovuSDK.events.listenToAll(function (event) {
                    gtag('zoovu-assistant-event', event.name, event.data);
                });
            });
        </script>
    </body>
</html>
```
