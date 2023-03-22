import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HubitusCheckupWhereInput = {
  id?: StringFilter;
  currentHabitus?: StringFilter;
  testResult?: StringFilter;
  countResult?: StringFilter;
  suggest?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
