import { JsonValue } from "type-fest";
import { HubitusCheckup } from "../hubitusCheckup/HubitusCheckup";

export type User = {
  id: string;
  creatTime: Date;
  lastLoginTime: Date;
  trueName: string | null;
  username: string;
  roles: JsonValue;
  oauthType: string | null;
  openId: string | null;
  sessionKey: string | null;
  unionId: string | null;
  inviterId: string | null;
  nickName: string | null;
  avatarUrl: string | null;
  gender?: "Unknown" | "Male" | "Female" | null;
  birthday: Date | null;
  userIdCard: string | null;
  country: string | null;
  province: string | null;
  city: string | null;
  language: string | null;
  hubitusCheckups?: Array<HubitusCheckup>;
};
