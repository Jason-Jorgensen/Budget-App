import React from 'react';
import Chart from "react-google-charts";

export default function BudgetChart() {
  return (
    <Chart
    width={'100%'}
    height={'100%'}
    chartType="PieChart"
    loader={<div>Loading Chart</div>}
    data={[
        ['Expense', '% of Expenses'],
        ['Home', 11],
        ['Health', 2],
        ['Entertainment', 2],
        ['Food', 2],
        ['Car', 7],
    ]}
    options={{
        title: 'Expenses',
    }}
    rootProps={{ 'data-testid': '1' }}
/>
  )
}

