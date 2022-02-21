import React from "react";
import "./style.css" 
import TokenBackg from "../../imgs/tokenomics.png" 
import TheBarChart from "../helper/bar-chart";
import PieChat from "../helper/pie-chart"; 
import Button from "../helper/button"
import ScrollAnimation from 'react-animate-on-scroll'; 
import { PieChart } from 'react-minimal-pie-chart'; 
 




function Tokenomics() {

  const dataMock = [
    { title: 'Token Presale', value: 31.48, color: '#3260ed' },
    { title: 'Staking & Farming', value: 20, color: '#8ca8ff' },
    { title: 'Listing', value: 18.41, color: '#7af0d1' },
    { title: 'Liquidity', value: 17.11, color: '#3290ed' },
    { title: 'Dev Wallet', value: 5, color: '#7c7af0' },
    { title: 'Gaming Tournament', value: 5, color: '#32e4ed' }, 
    { title: 'Airdrop', value: 3, color: '#32bbed' }, 
  ];
   
  // For bar chart
  const colors = {
    "presale": "#3260ED",
    "liquidity": "#3290ed",
    "airdrop": "#32bbed",
    "gaming": "#32e4ed",
    "staking": "#8CA8FF",
    "dev": "#7c7af0",
    "listing": "#7af0d1"
  };  
  const data = {
    labels:["Dec 21", "Feb 22", "Apr 22", "May 22", "June 22", "Aug 22"],
    datasets: [{
      barThickness: 50,
      barPercentage: 0.5,
      label: 'Presale',
      data: [24000000, 24000000, 24000000, 24000000, 24000000, 24000000],
      backgroundColor: colors.presale // hoverBackgroundColor: "#3260ED",

    }, {
      barThickness: 50,
      barPercentage: 0.5,
      label: 'Liquidity',
      data: [12936000, 12936000, 12936000, 12936000, 12936000, 12936000],
      backgroundColor: colors.liquidity // hoverBackgroundColor: "#d65ad6",

    }, {
      barThickness: 50,
      barPercentage: 0.5,
      label: 'Airdrop',
      data: [0, 2310000, 2310000, 2310000, 2310000, 2310000],
      backgroundColor: colors.airdrop // hoverBackgroundColor: "6afff1"

    }, {
      barThickness: 50,
      barPercentage: 0.5,
      label: 'Gaming',
      data: [0, 0, 3850000, 3850000, 3850000, 3850000],
      backgroundColor: colors.gaming // hoverBackgroundColor: "rgba(0,0,0,0)"

    }, {
      barThickness: 50,
      barPercentage: 0.5,
      label: 'Staking',
      data: [0, 0, 0, 15400000, 15400000, 15400000],
      backgroundColor: colors.staking // hoverBackgroundColor: "rgba(0,0,0,0)"

    }, {
      barThickness: 50,
      barPercentage: 0.5,
      label: 'Dev',
      data: [0, 0, 0, 0, 3850000, 3850000],
      backgroundColor: colors.dev // hoverBackgroundColor: "rgba(0,0,0,0)"

    }, {
      barThickness: 50,
      barPercentage: 0.5,
      label: 'Listing',
      data: [0, 0, 0, 0, 0, 14174000],
      backgroundColor: colors.listing // hoverBackgroundColor: "rgba(0,0,0,0)"

    }],
  };

    return (
        <div className="tokenomics-area" id="tokenomics">
            <img src={TokenBackg} className="tokenomics-backg" alt="" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>  
                                <h3>Tokenomics</h3>
                            </ScrollAnimation>   
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="pi-data tknTop">  
                            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>   
                                <div className="tkn_distribution_wrp"> 
                                  <div className="mainPieCgar"> 
                                    <PieChart
                                      data={dataMock} 
                                      label={({ dataEntry }) => dataEntry.value+"%"}  
                                      labelStyle={{
                                        fontSize: '5px',
                                        fontFamily: 'sans-serif',
                                        fill:"#fff"
                                      }}
                                      lineWidth={45} 
                                      labelPosition={75} 
                                    /> 
                                    <p>Total supply <small>77,000,000 SMF</small></p>
                                  </div>
                                  <ul className="ul_data-list">
                                    <h5>Token Distribution</h5>
                                    {dataMock && dataMock.map((data,id) => {
                                      return <li key={id}><div><small style={{background:data.color}}></small> {data.title}</div> <span>{data.value}%</span></li>
                                    })} 
                                  </ul>
                                </div> 
                            </ScrollAnimation>  
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>   
                        <div className="transactionTax tknTop">
                            <h5>transaction Tax <span>11%</span></h5>
                            <div className="stickChart">
                                <div className="firstBlk"><span>87%</span></div>
                                <div className="secondBlk" style={{width:"7%"}}><span>7%</span></div>
                                <div className="thirdBlk" style={{width:"6%"}}><span>6%</span></div> 
                            </div>
                            <ul>
                                <li>USDT Holders Reward <span>87%</span></li>
                                <li>Liquidity <span>7%</span></li>
                                <li>Marketing <span>6%</span></li>
                            </ul>
                        </div>
                        </ScrollAnimation>  
                    </div>

                    <div className="col-lg-12">
                        <div className="the-bar-chart">
                            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>   
                              <h5>token release</h5> 
                              <TheBarChart datasets= {data}  /> 
                            </ScrollAnimation>  
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="proof_of_lock">
                            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>   
                            <h4>Proof Of Lock</h4>
                            <div className="proof_of_lock-btns"> 
                                <Button classes={"theme-btn"} text="Airdrop" />
                                <Button classes={"theme-btn"} text="Gaming" />
                                <Button classes={"theme-btn"} text="Staking" />
                                <Button classes={"theme-btn"} text="Dev" />
                                <Button classes={"theme-btn"} text="Listing" /> 
                            </div>
                            </ScrollAnimation>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tokenomics;