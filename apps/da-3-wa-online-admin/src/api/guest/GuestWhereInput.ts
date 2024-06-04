import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvitationWhereUniqueInput } from "../invitation/InvitationWhereUniqueInput";
import { RsvpListRelationFilter } from "../rsvp/RsvpListRelationFilter";

export type GuestWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  invitation?: InvitationWhereUniqueInput;
  lastName?: StringNullableFilter;
  rsvps?: RsvpListRelationFilter;
};
