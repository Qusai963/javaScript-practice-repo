function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape() {
}

Shape.prototype.duplicate = function() {
    console.log("duplicate");
}

function Circle(radius) {
    this.radius = radius;
}

extend(Circle, Shape);

// overriding should be below the extend method
Circle.prototype.duplicate = function() {
    console.log("duplicate circle");
}

const c = new Circle(1);
c.duplicate();