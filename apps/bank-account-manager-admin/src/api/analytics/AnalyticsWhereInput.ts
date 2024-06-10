import { BankAccountWhereUniqueInput } from "../bankAccount/BankAccountWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type AnalyticsWhereInput = {
  bankAccount?: BankAccountWhereUniqueInput;
  id?: StringFilter;
  predictedExpense?: FloatNullableFilter;
  predictedIncome?: FloatNullableFilter;
};
