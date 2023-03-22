import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { HubitusCheckupListRelationFilter } from "../hubitusCheckup/HubitusCheckupListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  trueName?: StringNullableFilter;
  username?: StringFilter;
  oauthType?: StringFilter;
  openId?: StringFilter;
  sessionKey?: StringFilter;
  unionId?: StringFilter;
  inviterId?: StringNullableFilter;
  nickName?: StringNullableFilter;
  avatarUrl?: StringNullableFilter;
  gender?: "Unknown" | "Male" | "Female";
  birthday?: DateTimeNullableFilter;
  userIdCard?: StringNullableFilter;
  country?: StringNullableFilter;
  province?: StringNullableFilter;
  city?: StringNullableFilter;
  language?: StringNullableFilter;
  hubitusCheckups?: HubitusCheckupListRelationFilter;
};
