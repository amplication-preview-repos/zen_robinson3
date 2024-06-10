import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BANKACCOUNT_TITLE_FIELD } from "../bankAccount/BankAccountTitle";

export const DashboardList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Dashboards"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
