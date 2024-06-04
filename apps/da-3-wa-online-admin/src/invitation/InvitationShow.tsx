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

import { INVITATION_TITLE_FIELD } from "./InvitationTitle";
import { GUEST_TITLE_FIELD } from "../guest/GuestTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const InvitationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="eventDate" source="eventDate" />
        <TextField label="ID" source="id" />
        <TextField label="location" source="location" />
        <TextField label="template" source="template" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Guest"
          target="invitationId"
          label="Guests"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Rsvp"
          target="invitationId"
          label="RSVPS"
        >
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
