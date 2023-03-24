import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderCreateInput = {
  orderNo: string;
  proId?: ProductWhereUniqueInput | null;
};
