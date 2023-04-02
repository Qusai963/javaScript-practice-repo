let circle = {
    radius: 1,
    draw: function () {
        console.log('drawing circle');
    }
};

// 1
const circle1 = {};
for (const key in circle)
    circle1[key] = circle[key];

console.log('circle1: ', circle1);

// 2
const circle2 = Object.assign({
    color: 'red'
}, circle);

console.log('circle2:', circle2);

// 3
const circle3 = { ...circle };
console.log('circle3: ', circle3);