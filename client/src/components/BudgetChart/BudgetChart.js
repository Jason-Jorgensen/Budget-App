import React from 'react';
import Chart from "react-google-charts";

export default function BudgetChart(props) {
  // console.log(props)
  return (
    <Chart
    width={'100%'}
    height={'100%'}
    chartType="PieChart"
    loader={<div>Loading Chart</div>}
    data={[
        ['Expense', '% of Monthly Expenses'],
        ['Housing', props.categorizedExpenses[0]],
        ['Utilities', props.categorizedExpenses[1]],
        ['Car', props.categorizedExpenses[2]],
        ['Health Insurance', props.categorizedExpenses[3]],
        ['Food', props.categorizedExpenses[4]],
        ['Self Care', props.categorizedExpenses[5]],
        ['Social', props.categorizedExpenses[6]],
        ['Charity', props.categorizedExpenses[7]],
        ['Miscellaneous', props.categorizedExpenses[8]],
        ['Memberships', props.categorizedExpenses[9]],
    ]}
    options={{
        title: 'Monthly Expenses',
    }}
    rootProps={{ 'data-testid': '1' }}
/>
  )
}

