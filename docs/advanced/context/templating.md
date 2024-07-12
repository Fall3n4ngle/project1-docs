---
sidebar_position: 2
title: Create templates with Context
sidebar_label: Templating
---

# Create templates with Context

A template is a text format used to generate the text that will be displayed to the user.

As an example, let's say we know the name of our user and would like to use a personalized greeting. We would use a template `Hello, {{ context.firstName }}`, which would be displayed as `Hello, Kim`.

Templating works by capturing information and then exposing it back to our users using the above format.

## Format

The format used at Zoovu allows you to show data stored in the Context. The data is stored with a name, to use it in your template, you refer to it with the following syntax: `{{ context.name }}`.

The dynamic expression is surrounded by a double curly braces pair. Anything within the brackets will be evaluated. Values stored in the context can be referred to with a `context.` prefix.

If the name has whitespace symbols in it, use a square bracket syntax (e.g. `{{ context['some name'] }}`).

:::tip

We recommend that you avoid using whitespace.

:::

It is possible to include some basic logic in the templates. The following example will print `Welcome back!` if the recurring attribute has a `true` value, otherwise it will print `Welcome!`.

```
Welcome {{ context.recurring ? 'back' : ''}}!
```