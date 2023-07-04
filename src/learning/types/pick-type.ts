//
//
//

namespace PickType {
  type Person = {
    name: string;
    age: number;
  };

  const person: Person = {
    name: 'John',
    age: 30,
  };

  type PersonAge = Pick<Person, 'age'>;

  const personAge: PersonAge = {
    age: 30,
  };

  // Property 'name' does not exist on type 'PersonAge'
  // personAge.name = 'John';

  console.log(person);
  console.log(personAge);
}
