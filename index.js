// Packages needed for this application
const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const fs = require('fs');
const generateSVG = require('./lib/generateSVG');

// Registering the prompt with inquirer
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

// Array of shapes for list used in the questions array
const shapes = ['Circle', 'Square', 'Triangle'];

// Array of questions for user input
const questions = [
    { type: 'maxlength-input', message: 'Enter three characters for your logo:', name: 'text', maxLength: 3},
    { type: 'input', message: 'Enter text color (color name or hexadecimal number):', name: 'textColor', validate: (value) => {if(value) {return true} else { return 'Please enter a text color.'}}},
    { type: 'list', message: 'Select a shape for your logo:', choices: shapes, name: 'shape'},
    { type: 'input', message: 'Enter shape color (color name or hexadecimal number):', name: 'shapeColor', validate: (value) => {if(value) {return true} else { return 'Please enter a shape color.'}}}
];

// Function to write .svg file
function writeToFile(data) {
    const filename = `logo.svg`;
    fs.writeFile(`./examples/${filename}`, generateSVG(data), (err) => err ? console.log(err) : console.log('Generated logo.svg'))
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile(answers)
    });
}

// Function call to initialize app
init();