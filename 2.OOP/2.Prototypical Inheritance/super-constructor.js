function Shape(color) {
    this.color = color;
}

function Circle(radius, color) {
    Shape.call(this, color);

    this.radius = radius;
}
