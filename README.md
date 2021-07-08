# Responsive Sprites

Sample project for responsive, sprite-based browser games.

## About

Unlike traditional webpage-layouts, browser-games are commonly based on sprites rather than textual markup elements.  
Optimized layout of a sprite based UI is challenging:

 * Spites' relative positioning involves overlaps.
 * Sprite scaling and positioning depends on the available application canvas.

This repository serves as a minimal sample to provide reusable code for a responsive, sprite-based layout.

![demo](markdown/demo.gif)

## Layout

The demo uses three sample sprites of the board game *[Acquire](https://boardgamegeek.com/boardgame/5/acquire)*.

 * A backdrop (grid with available tile positions.)
 * Two companies. Must be placed on the grid.

![elements](markdown/elements.gif)

## Important files

For implementation internals, inspect the following files:

 * [```index.html```](index.html): Minimal DOM tree defining the used sprites.
 * [```renderer.js```](renderer.js): Client side computations to convert absolute layout coordinates into relative coordinated, based on an optimized responsive UI fit.
 * [```absolutePositions.js```](absolutePositions.js): Properties file to provide absolute overlay element coorindates converted by the renderer.
 * [```style.css```](style.css): Enables responsive backdrop layout and enables relative element overlaying.


## Contact / Pull Requests

 * Author: Maximilian Schiedermeier ![email](markdown/email.png)
 * Github: Kartoffelquadrat
 * Webpage: https://www.cs.mcgill.ca/~mschie3
 * License: [MIT](https://opensource.org/licenses/MIT)
