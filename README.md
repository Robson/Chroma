# Chroma

## Table of Contents

 * [Demo](#demo)
 * [Explanation](#explanation)
 * [Colour Sets](#colour-sets)
 * [Live Version](#live-version) 
 * [Compatibility](#compatibility)
 * [Testing](#testing) 
 * [File Descriptions](#file-descriptions)
 * [Technologies](#technologies)
 * [Validation](#validation)
 
## Demo

![Demo](https://raw.githubusercontent.com/Robson/Chroma/master/Demo.gif)

## Explanation

Chroma is a daily game where you guess the colour based on the name. Each day there are five colour names.

## Colour Sets

The colour set is randomly chosen each day from this list:

 * [Pantone: Fashion, Home & Interiors](https://www.pantone.com/fashion-home-interiors)
 * [Dulux: Popular](https://www.dulux.co.uk/en/colour-details/filters/h_White#tabId=item0)
 * [Dulux: Heritage](https://www.duluxheritage.co.uk/en/colours)
 
The first set has substantially more colours than the other sets, so that set is chosen most often.
 
The [X11](https://en.wikipedia.org/wiki/X11_color_names) colour set is also written into the project, but currently disabled.

## Live Version

https://robson.plus/chroma/

## Compatibility

The output for this project is designed for desktop and mobile.

| Platform | OS      | Browser          | Version | Status  |
| :------- | :------ | :--------------- | :------ | :------ |
| Desktop  | Windows | Firefox          | 131     | Working |
| Desktop  | Windows | Opera            | 114     | Working |
| Desktop  | Windows | Chrome           | 130     | Working |
| Desktop  | Windows | Edge             | 130     | Working |
| Mobile   | Android | Chrome           | 130     | Working |
| Mobile   | Android | Firefox          | 131     | Working |

Last tested on 24th October 2024.

## Testing
 
 To run this on your computer:
  * [Download the repository](https://github.com/Robson/Chroma/archive/master.zip).
  * Unzip anywhere.
  * Open *index.html* in your browser.
  
## File Descriptions

### index.html

This is the webpage with the game.

### colours.js

This is where all the colour sets are stored, along with the information for those sets (name, URL, etc).

This has code written by user993683 from here:
https://stackoverflow.com/questions/13586999/color-difference-similarity-between-two-values-with-js

### rng.js

This is a seedable random number generator by _bryc_ and obtained from here:
https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript

### styles.css

All formatting and layout information is contained in this file.

## Technologies

This is built using:
 * HTML
 * CSS
 * JavaScript
   * [D3](https://github.com/d3/d3)
   * [html2canvas](https://html2canvas.hertzen.com/)
   
## Validation
   
<a href="https://validator.w3.org/nu/?doc=https%3A%2F%2Frobson.plus%2Fchroma%2F"><img src="https://www.w3.org/Icons/valid-html401-blue" alt="Valid HTML" /></a>

<a href="http://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Frobson.plus%2Fchroma%2Fstyles.css&profile=css3svg&usermedium=all&warning=1"><img src="https://jigsaw.w3.org/css-validator/images/vcss-blue" alt="Valid CSS" /></a>      

[![X](https://www.codefactor.io/repository/github/robson/Chroma/badge?style=flat-square)](https://www.codefactor.io/repository/github/robson/Chroma)   
