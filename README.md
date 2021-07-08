# Responsive Sprites

Sample project for resonsive, sprite-based browser games.

## About

Unlike traditional webpage-layouts, browsergames are commonly based on sprites rather than textual elements.  
Optimized layout of the collective UI elements is challenging:

 * Positioned spites may involve overlays and overlaps.
 * Element scaling and positioning changes on canvas resize.

This repository serves as a minimal sample project to provide minimal code required for a responsive, sprite-based game-UI design.

![demo](markdown/demo.gif)

## Layout

The demo uses sample sprites of the board game *[Acquire](https://boardgamegeek.com/boardgame/5/acquire)*.  

The board and the two displayed companies are individual sprites, realized as individual ```img``` elements in the [HTML DOM tree](index.html).

![elements](markdown/elements.gif)

## Important files

For implementation internals, inspect the following files:

 * ```index.html```: Minimal DOM tree defining the used sprites.
 * ```renderer.js```: Client side computations to convert absolute layout coordinates into relative coordinated, based on an optimized responsive UI fit.
 * ```absolutePositions.js```: Properties file to provide absolute overlay element coorindates converted by the renderer.
 * ```style.css```: Enables responsive backdrop layout and enables relative element overlaying.


## Contact / Pull Requests

 * Author: Maximilian Schiedermeier ![email](markdown/email.png)
 * Github: Kartoffelquadrat
 * Webpage: https://www.cs.mcgill.ca/~mschie3
 * License: [MIT](https://opensource.org/licenses/MIT)
