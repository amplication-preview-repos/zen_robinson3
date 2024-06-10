import { SortOrder } from "../../util/SortOrder";

export type BankAccountOrderByInput = {
  accountNumber?: SortOrder;
  balance?: SortOrder;
  bankName?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
