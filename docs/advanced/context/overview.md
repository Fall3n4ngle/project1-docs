---
sidebar_position: 0
title: Context Overview
sidebar_label: Overview
---

# Context

Using Zoovu's Context functionality, you can create personalized experiences and add advanced flow logic to your assistants.

Use Context to:

- Address your customers with their name with Templating.
- Tweak the question flow based on previous answers.
- Configure a Zoe Advisor.

## Key - Value Pairs (typed & scoped)

Context lets you manage data through key-value pairs. The 'key' is a unique identifier and the 'value' is the data associated with that key.

Context supports various data types for its values.

The scope of key-value pairs can be defined based on a timeframe, allowing developers to decide how long a piece of data remains relevant in the assistant's context (e.g. within a single session or across multiple sessions).

## Assignments - Actions - Conditions

Assignments: Involve setting a value to a context attribute, similar to variable assignment but with enhanced control through Conditions.

Actions: Predefined responses triggered within the assistant’s flow, e.g. by hiding an answer or skipping a question.

Conditions: A condition is a criterion that must be met for an action to be triggered. It's a way to assess whether something is true or not based on the current context.

## Templating

Templating is a feature that uses text with placeholders, letting you display personalized text to the customer. [Learn more.](./templating)