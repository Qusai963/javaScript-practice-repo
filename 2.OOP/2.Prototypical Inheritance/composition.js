function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

const canEat = {
    eat: function () {
        this.hunger--;
        console.log('Eating');
    }
};

const canWalk = {
    walk: function () {
        console.log('Walking');
    }
};

const canSwim = {
    swim: function () {
        console.log('Swimming');
    }
};

function Person() {
}

function Fish() {
}

mixin(Person.prototype, canEat, canWalk);
mixin(Fish.prototype, canSwim, canEat);
