//
//
//

type FruitProps = 'maça' | 'banana' | 'laranja';

type FruitCountProps = {
  [K in FruitProps]: number;
};

const fruits: FruitCountProps = {
  maça: 10,
  banana: 5,
  laranja: 7,
};

export const execute = (): void => {
  console.log(fruits);
};
