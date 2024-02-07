type Product = {
  type: string;
  price: number;
};

type GetterFunction<T> = {
  //   [key: string]: string;
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type ProductAddionalType = GetterFunction<Product>;
type TheMainProduct = Product & ProductAddionalType;

// const user = User
