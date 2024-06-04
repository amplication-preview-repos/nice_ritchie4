import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { GuestTitle } from "../guest/GuestTitle";
import { InvitationTitle } from "../invitation/InvitationTitle";

export const RsvpCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="guest.id" reference="Guest" label="Guest">
          <SelectInput optionText={GuestTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="invitation.id"
          reference="Invitation"
          label="Invitation"
        >
          <SelectInput optionText={InvitationTitle} />
        </ReferenceInput>
        <TextInput label="message" multiline source="message" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
