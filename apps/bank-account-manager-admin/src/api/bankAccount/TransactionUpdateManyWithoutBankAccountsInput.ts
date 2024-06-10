import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type TransactionUpdateManyWithoutBankAccountsInput = {
  connect?: Array<TransactionWhereUniqueInput>;
  disconnect?: Array<TransactionWhereUniqueInput>;
  set?: Array<TransactionWhereUniqueInput>;
};
