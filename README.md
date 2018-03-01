_**Note**: This project is a work in progress, and will not be production ready until v1.0.0 release._

# Gulp Sass &amp; JavaScript compiler
A simple Gulp task that takes your project Sass and JavaScript files, optionally minifies them, and creates ready to serve `.css` and `.js` files in a folder of your choice.

## Requirements
- [node.js](https://nodejs.org/)

## Installation
1. Install [node.js](https://nodejs.org/).
2. `cd` into the root of your project folder
3. `git clone https://github.com/jamiewade/gulp-sass-js.git build`
4. `cd build`
5. `npm install`

## Updating
1. `cd` into the folder that contains the build script files
2. Run `git status` to ensure you have a clean working copy
3. `git pull origin master`
4. `npm install`

## Environment set-up
Included in the repository is an `env.example.json` file. Make a copy of the file and name it `env.json`.

This file includes a number of options that you can configure to your requirements:

- `productionMode` - When set to true, your generated files will be minified and all comments will be stripped away
- `destination` - The folder you would like your generated files to be automatically saved into
- `sassFolder` - The folder that contains your project Sass files
- `sassIncludeFile` - The location of the base Sass file used to import all other Sass files
- `generatedCssFileName` - What you would like the generated `.css` file to be called. Do not include the file extension
- `jsFolder` - The location of the main JavaScript file used to import all other files
- `jsIncludeFile` - The location of the base JavaScript file used to import all other JavaScript files
- `generatedJsFileName` - What you would like the generated `.js` file to be called. Do not include the file extension

_**Note**: All folder and file paths are relative to the `env.json` file. Adjust accordingly_

## Usage
- `gulp` - Running this command starts a watch task. This automatically re-generates your CSS/JS when it detects changes to your source files

## Recommended Folder Structure
You are in full control over what your folders and file names are called, although `env.example.json` does contain some paths and file names. This is the exact folder structure `env.example.json` is expecting, in its current form:

```
.
├── build (1)
├── source
│   ├── js
│   │   ├── example folder
│   │   |   ├── example-file-1.js
│   │   |   ├── example-file-2.js
│   │   |   └── example-file-3.js
|   └── └── script.js (2)
│   ├── sass
│   │   ├── example folder
│   │   |   ├── _example-file-1.scss
│   │   |   ├── _example-file-2.scss
│   │   |   └── _example-file-3.scss
|   └── └── style.scss (3)
├── web
│   └── _ (4)
└── ...
```

1. The `build` folder is purely a clone of this repository, as outlined in the **Installation** step
2. This `script.js` file is where you can set any JavaScript. You can also [include multiple JavaScript files](https://www.npmjs.com/package/gulp-include) at the top of the file, so they all get compiled into a single file
3. This `style.scss` file is where you can include multiple Sass files, so they all get compiled into a single file
4. This is a folder, simply named `_`, which sits in the public root of this example project, and acts as the folder where your generated `.css` and `.js` files are served from 
