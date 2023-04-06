import { TestDate as TTestDate } from "../api/testDate/TestDate";

export const TESTDATE_TITLE_FIELD = "id";

export const TestDateTitle = (record: TTestDate): string => {
  return record.id || String(record.id);
};
