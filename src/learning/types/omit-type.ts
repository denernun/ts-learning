//
//
//

namespace OmitType {
  type Person = {
    name: string;
    age: number;
  };

  const person: Person = {
    name: 'John',
    age: 30,
  };

  type PersonAge = Omit<Person, 'age'>;

  const personAge: PersonAge = {
    name: 'John',
  };

  // Property 'age' does not exist on type 'PersonAge'
  // personAge.age = 30;

  console.log(person);
  console.log(personAge);
}
