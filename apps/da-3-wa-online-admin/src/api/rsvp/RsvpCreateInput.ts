import { GuestWhereUniqueInput } from "../guest/GuestWhereUniqueInput";
import { InvitationWhereUniqueInput } from "../invitation/InvitationWhereUniqueInput";

export type RsvpCreateInput = {
  guest?: GuestWhereUniqueInput | null;
  invitation?: InvitationWhereUniqueInput | null;
  message?: string | null;
  status?: "Option1" | null;
};
