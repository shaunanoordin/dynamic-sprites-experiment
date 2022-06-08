# Dynamic Sprites Experiment

Hackday experiment to try dynamically altering 2D game sprites on a HTML canvas.

Created by [Shaun A. Noordin](https://shaunanoordin.com).

## Experiment Lessons - Sprite Art

**Canvas CSS scaling:** When our `<canvas>`'s _CSS width/height_ is scaled
larger than its _HTML width/height,_ be sure to use use `canvas { image-rendering: pixelated }`.
This preserves the pixel sharpness of our sprite art.

**Canvas 2D Context scaling:** Before we use `canvasContext2d.drawImage()` to
draw sprite art, be sure to specify `canvasContext2d.imageSmoothingEnabled = false`.
This allows sprite art to be scaled up correctly.

## How to Use

Start the web app by accessing `index.html` from your web browser. (Compatible with Chrome 102 and Firefox 101.)

## Development Notes

- This is a web app built on HTML5, JavaScript, and [Sass](https://sass-lang.com/)/CSS.
- Developing the web app requires [Node](https://nodejs.org/) and NPM installed on your machine and a handy command line interface. (Bash, cmd.exe, etc)

Project anatomy:

- Source JavaScript and Sass files are in the `/src` folder.
- Compiled JS and CSS files are in the `/app` folder.
- Media assets are meant to be placed in the `/assets` folder, but this is optional.
- Entry point is `index.html`.

Starting the project:

1. Install the project dependencies by running `npm install`
2. Run `npm start` to start the server, or `npm run dev` to start the server in dev mode (i.e. source files will be watched and changes compiled dynamically.)
3. Open `http://localhost:3000` on your web browser to view the app.
