import { BankAccountWhereUniqueInput } from "../bankAccount/BankAccountWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type DashboardWhereInput = {
  bankAccount?: BankAccountWhereUniqueInput;
  id?: StringFilter;
  totalExpense?: FloatNullableFilter;
  totalIncome?: FloatNullableFilter;
};
