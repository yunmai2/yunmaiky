import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderWhereInput = {
  orderNo?: StringFilter;
  id?: StringFilter;
  proId?: ProductWhereUniqueInput;
};
