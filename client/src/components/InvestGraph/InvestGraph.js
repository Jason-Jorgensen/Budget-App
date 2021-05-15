import React from "react";
import Plot from "react-plotly.js";

export default class IncomeGraph extends React.Component {
    state = {
        investmentData: [],
        years: [],
        balance: 1000,
        personalCont: 200,
        employerCont: 100,
        intRate: 6
    }
    
    componentDidMount(){
        this.renderGraph();
    }

    renderGraph() {
        let value = [];
        let yr = [];
        let FV;
        let PV = this.state.balance;
        let n = 12;
        let rate = this.state.intRate/100;
        let int = rate/n;
        let year = 30;
        let cont = this.state.personalCont;
        let empCont = this.state.employerCont
        let monDeposit = cont + empCont;
    
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
        this.setState({ intRate: int })
    }

    handleBalanceChange = event => {
        let bal = parseInt(event.target.value);
        this.setState({ balance: bal})
    }
    
    handlePersonalContChange = event => {
        let cont = parseInt(event.target.value);
        this.setState({ personalCont: cont })
    }

    handleEmployerContChange = event => {
        let empCont = parseInt(event.target.value);
        this.setState({ employerCont: empCont })
    }

    render() {
        return (
            <>
     <div className="leading-loose">
        <form className="max-w-xl mx-auto p-10 bg-white rounded shadow-xl text-center">
            <p className="text-gray-800 font-medium">Investments</p>
    <div className="mt-2">
      <label className="block text-sm text-gray-00" htmlor="cus_name">Current Retirement Balance </label>
      <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name="retirementBalance" id="retirementBalance" value={this.state.balance} type="number" required="" placeholder="Total Retirement Account Balances" onChange={this.handleBalanceChange.bind(this)} />
    </div>
    <div className="mt-2 ">
      <label className="block text-sm text-gray-00" htmlor="cus_name">Your 401K Contribution %</label>
      <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"  name="personalCont" id="401k"  value={this.state.personalCont}type="number" required="" placeholder="Your Personal 401K Contribution" onChange={this.handlePersonalContChange.bind(this)} />
    </div>
    <div className="mt-2">
      <label className="block text-sm text-gray-00" htmlor="cus_name">Employer 401K Contribution %</label>
      <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name="employerCont" id="employer401k" value={this.state.employerCont} type="number" required="" placeholder="Your Employer's 401K Contribution" onChange={this.handleEmployerContChange.bind(this)}/>
    </div>
    <div className="mt-2">
      <label className="block text-sm text-gray-00" htmlor="cus_name">What Kind of Investor are You? </label>
      <select className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded investor" style={{fontSize:"15px"}}   name="investorType" onChange={this.handleIntChange.bind(this)}>
          <option value="6">Conservative 6% Annual Return</option>
          <option value="8">Moderate 8% Annual Return</option>
          <option value="10">Aggressive 10% Annual Return</option>
      </select>
    </div>


        </form>
        <div className="flex justify-center mt-2">
            <button onClick={this.renderGraph.bind(this)}  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r flex-wrap content-center">
                Submit
             </button>
        </div>
    </div>
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