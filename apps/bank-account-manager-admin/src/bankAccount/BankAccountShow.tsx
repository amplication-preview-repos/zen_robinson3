import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BANKACCOUNT_TITLE_FIELD } from "./BankAccountTitle";

export const BankAccountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="accountNumber" source="accountNumber" />
        <TextField label="balance" source="balance" />
        <TextField label="bankName" source="bankName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="currency" source="currency" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Analytics"
          target="bankAccountId"
          label="AnalyticsItems"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="BankAccount"
              source="bankaccount.id"
              reference="BankAccount"
            >
              <TextField source={BANKACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="predictedExpense" source="predictedExpense" />
            <TextField label="predictedIncome" source="predictedIncome" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Dashboard"
          target="bankAccountId"
          label="Dashboards"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="BankAccount"
              source="bankaccount.id"
              reference="BankAccount"
            >
              <TextField source={BANKACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="totalExpense" source="totalExpense" />
            <TextField label="totalIncome" source="totalIncome" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Transaction"
          target="bankAccountId"
          label="Transactions"
        >
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <ReferenceField
              label="BankAccount"
              source="bankaccount.id"
              reference="BankAccount"
            >
              <TextField source={BANKACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="ID" source="id" />
            <TextField label="type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
