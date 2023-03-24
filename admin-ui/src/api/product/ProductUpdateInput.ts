import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  productname?: string;
  price?: number | null;
  orders?: OrderUpdateManyWithoutProductsInput;
};
