import React from "react";
import Chart from "react-google-charts";

export default function InvestGraph(props) {

  return (
    <>
      {props.calcInvestmentsData
        ? <Chart
          width={'100%'}
          height={'100%'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={props.calcInvestmentsData}
          options={{
            chartArea: { width: '65%' },
            hAxis: {
              title: 'Year',
            },
            vAxis: {
              title: 'Est 401K Balance',
            },
            series: {
              1: { curveType: 'function' },
            },
          }}
          rootProps={{ 'data-testid': '2' }}
        />
        : "No Investment Data"
      }
    </>

  );
}