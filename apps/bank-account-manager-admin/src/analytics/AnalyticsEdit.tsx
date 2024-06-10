import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { BankAccountTitle } from "../bankAccount/BankAccountTitle";

export const AnalyticsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
