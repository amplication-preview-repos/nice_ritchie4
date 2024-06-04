import { Guest } from "../guest/Guest";
import { Rsvp } from "../rsvp/Rsvp";
import { User } from "../user/User";

export type Invitation = {
  createdAt: Date;
  eventDate: Date | null;
  guests?: Array<Guest>;
  id: string;
  location: string | null;
  rsvps?: Array<Rsvp>;
  template: string | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
