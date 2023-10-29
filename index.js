const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes');

// Array of shapes
const shapes = ['Circle', 'Square', 'Triangle'];
// Array of questions
const questions = [
    { type: 'input', message: 'What would you like to display? Enter up to three characters:', name: 'text', validate: (value) => {if(value) {return true} else { return 'Please enter three characters to display.'}}},
    { type: 'input', message: 'What text color do you want? Enter a hexidecimal number or color name:', name: 'textColor', validate: (value) => {if(value) {return true} else { return 'Please enter a text color.'}}},
    { type: 'list', message: 'Select a shape for your logo:', choices: shapes, name: 'shape'},
    { type: 'input', message: 'What shape color do you want? Enter a hexidecimal number or color name:', name: 'textColor', validate: (value) => {if(value) {return true} else { return 'Please enter a shape color.'}}}
];

// Function to write .svg file
function writeToFile(data) {
    const filename = 'logo.svg';
    fs.writeFile(filename, generateSVG(data), (err) => err ? console.log(err) : console.log('Generated logo.svg'))
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