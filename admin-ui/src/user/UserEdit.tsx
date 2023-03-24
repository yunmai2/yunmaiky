import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  PasswordInput,
  SelectArrayInput,
  DateTimeInput,
  SelectInput,
  ReferenceArrayInput,
  DateInput,
} from "react-admin";

import { HubitusCheckupTitle } from "../hubitusCheckup/HubitusCheckupTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Username" source="username" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <DateTimeInput
          label="最近一次登录时间"
          source="lastLoginTime"
          disabled
        />
        <TextInput label="真实姓名" source="trueName" />
        <DateTimeInput label="创建时间" source="creatTime" disabled />
        <SelectInput
          source="gender"
          label="用户性别"
          choices={[
            { label: "unknown", value: "Unknown" },
            { label: "male", value: "Male" },
            { label: "female", value: "Female" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="hubitusCheckups"
          reference="HubitusCheckup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HubitusCheckupTitle} />
        </ReferenceArrayInput>
        <TextInput label="用户的唯一标识" source="openId" />
        <TextInput label="微信登录会话密钥" source="sessionKey" />
        <TextInput label="用户在微信开放平台的唯一标识符" source="unionId" />
        <TextInput label="手机号码" source="inviterId" />
        <DateInput label="出生年月" source="birthday" />
        <TextInput label="用户昵称" source="nickName" />
        <TextInput label="用户身份证号" source="userIdCard" />
        <TextInput label="用户头像" source="avatarUrl" />
        <TextInput label="国家" source="country" />
        <TextInput label="省份" source="province" />
        <TextInput label="城市" source="city" />
        <TextInput label="语言" source="language" />
        <TextInput label="第三方登录类型" source="oauthType" />
      </SimpleForm>
    </Edit>
  );
};
