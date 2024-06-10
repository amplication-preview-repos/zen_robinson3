import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BankAccountWhereUniqueInput } from "../bankAccount/BankAccountWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  bankAccount?: BankAccountWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  typeField?: "Option1";
};
