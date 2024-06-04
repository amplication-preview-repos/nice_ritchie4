import { Invitation as TInvitation } from "../api/invitation/Invitation";

export const INVITATION_TITLE_FIELD = "title";

export const InvitationTitle = (record: TInvitation): string => {
  return record.title?.toString() || String(record.id);
};
