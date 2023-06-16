function Child(radius) {
    this.radius = radius;
    this.move = function () {
        console.log('move');
    }
}
Child.prototype.draw = function () {
    console.log('draw');
}

const c1 = new Child(1);

// Returns instance members
console.log(Object.keys(c1));

// Returns (instance + prototypes) members
for (let key in c1) console.log(key);

console.log(c1.hasOwnProperty('radius'));
console.log(c1.hasOwnProperty('radius'));