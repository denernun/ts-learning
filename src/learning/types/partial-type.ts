//
//
//

namespace PartialType {
  interface Animal {
    name: string;
    age: number;
  }

  const animal: Animal = {
    name: 'Horse',
    age: 30,
  };

  const animalPartial: Partial<Animal> = {
    name: 'John',
  };

  console.log(animal);
  console.log(animalPartial);
}
