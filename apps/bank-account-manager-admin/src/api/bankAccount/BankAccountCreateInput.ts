import { AnalyticsCreateNestedManyWithoutBankAccountsInput } from "./AnalyticsCreateNestedManyWithoutBankAccountsInput";
import { DashboardCreateNestedManyWithoutBankAccountsInput } from "./DashboardCreateNestedManyWithoutBankAccountsInput";
import { TransactionCreateNestedManyWithoutBankAccountsInput } from "./TransactionCreateNestedManyWithoutBankAccountsInput";

export type BankAccountCreateInput = {
  accountNumber?: string | null;
  analyticsItems?: AnalyticsCreateNestedManyWithoutBankAccountsInput;
  balance?: number | null;
  bankName?: string | null;
  currency?: string | null;
  dashboards?: DashboardCreateNestedManyWithoutBankAccountsInput;
  transactions?: TransactionCreateNestedManyWithoutBankAccountsInput;
};
