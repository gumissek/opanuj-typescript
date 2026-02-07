import { Person } from './person.ts';

const person = new Person('Alice', 30);
person.identify();


// zmiana w tsconfig.json: "target": "es2015" (lub wyższy) zamiast "ES5"