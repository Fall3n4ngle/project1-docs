# ZoovuSDK.storage

## Methods

| method   |                                              |
| :------- | :------------------------------------------- |
| `set`    | save key value pair into ZoovuSDK storage    |
| `get`    | get value from ZoovuSDK storage by given key |
| `remove` | remove key value pair from ZoovuSDK storage  |

**Examples**

:::info

`ASSISTANT_CODE` is optional, only use it to distinguish assistants when multiple instances exists on one page.

:::

```js
ZoovuSDK.storage.set('promotionCode', '12345', <ASSISTANT_CODE>);

if (ZoovuSDK.storage.get('promotionCode', <ASSISTANT_CODE>) === '12345') {
    // set lower price
}

ZoovuSDK.storage.remove('promotionCode', <ASSISTANT_CODE>);
```

