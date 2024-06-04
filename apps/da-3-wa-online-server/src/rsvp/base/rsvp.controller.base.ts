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
import { RsvpService } from "../rsvp.service";
import { RsvpCreateInput } from "./RsvpCreateInput";
import { Rsvp } from "./Rsvp";
import { RsvpFindManyArgs } from "./RsvpFindManyArgs";
import { RsvpWhereUniqueInput } from "./RsvpWhereUniqueInput";
import { RsvpUpdateInput } from "./RsvpUpdateInput";

export class RsvpControllerBase {
  constructor(protected readonly service: RsvpService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Rsvp })
  async createRsvp(@common.Body() data: RsvpCreateInput): Promise<Rsvp> {
    return await this.service.createRsvp({
      data: {
        ...data,

        guest: data.guest
          ? {
              connect: data.guest,
            }
          : undefined,

        invitation: data.invitation
          ? {
              connect: data.invitation,
            }
          : undefined,
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Rsvp] })
  @ApiNestedQuery(RsvpFindManyArgs)
  async rsvps(@common.Req() request: Request): Promise<Rsvp[]> {
    const args = plainToClass(RsvpFindManyArgs, request.query);
    return this.service.rsvps({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Rsvp })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async rsvp(
    @common.Param() params: RsvpWhereUniqueInput
  ): Promise<Rsvp | null> {
    const result = await this.service.rsvp({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Rsvp })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateRsvp(
    @common.Param() params: RsvpWhereUniqueInput,
    @common.Body() data: RsvpUpdateInput
  ): Promise<Rsvp | null> {
    try {
      return await this.service.updateRsvp({
        where: params,
        data: {
          ...data,

          guest: data.guest
            ? {
                connect: data.guest,
              }
            : undefined,

          invitation: data.invitation
            ? {
                connect: data.invitation,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Rsvp })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteRsvp(
    @common.Param() params: RsvpWhereUniqueInput
  ): Promise<Rsvp | null> {
    try {
      return await this.service.deleteRsvp({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}