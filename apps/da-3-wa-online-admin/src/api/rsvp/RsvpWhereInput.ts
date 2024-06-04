import { GuestWhereUniqueInput } from "../guest/GuestWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { InvitationWhereUniqueInput } from "../invitation/InvitationWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RsvpWhereInput = {
  guest?: GuestWhereUniqueInput;
  id?: StringFilter;
  invitation?: InvitationWhereUniqueInput;
  message?: StringNullableFilter;
  status?: "Option1";
};
