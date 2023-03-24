import { InputJsonValue } from "../../types";
import { HubitusCheckupCreateNestedManyWithoutUsersInput } from "./HubitusCheckupCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  username: string;
  password: string;
  roles: InputJsonValue;
  lastLoginTime: Date;
  trueName?: string | null;
  creatTime: Date;
  gender?: "Unknown" | "Male" | "Female" | null;
  hubitusCheckups?: HubitusCheckupCreateNestedManyWithoutUsersInput;
  openId: string;
  sessionKey: string;
  unionId: string;
  inviterId?: string | null;
  birthday?: Date | null;
  nickName?: string | null;
  userIdCard?: string | null;
  avatarUrl?: string | null;
  country?: string | null;
  province?: string | null;
  city?: string | null;
  language?: string | null;
  oauthType: string;
};
