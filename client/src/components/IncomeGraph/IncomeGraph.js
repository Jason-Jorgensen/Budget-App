import React from "react";
import Plot from "react-plotly.js";

export default class IncomeGraph extends React.Component {
    state = {
        investmentData: [],
        years: [],
        intRate: 4
    }

    componentDidMount(){
        let value = [];
        let yr = [];
        let FV;
        let PV = 1000;
        let n = 12;
        let rate = this.state.intRate/100;
        let int = rate/n;
        let year = 30;
        let monDeposit = 100;
    
        for(let i = 0; i <= year; i++) {
            FV = (PV * (int + 1)**(n*i) + monDeposit * ((1 + int)**(n*i) - 1)/int * (1 + int)).toFixed(2);
            value.push(FV);
            yr.push(i);
        }
        console.log(rate);
        console.log(int)
        console.log(value);
        this.setState({ investmentData: value,
        years: yr });
    }

    handleIntChange = event => {
        let int = parseInt(event.target.value);
        this.setState(
            { intRate: int },
            this.componentDidMount
            )
    }
    

    render() {
        return (
            <>
            <div>Select Interest Rate Target</div>
            <select id="interest" onChange={e => this.handleIntChange(e)}>
                  <option value="4">4%</option>
                  <option value="6">6%</option>
                  <option value="8">8%</option>
                  <option value="10">10%</option>
               </select>
            <Plot
                data={[
                    {
                        x: this.state.year,
                        y: this.state.investmentData,
                        type: "scatter",
                        mode: "lines+markers",
                        marker: { color: "red" },
                    }
                ]}
                layout={{ width: 500, height: 400, title: "Investment Graph" }}
            />
            </>
        );
    }
}