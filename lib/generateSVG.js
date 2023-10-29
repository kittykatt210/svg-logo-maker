const { Circle, Triangle, Square } = require('./shapes');

// Function to return tag for selected shape
function getShape(shape, color){
    switch(shape) {
        case 'Circle':
            logo = new Circle();
            logo.setColor(color);
            break;
        case 'Square':
            logo = new Square();
            logo.setColor(color);
            break;
        case 'Triangle':
            logo = new Triangle();
            logo.setColor(color);
            break;
    }
    return logo.render()
}


// Function to generate SVG tag
function generateSVG(data) {
    return `<svg width = '300' height = '200'>
        ${getShape(data.shape, data.shapeColor)}
        <text x = '50%' y = '50%' dominant-baseline = 'middle' text-anchor = 'middle' fill = '${data.textColor}'>
            ${data.text}
        </text>
    </svg>`;
}

module.exports = generateSVG;