import { Invitation } from "../invitation/Invitation";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  invitations?: Array<Invitation>;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
