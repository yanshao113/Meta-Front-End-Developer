// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy() {
    for (item of dairy) {
        console.log(item);
    }
}
logDairy();
// Task 2
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;
function birdCan() {
    for (factor of Object.keys(bird)) {
        console.log(`${factor}: ${bird[factor]}`)
    }
}
birdCan();
// Task 3
function animalCan() {
    for (factor in bird) {
        console.log(`${factor}: ${bird[factor]}`);
    }
}
animalCan();