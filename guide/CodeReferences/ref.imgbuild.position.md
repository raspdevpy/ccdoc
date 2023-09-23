# Image Builder: Position
positioning images or objects is important step in building your image, position consist 2 values, X and Y that determine the object location in the canvas.

## Origin
X and Y origin starts in top-left corner of the canvas
which means, [X=0 Y=0] will be the top-left, [X=Width Y=0] is the top-right and so on

![](https://i.imgur.com/o0Ws1LM.png)

## Example 1
In one of image builder functions `$imageFill`, it requires position of the filled rectangle, let's try to provide [X=0;Y=0], Width=100, Height=100.\
![](https://i.imgur.com/uWY7dcm.png)

### Centering the box
to center the filled box, we can place it at position X equal to half the canvas width, and Y equal to half the canvas height. like so\
![](https://i.imgur.com/iSAQv14.png)

**Question: But Wait..that doesn't appear to be properly centered?**
**Answer: You are correct, because as we told that X, And Y is the position of Top-Left corner by default, so to fix it, we have to move the position half the rectangle width and height**

Here is the fixed version\
![](https://i.imgur.com/Ea6uGKA.png)

> Yay!

## Position Base
by default X and Y represent the top-left corner of the object, so what if we want to change it? like in our previous example, we had to do extra calculation to place the box in the center of the canvas.

### $imagePositionBase
we will use $imagePositionBase to help us change that.
it's usage is:
```
$imagePositionBase[Base]
```
> where `Base` can be top, topleft, topright,center, centerleft, centerright, bottom, bottomleft, bottomright

### Example 2: Rewriting Example 1
Let's this time make X, Y position is actually the center of the box by specifing `Base` to `center`\
![](https://i.imgur.com/PsCAkLz.png)

### Did you notice `width/2` and `height/2`?
you may ask is there acceptable names like `width` and `height` in position?\
Yeah, we call it **Placeholders** that helps you simplify the text.

## Position's Placeholders
| Placeholder | Description                                                                                       |
|:-----------:|---------------------------------------------------------------------------------------------------|
| width       | the width of the canvas                                                                           |
| height      | the height of the canvas                                                                          |
| centerx     | the center of the canvas in term of X alias for width/2                                           |
| centery     | the center of the canvas in term of Y alias for height/2                                          |
| center      | if used in X position, will be alias for centerx, if used in Y position will be alias for centery |
| w           | alias for width                                                                                   |
| h           | alias for height                                                                                  |

## Example 3: Even Simpler
We can now use `center` instead of `width/2`\
![](https://i.imgur.com/vTFbagw.png)
