// Pascal Notation
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const circle1 = new Circle(10);
circle1.draw();