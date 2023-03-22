import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const HubitusCheckupShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="testTime" label="检测时间" />
        <TextField label="当前体质" source="currentHabitus" />
        <TextField label="测试结果" source="testResult" />
        <TextField label="计算结果" source="countResult" />
        <TextField label="检测建议" source="suggest" />
        <ReferenceField label="用户ID" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
