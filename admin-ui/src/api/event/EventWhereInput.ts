import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type EventWhereInput = {
  id?: StringFilter;
  eventName?: StringNullableFilter;
};
