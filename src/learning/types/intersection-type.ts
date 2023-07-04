namespace IntersectionType {
  type Person = {
    name: string;
    age: number;
  };

  type Address = {
    street: string;
    city: string;
  };

  type PersonWithAddress = Person & Address;

  const person: Person = {
    name: 'John',
    age: 30,
  };

  const address: Address = {
    street: '123 Fake St',
    city: 'Nowhere',
  };

  const personWithAddress: PersonWithAddress = {
    ...person,
    ...address,
  };

  console.log(personWithAddress);
}
