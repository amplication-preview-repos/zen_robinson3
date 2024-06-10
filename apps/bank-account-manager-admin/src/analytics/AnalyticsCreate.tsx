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

export const AnalyticsCreate = (props: CreateProps): React.ReactElement => {
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
        <NumberInput label="predictedExpense" source="predictedExpense" />
        <NumberInput label="predictedIncome" source="predictedIncome" />
      </SimpleForm>
    </Create>
  );
};
