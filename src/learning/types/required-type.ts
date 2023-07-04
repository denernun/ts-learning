//
//
//

namespace RequiredType {
  type Car = {
    model: string;
    color: string;
  };

  // Property 'color' is missing in type '{ model: string; }' but required in type 'Required<Car>'
  const carRequired: Required<Car> = {
    model: 'Fusca',
    color: 'Azul',
  };

  console.log(carRequired);
}
