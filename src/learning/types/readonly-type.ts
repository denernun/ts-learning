//
//
//

namespace ReadonlyType {
  type Car = {
    model: string;
    color: string;
  };

  const carReadonly: Readonly<Car> = {
    model: 'Fusca',
    color: 'Azul',
  };

  // Cannot assign to 'model' because it is a read-only property.
  // carReadonly.model = 'Brasilia';

  console.log(carReadonly);
}
