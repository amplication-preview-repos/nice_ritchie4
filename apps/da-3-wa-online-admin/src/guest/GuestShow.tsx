import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { GUEST_TITLE_FIELD } from "./GuestTitle";
import { INVITATION_TITLE_FIELD } from "../invitation/InvitationTitle";

export const GuestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="firstName" source="firstName" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Invitation"
          source="invitation.id"
          reference="Invitation"
        >
          <TextField source={INVITATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="lastName" source="lastName" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Rsvp" target="guestId" label="RSVPS">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Guest" source="guest.id" reference="Guest">
              <TextField source={GUEST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Invitation"
              source="invitation.id"
              reference="Invitation"
            >
              <TextField source={INVITATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="message" source="message" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
