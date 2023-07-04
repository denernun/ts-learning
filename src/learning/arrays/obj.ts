//
//
//

interface IObj {
  name: string;
}

const obj: IObj[] = [
  {
    name: 'Dener',
  },
  {
    name: 'Milena',
  },
];

obj.forEach((item: IObj, index: number) => console.log(`index ${index}`, item.name));

const myObj: IObj[] = obj.map((item: IObj, index: number) => {
  console.log(`index ${index}`, item);
  return item;
});
console.log(myObj);

for (const item of obj) {
  console.log(item);
}

Object.entries(obj).forEach(([key, value]) => {
  console.log(key, value);
});

Object.keys(obj).forEach((key) => {
  console.log('key', key);
});

Object.values(obj).forEach((value) => {
  console.log('value', value);
});
