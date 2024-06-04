import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RsvpService } from "./rsvp.service";
import { RsvpControllerBase } from "./base/rsvp.controller.base";

@swagger.ApiTags("rsvps")
@common.Controller("rsvps")
export class RsvpController extends RsvpControllerBase {
  constructor(protected readonly service: RsvpService) {
    super(service);
  }
}
