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
import { DeleteBankAccountArgs } from "./DeleteBankAccountArgs";
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
}
