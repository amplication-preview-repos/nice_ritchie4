import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { InvitationTitle } from "../invitation/InvitationTitle";
import { RsvpTitle } from "../rsvp/RsvpTitle";

export const GuestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="firstName" source="firstName" />
        <ReferenceInput
          source="invitation.id"
          reference="Invitation"
          label="Invitation"
        >
          <SelectInput optionText={InvitationTitle} />
        </ReferenceInput>
        <TextInput label="lastName" source="lastName" />
        <ReferenceArrayInput
          source="rsvps"
          reference="Rsvp"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RsvpTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
