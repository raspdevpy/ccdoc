# Image Builder: Understanding Size

Sizing is crucial for determining the dimensions of objects and images within your canvas. This document explains how size works in our image builder functions.

## Introduction

The `Size` parameter in our functions is defined by two key components: **Width** and **Height**.  Both values are measured in pixels, must be non-negative, and start from 0.

## Example 1: Filling a Rectangle

Let's start with a simple example using the `$imageFill` function, which requires the size of the rectangle to be filled. We'll begin with a rectangle with `Width=100` and `Height=100`.

```
$imageFill([x=0, y=0, width=100, height=100, color=blue])
```

![](https://i.imgur.com/uWY7dcm.png)

### Scaling Up

Increasing the `Width` and `Height` proportionally scales the rectangle.  Let's try `Width=200` and `Height=100`:

```
$imageFill([x=0, y=0, width=200, height=100, color=blue])
```

![](https://i.imgur.com/9DG1ubq.png)

## Example 2: Drawing the Polish Flag

Let's create two rectangles (White and Red) to construct a simple representation of the Polish flag.

```
$imageFill([x=0, y=0, width=width, height=height/2, color=white])
$imageFill([x=0, y=height/2, width=width, height=height/2, color=red])
```

![](https://i.imgur.com/ByyKJkr.png)

### Using Placeholders: `w/2` and `h/2`

Did you notice `width/2` and `height/2` in the code above?  These are placeholders that provide dynamic sizing based on the canvas dimensions.  The next section will detail all available placeholders.

## Size Placeholders

These placeholders allow you to dynamically determine the size of elements based on the canvas dimensions.

| Placeholder | Description                                                                                       |
|:-----------:|---------------------------------------------------------------------------------------------------|
| `width`     | The width of the canvas (in pixels).                                                            |
| `height`    | The height of the canvas (in pixels).                                                           |
| `centerx`   | The horizontal center of the canvas, equivalent to `width/2`.                                     |
| `centery`   | The vertical center of the canvas, equivalent to `height/2`.                                    |
| `center`    |  In the `x` position, it's an alias for `centerx`. In the `y` position, it's an alias for `centery`. |
| `w`         | Alias for `width`.                                                                              |
| `h`         | Alias for `height`.                                                                             |

## Example 3: Simplified Flag using `center`

We can now use `center` to simplify our Polish flag example, making the code more readable:

```
$imageFill([x=0, y=0, width=width, height=centery, color=white])
$imageFill([x=0, y=centery, width=width, height=centery, color=red])
```

![](https://i.imgur.com/vTFbagw.png)