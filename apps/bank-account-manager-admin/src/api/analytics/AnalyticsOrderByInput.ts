import { SortOrder } from "../../util/SortOrder";

export type AnalyticsOrderByInput = {
  bankAccountId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  predictedExpense?: SortOrder;
  predictedIncome?: SortOrder;
  updatedAt?: SortOrder;
};
