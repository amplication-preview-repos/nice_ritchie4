import { SortOrder } from "../../util/SortOrder";

export type RsvpOrderByInput = {
  createdAt?: SortOrder;
  guestId?: SortOrder;
  id?: SortOrder;
  invitationId?: SortOrder;
  message?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
