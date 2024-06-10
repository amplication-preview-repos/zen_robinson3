import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { BankAccountTitle } from "../bankAccount/BankAccountTitle";

export const DashboardCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="bankAccount.id"
          reference="BankAccount"
          label="BankAccount"
        >
          <SelectInput optionText={BankAccountTitle} />
        </ReferenceInput>
        <NumberInput label="totalExpense" source="totalExpense" />
        <NumberInput label="totalIncome" source="totalIncome" />
      </SimpleForm>
    </Create>
  );
};
