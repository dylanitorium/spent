import React from 'react';
import ItemTable from 'view/components/pure/ItemTable'
import conditionalComponent from 'view/utils/HOC/conditionalComponent';
import ExpenseGroup from 'view/components/connected/ExpenseGroup';
import Expense from 'view/components/connected/Expense';

const Expenses = props => (
  <ItemTable
    {...props}
    groupsAs={ExpenseGroup}
    itemsAs={Expense}
    title="Expenses Forecast"
    name="expense"
    namespace="expenses"
  />
);

export default conditionalComponent(Expenses);
