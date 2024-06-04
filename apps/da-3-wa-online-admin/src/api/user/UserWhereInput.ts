import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvitationListRelationFilter } from "../invitation/InvitationListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  invitations?: InvitationListRelationFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
