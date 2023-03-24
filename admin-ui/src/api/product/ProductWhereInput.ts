import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  productname?: StringFilter;
  price?: FloatNullableFilter;
  orders?: OrderListRelationFilter;
};
