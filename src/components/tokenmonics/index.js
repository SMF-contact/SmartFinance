import React from "react";
import "./style.css" 
import TokenBackg from "../../imgs/tokenomics.png" 
import TheBarChart from "../helper/bar-chart";
import PieChat from "../helper/pie-chart";
import Button from "../helper/button"
import ScrollAnimation from 'react-animate-on-scroll'; 

function Tokenomics() {
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
                    <div className="col-lg-7">
                        <div className="pi-data tknTop"> 
                            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>   
                                <PieChat 
                                    datas={[
                                        { name: "Active Campagins", value: 90 },
                                        { name: "Inactive Campagins", value: 25 },
                                        { name: "Campagins", value: 25 },
                                        { name: "ICPs with no campagins", value: 10 }
                                    ]}
                                    labelText={"Total supply"}
                                    ValueNumber={77000000}
                                />
                            </ScrollAnimation>  
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>   
                        <div className="transactionTax tknTop">
                            <h5>transaction Tax <span>11%</span></h5>
                            <div className="stickChart">
                                <div className="firstBlk"></div>
                                <div className="secondBlk"></div>
                                <div className="thirdBlk"></div> 
                            </div>
                            <ul>
                                <li>USDT Holders Reward <span>3%</span></li>
                                <li>Liquidity <span>4%</span></li>
                                <li>Marketing <span>4%</span></li>
                            </ul>
                        </div>
                        </ScrollAnimation>  
                    </div>

                    <div className="col-lg-12">
                        <div className="the-bar-chart">
                            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>   
                            <h5>token release</h5>
                            <TheBarChart datas={[
                                {
                                    name: "Page A",
                                    uv: 4000,
                                    pv: 2400,
                                    amt: 2400
                                },
                                {
                                    name: "Page B",
                                    uv: 3000,
                                    pv: 1398,
                                    amt: 2210
                                },
                                {
                                    name: "Page C",
                                    uv: 2000,
                                    pv: 9800,
                                    amt: 2290
                                },
                                {
                                    name: "Page D",
                                    uv: 2780,
                                    pv: 3908,
                                    amt: 2000
                                },
                                {
                                    name: "Page E",
                                    uv: 1890,
                                    pv: 4800,
                                    amt: 2181
                                },
                                {
                                    name: "Page F",
                                    uv: 2390,
                                    pv: 3800,
                                    amt: 2500
                                },
                                {
                                    name: "Page G",
                                    uv: 3490,
                                    pv: 4300,
                                    amt: 2100
                                }
                            ]}/>
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