// const name = 'Eshanth';

// console.log('Hello ' + name);


const Greet = (name) => {

    console.log(`Hello  ${name} Reddy`);

}


const {first, second}  = {first: 'Eshanth', second: 'Reddy'};

const [firstValue, secondValue] = ['Eshanth', 'Reddy'];

console.log(first, second);
console.log(firstValue, secondValue);
Greet('Eshanth');

console.log(__dirname);
console.log(__filename);
