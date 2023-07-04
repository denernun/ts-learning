//
//
//

interface Person {
  name: string;
  age: number;
}

type Stringfy<T> = {
  [P in keyof T]: string | number;
};

const person: Stringfy<Person> = {
  name: 'John',
  age: 30,
};

console.log(person);
