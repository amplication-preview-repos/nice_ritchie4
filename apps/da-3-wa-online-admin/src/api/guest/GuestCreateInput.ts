import { InvitationWhereUniqueInput } from "../invitation/InvitationWhereUniqueInput";
import { RsvpCreateNestedManyWithoutGuestsInput } from "./RsvpCreateNestedManyWithoutGuestsInput";

export type GuestCreateInput = {
  email?: string | null;
  firstName?: string | null;
  invitation?: InvitationWhereUniqueInput | null;
  lastName?: string | null;
  rsvps?: RsvpCreateNestedManyWithoutGuestsInput;
};
