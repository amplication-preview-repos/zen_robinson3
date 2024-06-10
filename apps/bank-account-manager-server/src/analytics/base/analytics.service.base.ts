/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Analytics as PrismaAnalytics,
  BankAccount as PrismaBankAccount,
} from "@prisma/client";

export class AnalyticsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AnalyticsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.analytics.count(args);
  }

  async analyticsItems<T extends Prisma.AnalyticsFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AnalyticsFindManyArgs>
  ): Promise<PrismaAnalytics[]> {
    return this.prisma.analytics.findMany<Prisma.AnalyticsFindManyArgs>(args);
  }
  async analytics<T extends Prisma.AnalyticsFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AnalyticsFindUniqueArgs>
  ): Promise<PrismaAnalytics | null> {
    return this.prisma.analytics.findUnique(args);
  }
  async createAnalytics<T extends Prisma.AnalyticsCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AnalyticsCreateArgs>
  ): Promise<PrismaAnalytics> {
    return this.prisma.analytics.create<T>(args);
  }
  async updateAnalytics<T extends Prisma.AnalyticsUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AnalyticsUpdateArgs>
  ): Promise<PrismaAnalytics> {
    return this.prisma.analytics.update<T>(args);
  }
  async deleteAnalytics<T extends Prisma.AnalyticsDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AnalyticsDeleteArgs>
  ): Promise<PrismaAnalytics> {
    return this.prisma.analytics.delete(args);
  }

  async getBankAccount(parentId: string): Promise<PrismaBankAccount | null> {
    return this.prisma.analytics
      .findUnique({
        where: { id: parentId },
      })
      .bankAccount();
  }
}
