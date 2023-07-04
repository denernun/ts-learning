namespace ConstType {
  const obj = {
    name: 'John',
    age: 30,
  } as const;
  console.log(obj.name);
}
