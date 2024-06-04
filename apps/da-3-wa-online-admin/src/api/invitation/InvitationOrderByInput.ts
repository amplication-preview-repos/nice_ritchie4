import { SortOrder } from "../../util/SortOrder";

export type InvitationOrderByInput = {
  createdAt?: SortOrder;
  eventDate?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  template?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
