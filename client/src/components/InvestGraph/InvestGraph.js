import React, {useState, useEffect} from "react";
import Chart from "react-google-charts";

export default function InvestGraph(props) {

//   if (props.calcInvestmentsData == undefined){
//     console.log(data);
//         let data = JSON.parse(props.calcInvestmentsData);
//   }

//   useEffect(() => {
   
// }, [])
  console.log(props);
  
  return (
    <>
      <Chart
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={[]}
        options={{
          hAxis: {
            title: 'Time',
          },
          vAxis: {
            title: 'Popularity',
          },
          series: {
            1: { curveType: 'function' },
          },
        }}
        rootProps={{ 'data-testid': '2' }}
        />
    </>

);
}
// const [retirementData, setRetirementData] = useState([]);

// useEffect(() => {
//   let data = [['x', 'balance']];
//   let FV;
//   let PV = 1000;
//   let n = 12;
//   let rate = 6 / 100;
//   let int = rate / n;
//   let year = 30;
//   let cont = 200;
//   let empCont = 200;
//   let monDeposit = cont + empCont;

//   for (let i = 0; i <= year; i++) {
//     FV = (PV * (int + 1) ** (n * i) + monDeposit * ((1 + int) ** (n * i) - 1) / int * (1 + int)).toFixed(2);
//     data.push([i, FV]);
//   }
//   // console.log(data)
//   setRetirementData(data)
//   // console.log("Retirement Data", retirementData)

// }, [])

// let data = retirementData;
// console.log("InvestGraph", data)