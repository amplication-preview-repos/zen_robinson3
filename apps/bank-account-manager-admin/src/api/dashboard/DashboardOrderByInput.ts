import { SortOrder } from "../../util/SortOrder";

export type DashboardOrderByInput = {
  bankAccountId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  totalExpense?: SortOrder;
  totalIncome?: SortOrder;
  updatedAt?: SortOrder;
};
