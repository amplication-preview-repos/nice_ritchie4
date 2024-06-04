import { InvitationWhereUniqueInput } from "../invitation/InvitationWhereUniqueInput";
import { RsvpUpdateManyWithoutGuestsInput } from "./RsvpUpdateManyWithoutGuestsInput";

export type GuestUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  invitation?: InvitationWhereUniqueInput | null;
  lastName?: string | null;
  rsvps?: RsvpUpdateManyWithoutGuestsInput;
};
