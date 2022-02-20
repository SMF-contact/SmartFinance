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
                    <div className="col-lg-5">
                        <div className="pi-data tknTop">  
                            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>   
                                <h5>Token Distribution</h5>
                                <PieChat 
                                    data={[
                                        {
                                          type: 'Token Presale 31.48%',
                                          value: 31.48,
                                        },
                                        {
                                          type: 'Staking & Farming 20%',
                                          value: 20,
                                        },
                                        {
                                          type: 'Listing 18.41%',
                                          value: 18.41,
                                        },
                                        {
                                          type: 'Liquidity 17.11%',
                                          value: 17.11,
                                        },
                                        {
                                          type: 'Dev Wallet 5%',
                                          value: 5,
                                        },
                                        {
                                          type: 'Gaming Tournament 5%',
                                          value: 5,
                                        },
                                        {
                                          type: 'Airdrop 1%',
                                          value: 1,
                                        },
                                    ]}
                                    labelText={"Total supply"}
                                    ValueNumber={77000000}
                                />
                            </ScrollAnimation>  
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
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
                            <TheBarChart data={
                                [
                                    {
                                      "year": "Dec-21",
                                      "value": 3,
                                      "type": "Presale"
                                    },
                                    {
                                      "year": "Feb-22",
                                      "value": 114,
                                      "type": "Lon"
                                    },
                                    {
                                      "year": "Apr-22",
                                      "value": 3.5,
                                      "type": "Lon"
                                    },
                                    {
                                      "year": "May-22",
                                      "value": 5,
                                      "type": "Lon"
                                    },
                                    {
                                      "year": "Jun-22",
                                      "value": 4.9,
                                      "type": "Lon"
                                    },
                                    {
                                      "year": "Aug-22",
                                      "value": 6,
                                      "type": "Lon"
                                    }, 
                                ]
                            }/>
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