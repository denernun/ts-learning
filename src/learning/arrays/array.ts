//
//
//

const array: string[] = ['Dener', 'Milena'];

// map sempre retorna um novo array
const myArray = array.map((item) => item).filter((item) => item === 'Dener');
console.log('filter', myArray);

// forEach apenas itera sobre o array
array.forEach((item, index, array) => console.log(`item ${index}`, item));

// o for of é uma forma mais simples de iterar sobre um array
for (const item of array) {
  console.log(item);
}

// o object.entries retorna um array de arrays com chave e valor
Object.entries(array).forEach(([key, value]) => {
  console.log(key, value);
});

Object.keys(array).forEach((key) => {
  console.log('key', key);
});

Object.values(array).forEach((value) => {
  console.log('value', value);
});
