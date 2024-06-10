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

export const DashboardEdit = (props: EditProps): React.ReactElement => {
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
        <NumberInput label="totalExpense" source="totalExpense" />
        <NumberInput label="totalIncome" source="totalIncome" />
      </SimpleForm>
    </Edit>
  );
};
