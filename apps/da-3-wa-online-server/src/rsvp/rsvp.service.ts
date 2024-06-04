import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RsvpServiceBase } from "./base/rsvp.service.base";

@Injectable()
export class RsvpService extends RsvpServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
