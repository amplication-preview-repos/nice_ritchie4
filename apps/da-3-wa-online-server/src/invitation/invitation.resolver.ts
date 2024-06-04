import * as graphql from "@nestjs/graphql";
import { InvitationResolverBase } from "./base/invitation.resolver.base";
import { Invitation } from "./base/Invitation";
import { InvitationService } from "./invitation.service";

@graphql.Resolver(() => Invitation)
export class InvitationResolver extends InvitationResolverBase {
  constructor(protected readonly service: InvitationService) {
    super(service);
  }
}
