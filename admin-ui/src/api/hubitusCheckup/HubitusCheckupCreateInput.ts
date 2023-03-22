import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HubitusCheckupCreateInput = {
  testTime: Date;
  currentHabitus: string;
  testResult: string;
  countResult: string;
  suggest?: string | null;
  user?: UserWhereUniqueInput | null;
};
