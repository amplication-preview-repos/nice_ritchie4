import { Guest } from "../guest/Guest";
import { Invitation } from "../invitation/Invitation";

export type Rsvp = {
  createdAt: Date;
  guest?: Guest | null;
  id: string;
  invitation?: Invitation | null;
  message: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
