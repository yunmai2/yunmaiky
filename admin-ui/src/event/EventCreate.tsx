import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const EventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="eventName" source="eventName" />
      </SimpleForm>
    </Create>
  );
};
