namespace ConditionalType {
  // Pega o tipo generico T e verifica se ele é uma string
  // retornando true ou false
  type IsString<T> = T extends string ? true : false;
  type A = IsString<string>; // true
  type B = IsString<number>; // false
  function printString(str: IsString<string> extends true ? string : never) {
    console.log(str);
  }
  printString('Hello, world!'); // prints "Hello, world!"
  // printString(123); // error: Argument of type '123' is not assignable to parameter of type 'never'.

  // infer
  type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
  type C = GetReturnType<() => string>; // string
  type D = GetReturnType<(x: number) => boolean>; // boolean

  // infer
  type GetPromiseType<T> = T extends Promise<infer R> ? R : never;
  type E = GetPromiseType<Promise<string>>; // string
  type F = GetPromiseType<Promise<number>>; // number

  // This code defines a TypeScript type called GetArrayElementType that takes a generic type parameter T. The type GetArrayElementType is defined using a conditional type that checks if T is an array type. If T is an array type, then the type R is inferred from the array and returned as the result of the type GetArrayElementType. If T is not an array type, then the type never is returned as the result of the type GetArrayElementType.
  // To understand this code, it's important to understand what a conditional type is in TypeScript. A conditional type is a type that depends on a condition. In this case, the condition is whether or not T is an array type. If the condition is true, then the type R is inferred from the array and returned. If the condition is false, then the type never is returned.
  // This code is useful when you need to get the type of the elements in an array. For example, if you have an array of numbers, you can use GetArrayElementType to get the type number. This can be useful when you want to create a function that takes an array of a specific type and returns a value based on the elements in the array.
  type GetArrayElementType<T> = T extends (infer R)[] ? R : never;
  type G = GetArrayElementType<string[]>; // string
  type H = GetArrayElementType<number[]>; // number

  // infer
  type GetConstructorParameterType<T> = T extends new (...args: infer P) => any ? P : never;
  type I = GetConstructorParameterType<new (x: string, y: number) => void>; // [string, number]
  type J = GetConstructorParameterType<new (x: string) => void>; // [string]

  // infer
  type GetConstructorReturnType<T> = T extends new (...args: any[]) => infer R ? R : any;
  type K = GetConstructorReturnType<new () => string>; // string
  type L = GetConstructorReturnType<new () => number>; // number

  // infer
  type GetConstructorParameterAndReturnType<T> = T extends new (...args: infer P) => infer R ? [P, R] : any;
  type M = GetConstructorParameterAndReturnType<new (x: string, y: number) => boolean>; // [[string, number], boolean]
  type N = GetConstructorParameterAndReturnType<new (x: string) => number>; // [[string], number]

  // infer
  type GetPropertyType<T, K extends keyof T> = T extends { [P in K]: infer R } ? R : any;
  type O = GetPropertyType<{ x: string; y: number }, 'x'>; // string
}
