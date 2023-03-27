import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderUpdateInput = {
  orderNo?: string;
  product?: ProductWhereUniqueInput | null;
};
