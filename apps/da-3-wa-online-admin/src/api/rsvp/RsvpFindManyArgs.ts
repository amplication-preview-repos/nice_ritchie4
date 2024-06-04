import { RsvpWhereInput } from "./RsvpWhereInput";
import { RsvpOrderByInput } from "./RsvpOrderByInput";

export type RsvpFindManyArgs = {
  where?: RsvpWhereInput;
  orderBy?: Array<RsvpOrderByInput>;
  skip?: number;
  take?: number;
};
