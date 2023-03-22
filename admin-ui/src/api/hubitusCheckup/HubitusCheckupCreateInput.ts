import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HubitusCheckupCreateInput = {
  testTime: Date;
  currentHabitus?: string | null;
  testResult?: string | null;
  countResult?: string | null;
  suggest?: string | null;
  userId?: UserWhereUniqueInput | null;
};
