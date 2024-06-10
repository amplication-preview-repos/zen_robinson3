import { BankAccountWhereUniqueInput } from "../bankAccount/BankAccountWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: number | null;
  bankAccount?: BankAccountWhereUniqueInput | null;
  date?: Date | null;
  typeField?: "Option1" | null;
};
