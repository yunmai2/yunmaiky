import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderUpdateInput = {
  orderNo?: string;
  proId?: ProductWhereUniqueInput | null;
};
