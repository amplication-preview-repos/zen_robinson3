import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { BANKACCOUNT_TITLE_FIELD } from "../bankAccount/BankAccountTitle";

export const DashboardShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
