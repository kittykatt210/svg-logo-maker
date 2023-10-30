// Constructor for Shapes is imported
const { Circle, Square, Triangle } = require('./shapes.js');

// A testing suite for Shapes is created
describe('Shapes', () => {
    // A test is created for the Circle shape to check that it does render the criteria for a blue circle
    describe('Circle', () => {
        test('test for circle with background blue', () =>{
            const shape = new Circle();
            shape.setColor('blue');
            expect(shape.render()).toEqual("<circle cx='100' cy='100' r='80' fill='blue'/>");
        });
    });
});

describe('Shapes', () => {
    // A test is created for the Square shape to check that it does render the criteria for a green square
    describe('square', () => {
        test('test for square with background green', () =>{
            const shape = new Square();
            shape.setColor('green');
            expect(shape.render()).toEqual("<rect x='25' y='25' width='150' height='150' fill='green'/>");
        });
    });
});

describe('Shapes', () => {
    // A test is created for the Triange shape to check that it does render the criteria for a red triangle
    describe('triangle', () => {
        test('test for triangle with background red', () =>{
            const shape = new Triangle();
            shape.setColor('red');
            expect(shape.render()).toEqual("<polygon points='150, 18 244, 182 56, 182' fill='red'/>");
        });
    });
})