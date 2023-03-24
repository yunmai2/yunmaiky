import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HubitusCheckupListRelationFilter } from "../hubitusCheckup/HubitusCheckupListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type UserWhereInput = {
  id?: StringFilter;
  username?: StringFilter;
  trueName?: StringNullableFilter;
  gender?: "Unknown" | "Male" | "Female";
  hubitusCheckups?: HubitusCheckupListRelationFilter;
  openId?: StringFilter;
  sessionKey?: StringFilter;
  unionId?: StringFilter;
  inviterId?: StringNullableFilter;
  birthday?: DateTimeNullableFilter;
  nickName?: StringNullableFilter;
  userIdCard?: StringNullableFilter;
  avatarUrl?: StringNullableFilter;
  country?: StringNullableFilter;
  province?: StringNullableFilter;
  city?: StringNullableFilter;
  language?: StringNullableFilter;
  oauthType?: StringFilter;
};
