import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="creatTime" label="创建时间" />
        <DateField source="lastLoginTime" label="最近一次登录时间" />
        <TextField label="真实姓名" source="trueName" />
        <TextField label="Username" source="username" />
        <TextField label="Roles" source="roles" />
        <TextField label="第三方登录类型" source="oauthType" />
        <TextField label="用户的唯一标识" source="openId" />
        <TextField label="微信登录会话密钥" source="sessionKey" />
        <TextField label="用户在微信开放平台的唯一标识符" source="unionId" />
        <TextField label="手机号码" source="inviterId" />
        <TextField label="用户昵称" source="nickName" />
        <TextField label="用户头像" source="avatarUrl" />
        <TextField label="用户性别" source="gender" />
        <TextField label="出生年月" source="birthday" />
        <TextField label="用户身份证号" source="userIdCard" />
        <TextField label="国家" source="country" />
        <TextField label="省份" source="province" />
        <TextField label="城市" source="city" />
        <TextField label="语言" source="language" />
        <ReferenceManyField
          reference="HubitusCheckup"
          target="UserId"
          label="HubitusCheckups"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="testTime" label="检测时间" />
            <TextField label="当前体质" source="currentHabitus" />
            <TextField label="测试结果" source="testResult" />
            <TextField label="计算结果" source="countResult" />
            <TextField label="检测建议" source="suggest" />
            <ReferenceField label="用户ID" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
