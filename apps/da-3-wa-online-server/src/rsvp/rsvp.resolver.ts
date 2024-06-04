import * as graphql from "@nestjs/graphql";
import { RsvpResolverBase } from "./base/rsvp.resolver.base";
import { Rsvp } from "./base/Rsvp";
import { RsvpService } from "./rsvp.service";

@graphql.Resolver(() => Rsvp)
export class RsvpResolver extends RsvpResolverBase {
  constructor(protected readonly service: RsvpService) {
    super(service);
  }
}
