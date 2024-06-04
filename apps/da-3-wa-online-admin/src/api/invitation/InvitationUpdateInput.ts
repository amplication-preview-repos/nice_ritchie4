import { GuestUpdateManyWithoutInvitationsInput } from "./GuestUpdateManyWithoutInvitationsInput";
import { RsvpUpdateManyWithoutInvitationsInput } from "./RsvpUpdateManyWithoutInvitationsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InvitationUpdateInput = {
  eventDate?: Date | null;
  guests?: GuestUpdateManyWithoutInvitationsInput;
  location?: string | null;
  rsvps?: RsvpUpdateManyWithoutInvitationsInput;
  template?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
