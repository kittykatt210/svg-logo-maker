// Defines a class named Shape
class Shape {
    constructor() {
        this.color = '';
    }
    setColor(colors) {
        this.color = colors;
    }
}

// Defines a class named Circle that extends the Shape class
class Circle extends Shape {
    render() {
        return `<circle cx='100' cy='100' r='80' fill='${this.color}'/>`;
    }
}

// Defines a class named Square that extends the Shape class
class Square extends Shape {
    render() {
        return `<rect x='25' y='25' width='150' height='150' fill='${this.color}'/>`;
    }
}

// Defines a class named Triangle that extends the Shape class
class Triangle extends Shape {
    render() {
        return `<polygon points='150, 18 244, 182 56, 182' fill='${this.color}'/>`;
    }
}

module.exports = { Circle, Triangle, Square };