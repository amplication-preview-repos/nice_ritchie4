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
import { GuestService } from "../guest.service";
import { GuestCreateInput } from "./GuestCreateInput";
import { Guest } from "./Guest";
import { GuestFindManyArgs } from "./GuestFindManyArgs";
import { GuestWhereUniqueInput } from "./GuestWhereUniqueInput";
import { GuestUpdateInput } from "./GuestUpdateInput";
import { RsvpFindManyArgs } from "../../rsvp/base/RsvpFindManyArgs";
import { Rsvp } from "../../rsvp/base/Rsvp";
import { RsvpWhereUniqueInput } from "../../rsvp/base/RsvpWhereUniqueInput";

export class GuestControllerBase {
  constructor(protected readonly service: GuestService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Guest })
  async createGuest(@common.Body() data: GuestCreateInput): Promise<Guest> {
    return await this.service.createGuest({
      data: {
        ...data,

        invitation: data.invitation
          ? {
              connect: data.invitation,
            }
          : undefined,
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Guest] })
  @ApiNestedQuery(GuestFindManyArgs)
  async guests(@common.Req() request: Request): Promise<Guest[]> {
    const args = plainToClass(GuestFindManyArgs, request.query);
    return this.service.guests({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Guest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async guest(
    @common.Param() params: GuestWhereUniqueInput
  ): Promise<Guest | null> {
    const result = await this.service.guest({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Guest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateGuest(
    @common.Param() params: GuestWhereUniqueInput,
    @common.Body() data: GuestUpdateInput
  ): Promise<Guest | null> {
    try {
      return await this.service.updateGuest({
        where: params,
        data: {
          ...data,

          invitation: data.invitation
            ? {
                connect: data.invitation,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Guest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteGuest(
    @common.Param() params: GuestWhereUniqueInput
  ): Promise<Guest | null> {
    try {
      return await this.service.deleteGuest({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/rsvps")
  @ApiNestedQuery(RsvpFindManyArgs)
  async findRsvps(
    @common.Req() request: Request,
    @common.Param() params: GuestWhereUniqueInput
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
    @common.Param() params: GuestWhereUniqueInput,
    @common.Body() body: RsvpWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      rsvps: {
        connect: body,
      },
    };
    await this.service.updateGuest({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/rsvps")
  async updateRsvps(
    @common.Param() params: GuestWhereUniqueInput,
    @common.Body() body: RsvpWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      rsvps: {
        set: body,
      },
    };
    await this.service.updateGuest({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/rsvps")
  async disconnectRsvps(
    @common.Param() params: GuestWhereUniqueInput,
    @common.Body() body: RsvpWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      rsvps: {
        disconnect: body,
      },
    };
    await this.service.updateGuest({
      where: params,
      data,
      select: { id: true },
    });
  }
}