import { User } from "../user/User";

export type HubitusCheckup = {
  id: string;
  testTime: Date;
  currentHabitus: string;
  testResult: string;
  countResult: string;
  suggest: string | null;
  user?: User | null;
};
