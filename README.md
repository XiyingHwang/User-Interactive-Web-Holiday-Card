# Happy Holidays Project

## Assignment Details

For this project, I will make an interactive holiday "mobile", with letters hanging from strings of different lengths from the top of the screen.  The letters should be evenly fd across the screen, and at random heights between 1/4 and 3/4 the height of the screen (i.e., the middle half of the screen). Each letter should be "connected" to the top of the screen with a line (it's "string"). At a minimum, each letter should be represented by a single quad, but you can make the letters more elaborate if you want. Each letter should be tilted slightly to the right or left (randomly) as seen by the viewer, so that the pattern is visually interesting.  The letters could be "just the letter" (e.g., a transparent texture) or could be a solid square with the letter in it, the choice is yours.

You are free to render letters in any way you want. For ideas and guidance on how to render text, such as using textures, start with the examples in webglfundamentals.org.  But, you are free to also consider other approaches, such as generating textures on the fly from web fonts as shown in https://github.com/mikolalysenko/gl-render-text, creating meshes from SVG character (https://css-tricks.com/rendering-svg-paths-in-webgl/), or adapting more refined solutions (https://www.eventbrite.com/engineering/its-2015-and-drawing-text-is-still-hard-webgl-threejs/). You are free to use a library to generate the text images (as in the gl-render-text example), or simply create the textures you want by hand (for example, using photoshop) as done in webglfundamentals.org (the advantage of the latter is that you can create a rectangular texture for each letter that looks exactly like you want, with any additional decorations or styling you care to add, but it may require more up-front work).

The key part of this assignment, however, is that the mobile must be interactive:

* the message should be taken from the keyboard.  Your scene should start with no text, but should have instructions that tell the user that they can type any letters to create a message, how to reset the message text, and what the maximum number of characters are (if any). As letters are typed, they are added to the message.  You should accept (at least) letters and spaces, but can also accept other characters if you want.  As characters are typed, they should be added such that the message is centered on the screen.  

* the user should be able to click on the letters.  When they do, the letters should spin, with the speed and (thus) the amount they spin based on how far from the horizontal center they click (click near the left or right edge to spin multiple times, click near the middle to spin just once). The letter should always end up facing forward again, and should decelerate smoothly from it's initial speed. So you should look at the distance from the center, decide how many times to spin, and start the spin at the right speed such that it will end up facing forward.  One way to handle the deceleration is to use part of a sin() wave (perhaps from 90..180 degrees) to start at full speed and end at zero speed, with the total amount of rotation being spread through that range).   You can use either approach to selection we discussed in class (ray casting, which in this case would be a ray-polygon intersection, or the render buffer technique).

* you can allow the user to click again on a spinning letter, or not allow a letter to be clicked on again until it stops.  Your choice.

* you must allow all the letters to be spinning at the same time.  So make sure you associated the spinning state with each letter, do not just have one set of global state such that only one letter can be spinning.

* when the user types a letter, a sound should play.  When they click on a letter with the mouse, a different sound should play.  (you might consider using a wrapper library like [howler.js](http://goldfirestudios.com/blog/104/howler.js-Modern-Web-Audio-Javascript-Library) which has a TSD wrapper already built, instead of using the web audio APIs directly).

(A note about TSC types: types for thousands of Javascript libraries are in https://github.com/DefinitelyTyped/DefinitelyTyped and can be installed using npm. In this case, `npm install --save-dev @types/howler` will install the howler.js typings.  The `tsc` compiler should see any typings installed this way.)

For input, do not create a text entry box, rather use the keyboard events (e.g., onkeydown) to capture keypresses.  

The basic assignment does not have to adjust the size of the letters based on how much the user types, but can use a fixed size.  However, the letters should be sized and spaced such that the message "Happy Holidays" can be displayed. 

For rendering lines, look up the documentation for rendering gl.LINES (analogous to rendering triangles with gl.TRIANGLES).  [Here's a example](http://www.codeproject.com/Articles/594222/LineplusinplusWebGLplusandpluswhyplusyouplusgonnap) with some code.

You must also clearly identify what you did (summarize how you solved each element of the basic assignment, along with what bonus parts you did and how the TA can see them in action if needed) in text on the HTML page under the 3D canvas element.


