import { InputJsonValue } from "../../types";
import { HubitusCheckupUpdateManyWithoutUsersInput } from "./HubitusCheckupUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  username?: string;
  password?: string;
  roles?: InputJsonValue;
  lastLoginTime?: Date;
  trueName?: string | null;
  creatTime?: Date;
  gender?: "Unknown" | "Male" | "Female" | null;
  hubitusCheckups?: HubitusCheckupUpdateManyWithoutUsersInput;
  openId?: string;
  sessionKey?: string;
  unionId?: string;
  inviterId?: string | null;
  birthday?: Date | null;
  nickName?: string | null;
  userIdCard?: string | null;
  avatarUrl?: string | null;
  country?: string | null;
  province?: string | null;
  city?: string | null;
  language?: string | null;
  oauthType?: string;
};
