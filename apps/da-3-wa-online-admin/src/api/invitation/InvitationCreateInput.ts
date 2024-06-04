import { GuestCreateNestedManyWithoutInvitationsInput } from "./GuestCreateNestedManyWithoutInvitationsInput";
import { RsvpCreateNestedManyWithoutInvitationsInput } from "./RsvpCreateNestedManyWithoutInvitationsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InvitationCreateInput = {
  eventDate?: Date | null;
  guests?: GuestCreateNestedManyWithoutInvitationsInput;
  location?: string | null;
  rsvps?: RsvpCreateNestedManyWithoutInvitationsInput;
  template?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
