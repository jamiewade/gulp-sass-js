_**Note**: This project is a work in progress, and will not be production ready until v1.0.0 release._

# Gulp Sass and JavaScript compiler
A simple Gulp task that takes your project Sass and JavaScript files, minifies them, and creates production ready `.css` and `.js` files in the root of your project.

## Requirements
- [node.js](https://nodejs.org/)

## Installation
1. Install [node.js](https://nodejs.org/).
2. `cd` into the root of your project folder
3. `git clone https://github.com/jamiewade/gulp-sass-js.git _build`
4. `cd _build`
5. `npm install`

## Environment set-up
Included in the repository is an `env.example.json` file. Copy the file and name it `env.json`.

The file includes a number of options that you can configure to your requirements:

- `productionMode` - When set to true, your generated files will be minified and all comments will be stripped away
- `destination` - The folder you would like your generated files to be automatically saved into
- `sassFile` - The location of the main Sass file used to import all other files
- `generatedCssFileName` - What you would like the generated `.css` file to be called. Do not include the file extension
- `jsFolder` - The location of the main JavaScript file used to import all other files
- `generatedJsFileName` - What you would like the generated `.js` file to be called. Do not include the file extension

_**Note**: All folder and file paths are relative to the `env.json` file. Adjust accordingly._

## Usage
- `gulp` - Running this command starts a watch task. This automatically re-generates your CSS/JS when it detects changes to your source files.
