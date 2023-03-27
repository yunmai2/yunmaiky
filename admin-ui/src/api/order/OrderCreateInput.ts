import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderCreateInput = {
  orderNo: string;
  product?: ProductWhereUniqueInput | null;
};
