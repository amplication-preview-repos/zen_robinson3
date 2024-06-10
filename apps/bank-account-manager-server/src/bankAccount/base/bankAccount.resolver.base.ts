/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { BankAccount } from "./BankAccount";
import { BankAccountCountArgs } from "./BankAccountCountArgs";
import { BankAccountFindManyArgs } from "./BankAccountFindManyArgs";
import { BankAccountFindUniqueArgs } from "./BankAccountFindUniqueArgs";
import { CreateBankAccountArgs } from "./CreateBankAccountArgs";
import { UpdateBankAccountArgs } from "./UpdateBankAccountArgs";
import { DeleteBankAccountArgs } from "./DeleteBankAccountArgs";
import { AnalyticsFindManyArgs } from "../../analytics/base/AnalyticsFindManyArgs";
import { Analytics } from "../../analytics/base/Analytics";
import { DashboardFindManyArgs } from "../../dashboard/base/DashboardFindManyArgs";
import { Dashboard } from "../../dashboard/base/Dashboard";
import { TransactionFindManyArgs } from "../../transaction/base/TransactionFindManyArgs";
import { Transaction } from "../../transaction/base/Transaction";
import { BankAccountService } from "../bankAccount.service";
@graphql.Resolver(() => BankAccount)
export class BankAccountResolverBase {
  constructor(protected readonly service: BankAccountService) {}

  async _bankAccountsMeta(
    @graphql.Args() args: BankAccountCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [BankAccount])
  async bankAccounts(
    @graphql.Args() args: BankAccountFindManyArgs
  ): Promise<BankAccount[]> {
    return this.service.bankAccounts(args);
  }

  @graphql.Query(() => BankAccount, { nullable: true })
  async bankAccount(
    @graphql.Args() args: BankAccountFindUniqueArgs
  ): Promise<BankAccount | null> {
    const result = await this.service.bankAccount(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => BankAccount)
  async createBankAccount(
    @graphql.Args() args: CreateBankAccountArgs
  ): Promise<BankAccount> {
    return await this.service.createBankAccount({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => BankAccount)
  async updateBankAccount(
    @graphql.Args() args: UpdateBankAccountArgs
  ): Promise<BankAccount | null> {
    try {
      return await this.service.updateBankAccount({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => BankAccount)
  async deleteBankAccount(
    @graphql.Args() args: DeleteBankAccountArgs
  ): Promise<BankAccount | null> {
    try {
      return await this.service.deleteBankAccount(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Analytics], { name: "analyticsItems" })
  async findAnalyticsItems(
    @graphql.Parent() parent: BankAccount,
    @graphql.Args() args: AnalyticsFindManyArgs
  ): Promise<Analytics[]> {
    const results = await this.service.findAnalyticsItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Dashboard], { name: "dashboards" })
  async findDashboards(
    @graphql.Parent() parent: BankAccount,
    @graphql.Args() args: DashboardFindManyArgs
  ): Promise<Dashboard[]> {
    const results = await this.service.findDashboards(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Transaction], { name: "transactions" })
  async findTransactions(
    @graphql.Parent() parent: BankAccount,
    @graphql.Args() args: TransactionFindManyArgs
  ): Promise<Transaction[]> {
    const results = await this.service.findTransactions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
