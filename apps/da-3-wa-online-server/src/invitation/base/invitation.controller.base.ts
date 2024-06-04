/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { InvitationService } from "../invitation.service";
import { InvitationCreateInput } from "./InvitationCreateInput";
import { Invitation } from "./Invitation";
import { InvitationFindManyArgs } from "./InvitationFindManyArgs";
import { InvitationWhereUniqueInput } from "./InvitationWhereUniqueInput";
import { InvitationUpdateInput } from "./InvitationUpdateInput";
import { GuestFindManyArgs } from "../../guest/base/GuestFindManyArgs";
import { Guest } from "../../guest/base/Guest";
import { GuestWhereUniqueInput } from "../../guest/base/GuestWhereUniqueInput";
import { RsvpFindManyArgs } from "../../rsvp/base/RsvpFindManyArgs";
import { Rsvp } from "../../rsvp/base/Rsvp";
import { RsvpWhereUniqueInput } from "../../rsvp/base/RsvpWhereUniqueInput";

export class InvitationControllerBase {
  constructor(protected readonly service: InvitationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Invitation })
  async createInvitation(
    @common.Body() data: InvitationCreateInput
  ): Promise<Invitation> {
    return await this.service.createInvitation({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        eventDate: true,
        id: true,
        location: true,
        template: true,
        title: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Invitation] })
  @ApiNestedQuery(InvitationFindManyArgs)
  async invitations(@common.Req() request: Request): Promise<Invitation[]> {
    const args = plainToClass(InvitationFindManyArgs, request.query);
    return this.service.invitations({
      ...args,
      select: {
        createdAt: true,
        eventDate: true,
        id: true,
        location: true,
        template: true,
        title: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Invitation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async invitation(
    @common.Param() params: InvitationWhereUniqueInput
  ): Promise<Invitation | null> {
    const result = await this.service.invitation({
      where: params,
      select: {
        createdAt: true,
        eventDate: true,
        id: true,
        location: true,
        template: true,
        title: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Invitation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateInvitation(
    @common.Param() params: InvitationWhereUniqueInput,
    @common.Body() data: InvitationUpdateInput
  ): Promise<Invitation | null> {
    try {
      return await this.service.updateInvitation({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          eventDate: true,
          id: true,
          location: true,
          template: true,
          title: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Invitation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteInvitation(
    @common.Param() params: InvitationWhereUniqueInput
  ): Promise<Invitation | null> {
    try {
      return await this.service.deleteInvitation({
        where: params,
        select: {
          createdAt: true,
          eventDate: true,
          id: true,
          location: true,
          template: true,
          title: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/guests")
  @ApiNestedQuery(GuestFindManyArgs)
  async findGuests(
    @common.Req() request: Request,
    @common.Param() params: InvitationWhereUniqueInput
  ): Promise<Guest[]> {
    const query = plainToClass(GuestFindManyArgs, request.query);
    const results = await this.service.findGuests(params.id, {
      ...query,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,

        invitation: {
          select: {
            id: true,
          },
        },

        lastName: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/guests")
  async connectGuests(
    @common.Param() params: InvitationWhereUniqueInput,
    @common.Body() body: GuestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      guests: {
        connect: body,
      },
    };
    await this.service.updateInvitation({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/guests")
  async updateGuests(
    @common.Param() params: InvitationWhereUniqueInput,
    @common.Body() body: GuestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      guests: {
        set: body,
      },
    };
    await this.service.updateInvitation({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/guests")
  async disconnectGuests(
    @common.Param() params: InvitationWhereUniqueInput,
    @common.Body() body: GuestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      guests: {
        disconnect: body,
      },
    };
    await this.service.updateInvitation({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/rsvps")
  @ApiNestedQuery(RsvpFindManyArgs)
  async findRsvps(
    @common.Req() request: Request,
    @common.Param() params: InvitationWhereUniqueInput
  ): Promise<Rsvp[]> {
    const query = plainToClass(RsvpFindManyArgs, request.query);
    const results = await this.service.findRsvps(params.id, {
      ...query,
      select: {
        createdAt: true,

        guest: {
          select: {
            id: true,
          },
        },

        id: true,

        invitation: {
          select: {
            id: true,
          },
        },

        message: true,
        status: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/rsvps")
  async connectRsvps(
    @common.Param() params: InvitationWhereUniqueInput,
    @common.Body() body: RsvpWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      rsvps: {
        connect: body,
      },
    };
    await this.service.updateInvitation({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/rsvps")
  async updateRsvps(
    @common.Param() params: InvitationWhereUniqueInput,
    @common.Body() body: RsvpWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      rsvps: {
        set: body,
      },
    };
    await this.service.updateInvitation({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/rsvps")
  async disconnectRsvps(
    @common.Param() params: InvitationWhereUniqueInput,
    @common.Body() body: RsvpWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      rsvps: {
        disconnect: body,
      },
    };
    await this.service.updateInvitation({
      where: params,
      data,
      select: { id: true },
    });
  }
}
