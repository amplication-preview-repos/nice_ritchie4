import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InvitationService } from "./invitation.service";
import { InvitationControllerBase } from "./base/invitation.controller.base";

@swagger.ApiTags("invitations")
@common.Controller("invitations")
export class InvitationController extends InvitationControllerBase {
  constructor(protected readonly service: InvitationService) {
    super(service);
  }
}
