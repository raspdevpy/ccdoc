# Image Builder: Size
Sizing is important to ensure how big the object/image in the canvas.

## Intro
Size in our functions consist of two important parts: Width and Height.\
They starts from 0 and can't be negative.\

## Example 1
In one of image builder functions `$imageFill`, it requires size of the filled rectangle, let's try to provide [Width=100 Height=100].\
![](https://i.imgur.com/uWY7dcm.png)

### Making it bigger
By increase width and height, you can easily scale that box
let's try Width=200 Height=100\
![](https://i.imgur.com/9DG1ubq.png)

## Example 2
Let's make 2 boxes (White & RED) to draw Poland Flag!\
![](https://i.imgur.com/ByyKJkr.png)

### Did you notice `w/2` and `h/2`?
These are placeholders available for Size, next section will table them out

## Size's Placeholders
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
