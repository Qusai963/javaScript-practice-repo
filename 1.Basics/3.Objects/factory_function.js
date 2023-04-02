// Camal Notation
function createCircle(radius) {
    return {
        radius,
        // or radius: radius
        draw(){
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
circle1.draw();