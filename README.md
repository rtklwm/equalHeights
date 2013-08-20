# jQuery Equal Heights

A simple jQuery plugin for matching heights of children elements in a parent container.  Works with
CSS media queries to be totally responsive.

* Developed By: [https://twitter.com/sethenmaleno](@sethenmaleno)

## How do I use it?

Just follow these steps:

1.  Clone the repo to your local machine.
2.  Grab a copy of the `equalHeights.js` file and add to your project.
3.  Link to the `equalHeights` script with script tags (`<script src="equalHeights.js" /></script>`).
4.  Use equalHeights with this syntax `$(".equalHeights").equalHeights()`.

Equal Heights will look for all of the children in your selector, find the biggest one (takes into account `padding`, `border` and 
overall `height`) and then adjusts the children to be the same height.

## Example

Let's say you have some straight forward HTML markup like the following:

```html
<div class="myClass">
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
</div>
```

Running `$(".myClass").equalHeights()` will make all of the children of `myClass` be the same height.  Easy peasy.

**Note:** Currently, you must run the `equalHeights` plugin for each instance of children you are wanting to be 
the same height.  For example, if you made a class called `equalHeights` and ran `$(".equalHeights").equalHeights()`
and applied the `equalHeights` class to every parent container whose children you were wanting to be equalHeights,
it *will not* work.  You must apply different classes and call it for each one for the time being.  This is something
that is being actively worked out.

If the children of `myClass` heights are changed with CSS3 media queries, Equal Heights will recalculate the 
tallest `div` and make the other children the same no matter how many media queries there are.

