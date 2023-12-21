# Animation for Uniper by Mediamakers AB

## Goal
The goal is to have a fully responsive interactive animation. The animation is divided in to steps each step has a respective step button. When a button is pressed a textbox will appear and that animation step will play in a loop until another button is presses.

## Suggested features
- Loading screen that shows before animation is loaded.

## Left to implement
- The texts for each step is not implemented

## Issues
- Size of text and buttons is not fully decided.
- Some issues with breakpoints and responsiveness on smaller screens.

## Suggestion for improvement
- Have a toggle button so you can turn the step on and off. When one step is active the other buttons disapear so it does not clutter the animation. Another solution can be to have both text and buttons underneath the animation.

## Implementation
- Font is now loaded from the fonts directory in assets, change the file path to where your fonts is stored and delete the fonts folder inside assets folder.
- Change file paths for mm_anim_script.js and lottie.js in index.html if the files are moved.
- Change file path for mm_style.css in index.html if the files are moved.
- The lottie.js and mm_animation.json needs to stay in the same folder.
- Move div with id "tanim" to new page location.
- Move script tags from index.html to new page location.

## Security
- To run the animation lottieplayer is needed which is a JS file that needs to be located in the same folder as the mm_animation.json.json file. There is a security concern about the player making outside calls. I have not found that it does but i have also been in contact with the lottie players engenering team and I am still waiting for a response unfortunately.

- There are no cdns or api:s used for fonts, styling or logic.
- Everything is coded with HTML, CSS and JS.
- Animation is done with adobe After Effects.