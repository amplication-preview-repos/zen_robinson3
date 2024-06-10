/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  ValidateNested,
  IsNumber,
} from "class-validator";
import { AnalyticsCreateNestedManyWithoutBankAccountsInput } from "./AnalyticsCreateNestedManyWithoutBankAccountsInput";
import { Type } from "class-transformer";
import { DashboardCreateNestedManyWithoutBankAccountsInput } from "./DashboardCreateNestedManyWithoutBankAccountsInput";
import { TransactionCreateNestedManyWithoutBankAccountsInput } from "./TransactionCreateNestedManyWithoutBankAccountsInput";

@InputType()
class BankAccountCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  accountNumber?: string | null;

  @ApiProperty({
    required: false,
    type: () => AnalyticsCreateNestedManyWithoutBankAccountsInput,
  })
  @ValidateNested()
  @Type(() => AnalyticsCreateNestedManyWithoutBankAccountsInput)
  @IsOptional()
  @Field(() => AnalyticsCreateNestedManyWithoutBankAccountsInput, {
    nullable: true,
  })
  analyticsItems?: AnalyticsCreateNestedManyWithoutBankAccountsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  balance?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  bankName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  currency?: string | null;

  @ApiProperty({
    required: false,
    type: () => DashboardCreateNestedManyWithoutBankAccountsInput,
  })
  @ValidateNested()
  @Type(() => DashboardCreateNestedManyWithoutBankAccountsInput)
  @IsOptional()
  @Field(() => DashboardCreateNestedManyWithoutBankAccountsInput, {
    nullable: true,
  })
  dashboards?: DashboardCreateNestedManyWithoutBankAccountsInput;

  @ApiProperty({
    required: false,
    type: () => TransactionCreateNestedManyWithoutBankAccountsInput,
  })
  @ValidateNested()
  @Type(() => TransactionCreateNestedManyWithoutBankAccountsInput)
  @IsOptional()
  @Field(() => TransactionCreateNestedManyWithoutBankAccountsInput, {
    nullable: true,
  })
  transactions?: TransactionCreateNestedManyWithoutBankAccountsInput;
}

export { BankAccountCreateInput as BankAccountCreateInput };
