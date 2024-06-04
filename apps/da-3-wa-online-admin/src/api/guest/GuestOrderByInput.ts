import { SortOrder } from "../../util/SortOrder";

export type GuestOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  invitationId?: SortOrder;
  lastName?: SortOrder;
  updatedAt?: SortOrder;
};
