import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { AnalyticsTitle } from "../analytics/AnalyticsTitle";
import { DashboardTitle } from "../dashboard/DashboardTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";

export const BankAccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="accountNumber" source="accountNumber" />
        <ReferenceArrayInput
          source="analyticsItems"
          reference="Analytics"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AnalyticsTitle} />
        </ReferenceArrayInput>
        <NumberInput label="balance" source="balance" />
        <TextInput label="bankName" source="bankName" />
        <TextInput label="currency" source="currency" />
        <ReferenceArrayInput
          source="dashboards"
          reference="Dashboard"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DashboardTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="transactions"
          reference="Transaction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TransactionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
