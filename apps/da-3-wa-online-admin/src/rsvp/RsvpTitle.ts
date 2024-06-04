import { Rsvp as TRsvp } from "../api/rsvp/Rsvp";

export const RSVP_TITLE_FIELD = "id";

export const RsvpTitle = (record: TRsvp): string => {
  return record.id?.toString() || String(record.id);
};
