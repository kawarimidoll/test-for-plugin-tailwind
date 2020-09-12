# Demo

## In markdown

You can use classes of tailwindcss in your markdown like this:

```markup
<div class="flex">
  <div class="mx-2 text-red-600">flex 1</div>
  <div class="mx-2 text-red-600">flex 2</div>
  <div class="mx-2 text-red-600">flex 3</div>
</div>
```

This is shown as:

<div class="flex">
  <div class="mx-2 text-red-600">flex 1</div>
  <div class="mx-2 text-red-600">flex 2</div>
  <div class="mx-2 text-red-600">flex 3</div>
</div>

## In components

You can also use them in the components:

definition in `docs/.vuepress/components/TestComponent.vue`

```markup
<!-- TestComponent.vue -->

TODO: copy here!

<div class="flex">
  <div class="mx-2 text-red-600">flex 1</div>
  <div class="mx-2 text-red-600">flex 2</div>
  <div class="mx-2 text-red-600">flex 3</div>
</div>
```

and use in markdown:

```markup
<TestComponent/>
```

this is here:

<TestComponent/>
