import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { GuestListRelationFilter } from "../guest/GuestListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RsvpListRelationFilter } from "../rsvp/RsvpListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InvitationWhereInput = {
  eventDate?: DateTimeNullableFilter;
  guests?: GuestListRelationFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  rsvps?: RsvpListRelationFilter;
  template?: StringNullableFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
