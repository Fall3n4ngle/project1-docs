---
sidebar_position: 100
title: Reference
sidebar_label: Reference 
---

## Scopes

| Scope | Description |
|--- |--- |
| SESSION | The data will no longer be accessible after the session |
| DOMAIN | The data will be persisted on the user's machine and can be used again for future sessions in this and other assistants on the same domain | 
| PROVIDED | The data will be provided by the customer |
| CONFIGURATION | Same as session, but had different identifier to clearly mark that this does not serve any personalization. This will not be sent to the backend. |

### Provided scope

*Attributes* that are provided are made accessible by the customer. A customer makes these accessible by storing them in the local storage using a key with the following pattern: `zoovu.[advisorCode].[locale?].context.xyz`.

If we want to make the firstName of a customer accessible to an assistant with advisor code `docs123`, the key would be `zoovu.docs123.context.firstName`.

The key structure also allows for locale specific values.

## Assignments

### Text

| Assignment | Description |
|--- |--- |
| Set value |  Sets the value of the attribute to the provided value | 
| Clear value | Clears the value of the attribute | 
| Set selected value to | Will update the attribute with the label text of the selected option |
| Set left value from | TODO: lookup current value and take the 'shift' next value' |
| Set right value from | TODO: lookup current value and take the 'shift' next value' |

### Number

| Assignment | Description |
|--- |--- |
| Set numeric value |  Sets the value of the attribute to the provided value | 
| Clear value | Clears the value of the attribute | 
| Set left value from | TODO: lookup current value and take the 'shift' next value' |
| Set right value from | TODO: lookup current value and take the 'shift' next value' |
| Increment by value | |
| Decrement by value | | 
| Multiply by value | | 
| Divide by value | | 

### True/False

| Assignment | Description |
|--- |--- |
| Set value |  Sets the value of the attribute to the provided value | 
| Clear value | Clears the value of the attribute | 
| Set selected value to | Will update the attribute with the label text of the selected option |

### List

| Assignment | Description |
|--- |--- |
| Set value |  Sets the value of the attribute to the provided value | 
| Clear value | Clears the value of the attribute | 
| Set selected value to | Will update the attribute with the label text of the selected option |

## Actions

### Advisor level

| Action | Description |
| --- | --- |
| Assign value | Assign a value to a context attribute, similar to regular context assignments, but when using an action, the assignment can be controlled with a condition |
| Run code  | Executes the provided JavaScript code, use at your own risk! The SDK is described |
| Disable results page  | Disables navigation to the result page |
| Enable results page  | Enables navigation to the result page |

### Question level

| Action | Description |
|--- |--- |
|Skip | Do not show the question and proceed the flow |
|Go to results | Skip all remaining questions and go to the results page |
| Assign value | Assign a value to a context attribute, similar to regular context assignments, but when using an action, the assignment can be controlled with a condition |
| Run code  | Executes the provided JavaScript code, use at your own risk! The SDK is described |
| Disable results page  | Disables navigation to the result page |
| Enable results page  | Enables navigation to the result page |

### Answer level

| Action | Description |
| :---  | :--- |
| Disable answer  | Disables answer when question loads |
| Select answer | Selects answer when question loads |
| Select answer and continue | Selects answer when question loads and proceeds automatically |
| Put answer first | Moves answer to the first position when question loads |
| Put answer last | Moves answer to the last position when question loads |
| Assign value | Assign a value to a context attribute, similar to regular context assignments, but when using an action, the assignment can be controlled with a condition |
| Run code | Executes the provided JavaScript code, use at your own risk! The SDK is described |
| Disable results page | Disables navigation to the result page |
| Enable results page |  Enables navigation to the result page |

| Advanced actions | Description |
| :--- | :--- |
| Go to first question | Question flow will return to the first question while keeping selected answers. |

:::note
Only use the advanced context actions when you have experience with our platform. These actions can lead to unexpected results when you don't know what you are doing.
:::


#### Run code example
The `Run code` action can read and write to the context store. Below example shows how to read the value of the `size` attribute and how to set a `nofit` attribute to true.
```
var size = contextSdk.get("size").value;
contextSdk.set([{ key: "nofit", value: true }]);
```

## Conditions

### Text

| Condition | Description |
|--- |--- |
| equals | the context attribute must equal the provided value | 
| not equals | the context attribute must not equal the provided value | 
| exists | the context attribute has a value | 
| not exists | the context attribute does not have a value | 

### Number
| Condition | Description |
|--- |--- |
| equals | the context attribute must equal the provided value | 
| not equals | the context attribute must not equal the provided value | 
| exists | the context attribute has a value | 
| not exists | the context attribute does not have a value | 

### True/False

| Condition | Description |
|--- |--- |
| equals | the context attribute must equal the provided value | 
| not equals | the context attribute must not equal the provided value | 
| exists | the context attribute has a value | 
| not exists | the context attribute does not have a value | 
### List

| Condition | Description |
|--- |--- |
| equals | the context attribute must equal the provided value | 
| not equals | the context attribute must not equal the provided value | 
| exists | the context attribute has a value | 
| not exists | the context attribute does not have a value | 
