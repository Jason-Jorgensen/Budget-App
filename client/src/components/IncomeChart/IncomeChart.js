import React from 'react';
// import Plot from 'react-plotly.js';
import Chart from "react-google-charts";

export default class IncomeChart extends React.Component {
  render() {
    return (
      <Chart
      chartType="BarChart"
      loader={<div>Loading Chart</div>}
      data={[
          ['', '', '', '', ''],
          ['After Tax Income', 46000, 0, 0, 0],
          ['Expenses', 15000, 3000, 5000, 8000],
      ]}
      options={{
          title: 'Income vs. Expenses',
          chartArea: { width: '70%' },
          isStacked: true,
          hAxis: {
              minValue: 0,
          },
          vAxis: {
              title: 'Yearly $ Amount',
          },
      }}
      // For tests
      rootProps={{ 'data-testid': '3' }}
  />
    );
  }
}