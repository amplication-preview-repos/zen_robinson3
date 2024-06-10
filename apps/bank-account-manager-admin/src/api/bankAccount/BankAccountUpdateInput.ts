import { AnalyticsUpdateManyWithoutBankAccountsInput } from "./AnalyticsUpdateManyWithoutBankAccountsInput";
import { DashboardUpdateManyWithoutBankAccountsInput } from "./DashboardUpdateManyWithoutBankAccountsInput";
import { TransactionUpdateManyWithoutBankAccountsInput } from "./TransactionUpdateManyWithoutBankAccountsInput";

export type BankAccountUpdateInput = {
  accountNumber?: string | null;
  analyticsItems?: AnalyticsUpdateManyWithoutBankAccountsInput;
  balance?: number | null;
  bankName?: string | null;
  currency?: string | null;
  dashboards?: DashboardUpdateManyWithoutBankAccountsInput;
  transactions?: TransactionUpdateManyWithoutBankAccountsInput;
};
