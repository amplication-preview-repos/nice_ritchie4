import { Module } from "@nestjs/common";
import { RsvpModuleBase } from "./base/rsvp.module.base";
import { RsvpService } from "./rsvp.service";
import { RsvpController } from "./rsvp.controller";
import { RsvpResolver } from "./rsvp.resolver";

@Module({
  imports: [RsvpModuleBase],
  controllers: [RsvpController],
  providers: [RsvpService, RsvpResolver],
  exports: [RsvpService],
})
export class RsvpModule {}
