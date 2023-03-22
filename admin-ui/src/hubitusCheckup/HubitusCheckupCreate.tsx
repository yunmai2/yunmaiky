import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const HubitusCheckupCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="检测时间" source="testTime" disabled />
        <TextInput label="当前体质" source="currentHabitus" />
        <TextInput label="测试结果" source="testResult" />
        <TextInput label="计算结果" source="countResult" />
        <TextInput label="检测建议" source="suggest" />
        <ReferenceInput source="user.id" reference="User" label="用户ID">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
