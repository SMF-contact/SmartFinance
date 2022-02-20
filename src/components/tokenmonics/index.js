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
                                <h5>Token Distribution</h5>
                                <PieChat 
                                    data={[
                                        {
                                          type: 'Token Presale 31.48%',
                                          value: 27,
                                        },
                                        {
                                          type: 'Staking & Farming 20%',
                                          value: 25,
                                        },
                                        {
                                          type: 'Listing 18.41%',
                                          value: 18,
                                        },
                                        {
                                          type: 'Liquidity 17.11%',
                                          value: 15,
                                        },
                                        {
                                          type: 'Dev Wallet 5%',
                                          value: 10,
                                        },
                                        {
                                          type: 'Gaming Tournament 5%',
                                          value: 5,
                                        },
                                        {
                                          type: 'Airdrop 1%',
                                          value: 5,
                                        },
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
                            <TheBarChart data={
                                [
                                    {
                                      "year": "Dec-21",
                                      "value": 3,
                                      "type": "Presale"
                                    },
                                    {
                                      "year": "1992",
                                      "value": 114,
                                      "type": "Lon"
                                    },
                                    {
                                      "year": "1993",
                                      "value": 3.5,
                                      "type": "Lon"
                                    },
                                    {
                                      "year": "1994",
                                      "value": 5,
                                      "type": "Lon"
                                    },
                                    {
                                      "year": "1995",
                                      "value": 4.9,
                                      "type": "Lon"
                                    },
                                    {
                                      "year": "1996",
                                      "value": 6,
                                      "type": "Lon"
                                    },
                                    {
                                      "year": "1997",
                                      "value": 7,
                                      "type": "Lon"
                                    },
                                    {
                                      "year": "1998",
                                      "value": 9,
                                      "type": "Lon"
                                    },
                                    {
                                      "year": "1999",
                                      "value": 13,
                                      "type": "Lon"
                                    },
                                    {
                                      "year": "1991",
                                      "value": 3,
                                      "type": "Bor"
                                    },
                                    {
                                      "year": "1992",
                                      "value": 4,
                                      "type": "Bor"
                                    },
                                    {
                                      "year": "1993",
                                      "value": 3.5,
                                      "type": "Bor"
                                    },
                                    {
                                      "year": "1994",
                                      "value": 5,
                                      "type": "Bor"
                                    },
                                    {
                                      "year": "1995",
                                      "value": 4.9,
                                      "type": "Bor"
                                    },
                                    {
                                      "year": "1996",
                                      "value": 6,
                                      "type": "Bor"
                                    },
                                    {
                                      "year": "1997",
                                      "value": 7,
                                      "type": "Bor"
                                    },
                                    {
                                      "year": "1998",
                                      "value": 9,
                                      "type": "Bor"
                                    },
                                    {
                                      "year": "1999",
                                      "value": 13,
                                      "type": "Bor"
                                    }
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