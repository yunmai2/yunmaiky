import { JsonValue } from "type-fest";
import { HubitusCheckup } from "../hubitusCheckup/HubitusCheckup";

export type User = {
  id: string;
  username: string;
  roles: JsonValue;
  lastLoginTime: Date;
  trueName: string | null;
  creatTime: Date;
  gender?: "Unknown" | "Male" | "Female" | null;
  hubitusCheckups?: Array<HubitusCheckup>;
  openId: string;
  sessionKey: string;
  unionId: string;
  inviterId: string | null;
  birthday: Date | null;
  nickName: string | null;
  userIdCard: string | null;
  avatarUrl: string | null;
  country: string | null;
  province: string | null;
  city: string | null;
  language: string | null;
  oauthType: string;
};
