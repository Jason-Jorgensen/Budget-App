import React from 'react';
import Chart from "react-google-charts";

export default function BudgetChart({ categorizedExpenses }) {

  return (
    <Chart
    width={'100%'}
    height={'100%'}
    chartType="PieChart"
    loader={<div>Loading Chart</div>}
    data={[
        ['Expense', '% of Monthly Expenses'],
        ['Housing', categorizedExpenses[0]],
        ['Utilities', categorizedExpenses[1]],
        ['Car', categorizedExpenses[2]],
        ['Health Insurance', categorizedExpenses[3]],
        ['Food', categorizedExpenses[4]],
        ['Self Care', categorizedExpenses[5]],
        ['Social', categorizedExpenses[6]],
        ['Charity', categorizedExpenses[7]],
        ['Miscellaneous', categorizedExpenses[8]],
        ['Memberships', categorizedExpenses[9]],
    ]}
    options={{
        title: 'Monthly Expenses',
    }}
    rootProps={{ 'data-testid': '1' }}
/>
  )
}

