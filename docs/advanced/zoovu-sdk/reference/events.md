---
sidebar_position: 1
---

# ZoovuSDK.events

Allows for listening and react to actions that occur on the assistant.

- [Methods](#methods)
- [Available events](#available-events)

## Methods

:::info

`ASSISTANT_CODE` is optional, only use it to distinguish assistants when multiple instances exists on one page.

:::

| method        |                                      |
| :------------ | :----------------------------------- |
| `listen`      | enable subscribing to selected event |
| `listenToAll` | enable subscribing to all events     |

**Examples**

```js
ZoovuSDK.events.listen(eventName, handler, <ASSISTANT_CODE>);
```

```js
ZoovuSDK.events.listenToAll(handler, <ASSISTANT_CODE>);
```

## Available events

- [Navigation events](#navigation-events)
- [Answer events](#answer-events)
- [Numeric question events](#numeric-question-events)
- [Leadgen events](#leadgen-events)
- [Results page events](#results-page-events)
- [Recommendations events](#recommendations-events)
- [Product action events](#product-action-events)
- [Comparison events](#comparison-events)

#### Navigation events

| eventName               | description                                                              |
| :---------------------- | :----------------------------------------------------------------------- |
| `navigation-next`       | Triggered in questionnaire section when the user clicked next button             |
| `navigation-back`       | Triggered in questionnaire section when the user clicked back button             |
| `navigation-go-to-page` | Triggered in questionnaire section when the user navigated to the different page |
| `navigation-restart`    | Triggered when the user clicked restart button                           |

**eventData**:

```ts
{
    description: string;
    page: number; // starts from 1
    previousPage: number; // starts from 1
    questions: {
        questionType: "RADIO" | "CHECKBOX" | "DROPDOWN" | "NUMERIC" | "RANGE" | "TEXT" | "EMAIL" |"FILE_UPLOAD" | "LONG_TEXT" | "NUMERIC_DECIMAL" | "NUMERIC_RANGE";
        question: string;
    }[]
    
}
```

**Examples**:

```js
Navigation Event {
    name: 'navigation-next',
    data:{
        description: "User moved to the next page";
        page: 2;
        previousPage: 1;
        questions: [
            {
                questionType: "RANGE",
                question: "How many ice-cream balls you can eat at once?",
            }
        ]
    }
}
```

```js
Navigation Event {
    name: 'navigation-back',
    data:{
        description: "User moved to the previous page";
        page: 1;
        previousPage: 2;
        questions: [
            {
                questionType: "CHECKBOX",
                question: "What is your favorite ice-cream flavor?",
            }
        ]
    }
}
```

```js
Navigation Event {
    name: 'navigation-go-to',
    data:{
        description: "User moved to the other page";
        page: 3;
        previousPage: 1;
        questions: [
            {
                questionType: "RANGE",
                question: "How much would you pay for one ice-cream ball?",
            }
        ]
    }
}
```

```js
Navigation Event {
    name: 'navigation-restart',
    data:{
        description: "User restarted";
        page: 1;
        previousPage: 3;
        questions: [
            {
                questionType: "CHECKBOX",
                question: "What is your favorite ice-cream flavor?",
            }
        ]
    }
}
```

#### Answer events

| eventName         | description                                  |
| :---------------- | :------------------------------------------- |
| `answer-select`   | Triggered when the user selected an answer   |
| `answer-deselect` | Triggered when the user deselected an answer |

**eventData**:

```ts
{
    description: string;
    questionType: 'RADIO' | 'CHECKBOX' | 'DROPDOWN';
    question: string;
    answer: string;
    selected: boolean;
}
```

**Examples**:

```js
Answer Event {
    name: 'answer-select',
    data: {
        description: 'User selected "Cookies and cream"';
        questionType: "CHECKBOX",
        question: "What is your favorite ice-cream flavor?",
        answer: "Cookies and cream",
        selected: true,
    }
}
```

```js
Answer Event {
    name: 'answer-deselect',
    data: {
        description: 'User deselected "Cookies and cream"';
        questionType: "CHECKBOX",
        question: "What is your favorite ice-cream flavor?",
        answer: "Cookies and cream",
        selected: false,
    }
}
```

#### Numeric question events

| eventName                                   | description                                                                                   |
| :------------------------------------------ | :-------------------------------------------------------------------------------------------- |
| `numeric-question-value-select`             | Triggered when the user selected value on `Numeric` or `Slider` question                      |
| `numeric-range-question-upper-value-select` | Triggered when the user selected upper value on `Numeric Range` or `Double Slider` question   |
| `numeric-range-question-lower-value-select` | Triggered when the user deselected lower value on `Numeric Range` or `Double Slider` question |

**eventData**:

```ts
{
    description: string;
    value: number | [number, number];
    questionType:  "NUMERIC" | "RANGE" | "NUMERIC_DECIMAL" | "NUMERIC_RANGE";
    question: string;
}
```

**Examples**:

```js
Numeric question event {
    name: "numeric-question-value-select",
    data: {
        description: 'User changed "How many ice-cream balls you can eat at once?" value to 10',
        value: 10,
        questionType: "NUMERIC",
        question: "How many ice-cream balls you can eat at once?";
    }
}
```

```js
Numeric question event {
    name: "numeric-range-question-lower-value-select",
    data: {
        description: 'User changed "How much would you pay for one ice-cream ball?" lower value to 1',
        value: [1, 5],
        questionType: "RANGE";
        question: "How much would you pay for one ice-cream ball?",
    }
}
```

```js
Numeric question event {
    name: "numeric-range-question-upper-value-select",
    data: {
        description: 'User changed "How much would you pay for one ice-cream ball?" upper value to 5',
        value: [1, 5],
        questionType: "RANGE";
        question: "How much would you pay for one ice-cream ball?",
    }
}
```

#### Leadgen events

| eventName        | description                              |
| :--------------- | :--------------------------------------- |
| `leadgen-submit` | Triggered when the leadgen was submitted |

**eventData**:

```ts
{
    description: string;
}
```

**Examples**:

```js
Leadgen event {
    name: "leadgen-submit"
    data: {
        description: "User sent leadgen"
    }
}
```

#### Results page events

| eventName           | description                                        |
| :------------------ | :------------------------------------------------- |
| `results-page-show` | Triggered when the user jumped to the results page |

**eventData**:

```ts
{
    description: string;
}
```

**Examples**:

```js
Results page event {
    name: "results-page-show",
    data: {
        description: "User moved to the results page"
    }
}
```

#### Recommendations events

| eventName               | description                                 |
| :---------------------- | :------------------------------------------ |
| `recommendations-fetch` | Triggered when recommendations were fetched |

**eventData** :

```ts
{
    description: string;
    page: number // starts from 1
    products: {
        sku: string,
        name: string
    }[]
}
```

**Examples**:

```js
Recommendations event {
    name: "add-product-to-cart"
    data: {
        description: "Recommendations were fetched",
        page: 1,
        products: [
            {
                sku: "123",
                name: "Cookies and cream ice-cream",
            },
            {
                sku: "124",
                name: "Vanilla ice-cream",
            },
        ];
    }
}
```

#### Product action events

| eventName               | description                                                               |
| :---------------------- | :------------------------------------------------------------------------ |
| `add-product-to-cart`   | Triggered when the user clicked `add to cart` button                      |
| `go-to-product-details` | Triggered when the user clicked on product (works with direct click only) |

**eventData** :

```ts
{
    description: string;
    product: {
        sku: string,
        name: string
    }
}
```

**Examples**:

```js
Product action event {
    name: "add-product-to-cart"
    data: {
        description: "User added product to the cart"
    }
}
```

```js
Product action event {
    name: "go-to-product-details"
    data: {
        description: "User moved to the product details page"
    }
}
```

#### Comparison events

| eventName                     | description                                        |
| :---------------------------- | :------------------------------------------------- |
| `comparison-start`            | Triggered when the user opened comparison preview  |
| `comparison-end`              | Triggered when the user closed comparison preview  |
| `comparison-product-select`   | Triggered when the user added product to compare   |
| `comparison-product-deselect` | Triggered when the user removed product to compare |

**eventData**:

```ts
{
    description: string;
    product: {
        sku: string,
        name: string
    }[]
}
```

**Examples**:

```js
Comparison event {
    name: "comparison-start",
    data: {
        description: "Comparison started",
        products: [
            {
                sku: "123",
                name: "Cookies and cream ice-cream",
            },
            {
                sku: "124",
                name: "Vanilla ice-cream",
            },
        ];
    }
}
```

```js
Comparison event {
    name: "comparison-end",
    data: {
        description: "Comparison ended",
        products: [
            {
                sku: "123",
                name: "Cookies and cream ice-cream",
            },
            {
                sku: "124",
                name: "Vanilla ice-cream",
            },
        ];
    }
}
```

```js
Comparison event {
    name: "comparison-product-select",
    data: {
        description: "Product added to comparison",
        products: [
            {
                sku: "123",
                name: "Cookies and cream ice-cream",
            },
            {
                sku: "124",
                name: "Vanilla ice-cream",
            },
            {
                sku: "125",
                name: "Mint ice-cream",
            },
        ];
    }
}
```

```js
Comparison event {
    name: "comparison-product-deselect",
    data: {
        description: "Product removed from comparison",
        products: [
            {
                sku: "123",
                name: "Cookies and cream ice-cream",
            },
        ];
    }
}
```
