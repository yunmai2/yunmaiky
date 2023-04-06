import { TestDateWhereInput } from "./TestDateWhereInput";
import { TestDateOrderByInput } from "./TestDateOrderByInput";

export type TestDateFindManyArgs = {
  where?: TestDateWhereInput;
  orderBy?: Array<TestDateOrderByInput>;
  skip?: number;
  take?: number;
};
