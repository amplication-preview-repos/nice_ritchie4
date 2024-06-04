import { Invitation } from "../invitation/Invitation";
import { Rsvp } from "../rsvp/Rsvp";

export type Guest = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  invitation?: Invitation | null;
  lastName: string | null;
  rsvps?: Array<Rsvp>;
  updatedAt: Date;
};
