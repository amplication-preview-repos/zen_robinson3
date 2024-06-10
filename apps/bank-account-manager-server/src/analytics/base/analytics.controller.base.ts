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
import { AnalyticsService } from "../analytics.service";
import { AnalyticsCreateInput } from "./AnalyticsCreateInput";
import { Analytics } from "./Analytics";
import { AnalyticsFindManyArgs } from "./AnalyticsFindManyArgs";
import { AnalyticsWhereUniqueInput } from "./AnalyticsWhereUniqueInput";
import { AnalyticsUpdateInput } from "./AnalyticsUpdateInput";

export class AnalyticsControllerBase {
  constructor(protected readonly service: AnalyticsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Analytics })
  async createAnalytics(
    @common.Body() data: AnalyticsCreateInput
  ): Promise<Analytics> {
    return await this.service.createAnalytics({
      data: {
        ...data,

        bankAccount: data.bankAccount
          ? {
              connect: data.bankAccount,
            }
          : undefined,
      },
      select: {
        bankAccount: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        predictedExpense: true,
        predictedIncome: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Analytics] })
  @ApiNestedQuery(AnalyticsFindManyArgs)
  async analyticsItems(@common.Req() request: Request): Promise<Analytics[]> {
    const args = plainToClass(AnalyticsFindManyArgs, request.query);
    return this.service.analyticsItems({
      ...args,
      select: {
        bankAccount: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        predictedExpense: true,
        predictedIncome: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Analytics })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async analytics(
    @common.Param() params: AnalyticsWhereUniqueInput
  ): Promise<Analytics | null> {
    const result = await this.service.analytics({
      where: params,
      select: {
        bankAccount: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        predictedExpense: true,
        predictedIncome: true,
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
  @swagger.ApiOkResponse({ type: Analytics })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAnalytics(
    @common.Param() params: AnalyticsWhereUniqueInput,
    @common.Body() data: AnalyticsUpdateInput
  ): Promise<Analytics | null> {
    try {
      return await this.service.updateAnalytics({
        where: params,
        data: {
          ...data,

          bankAccount: data.bankAccount
            ? {
                connect: data.bankAccount,
              }
            : undefined,
        },
        select: {
          bankAccount: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          predictedExpense: true,
          predictedIncome: true,
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
  @swagger.ApiOkResponse({ type: Analytics })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAnalytics(
    @common.Param() params: AnalyticsWhereUniqueInput
  ): Promise<Analytics | null> {
    try {
      return await this.service.deleteAnalytics({
        where: params,
        select: {
          bankAccount: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          predictedExpense: true,
          predictedIncome: true,
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
