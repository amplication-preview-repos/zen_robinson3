import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AnalyticsListRelationFilter } from "../analytics/AnalyticsListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DashboardListRelationFilter } from "../dashboard/DashboardListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type BankAccountWhereInput = {
  accountNumber?: StringNullableFilter;
  analyticsItems?: AnalyticsListRelationFilter;
  balance?: FloatNullableFilter;
  bankName?: StringNullableFilter;
  currency?: StringNullableFilter;
  dashboards?: DashboardListRelationFilter;
  id?: StringFilter;
  transactions?: TransactionListRelationFilter;
};
