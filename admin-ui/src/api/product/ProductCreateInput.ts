import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  productname: string;
  price?: number | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
};
