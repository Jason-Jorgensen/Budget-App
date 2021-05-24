import React from 'react';
import Chart from "react-google-charts";

export default function IncomeChart({ incomeData, totalTax, investmentsData }) {
    const grossIncome = parseInt(incomeData?.["Gross Income"]);
    const otherIncome = parseInt(incomeData?.["Other Additional Income"]);
    const totalGrossIncome = grossIncome + otherIncome;
    const ficaTax = parseInt(totalTax?.fica?.amount);
    const stateTax = parseInt(totalTax?.state?.amount);
    const federalTax = parseInt(totalTax?.federal?.amount);
    const netIncome = grossIncome + otherIncome - stateTax - federalTax - ficaTax;
    
    return (
      <Chart
      chartType="BarChart"
      loader={<div>Loading Chart</div>}
      data={[
          ['', 'After Tax Income', 'Est FICA Tax', 'Est State Tax', 'Est Federal Tax'],
          ['', netIncome, ficaTax, stateTax, federalTax],
      ]}
      options={{
          title: `Total Gross Income $${totalGrossIncome}`,
          chartArea: { width: '100%' },
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