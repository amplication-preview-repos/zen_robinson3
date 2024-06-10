import { BankAccountWhereUniqueInput } from "../bankAccount/BankAccountWhereUniqueInput";

export type AnalyticsUpdateInput = {
  bankAccount?: BankAccountWhereUniqueInput | null;
  predictedExpense?: number | null;
  predictedIncome?: number | null;
};
