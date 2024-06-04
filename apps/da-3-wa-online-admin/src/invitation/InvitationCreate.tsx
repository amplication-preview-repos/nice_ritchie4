import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { GuestTitle } from "../guest/GuestTitle";
import { RsvpTitle } from "../rsvp/RsvpTitle";
import { UserTitle } from "../user/UserTitle";

export const InvitationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="eventDate" source="eventDate" />
        <ReferenceArrayInput
          source="guests"
          reference="Guest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GuestTitle} />
        </ReferenceArrayInput>
        <TextInput label="location" source="location" />
        <ReferenceArrayInput
          source="rsvps"
          reference="Rsvp"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RsvpTitle} />
        </ReferenceArrayInput>
        <TextInput label="template" multiline source="template" />
        <TextInput label="title" source="title" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
