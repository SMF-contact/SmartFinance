import React from "react";
import "./style.css" 
import TokenBackg from "../../imgs/tokenomics.png" 
import TheBarChart from "../helper/bar-chart";
import PieChat from "../helper/pie-chart"; 
import Button from "../helper/button"
import ScrollAnimation from 'react-animate-on-scroll'; 
import { PieChart } from 'react-minimal-pie-chart';
import {CanvasJSChart} from 'canvasjs-react-charts'
import { BarChart, Bar, XAxis, YAxis,CartesianGrid } from 'recharts';
import Crt from "./chart"


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
  
  // window.addEventListener('load', () => {
  //   var canvas = document.querySelectorAll(".canvasjs-chart-canvas"); 
  //   canvas.forEach(itm =>{ 
  //     var ctx = itm.getContext("2d");
  //     ctx.fillStyle = "#FF0000";
  //     ctx.fillRect(20, 20, 150, 100);
  //     console.log(canvas)
  //   })
  // })

	// Sample data
	const data = [
		{ name: 'A', x: 12, y: 23, z: 122 },
		{ name: 'B', x: 22, y: 3, z: 73 },
		{ name: 'C', x: 13, y: 15, z: 32 },
		{ name: 'D', x: 44, y: 35, z: 23 },
		{ name: 'E', x: 35, y: 45, z: 20 },
		{ name: 'F', x: 62, y: 25, z: 29 },
		{ name: 'G', x: 37, y: 17, z: 61 },
		{ name: 'H', x: 28, y: 32, z: 45 },
		{ name: 'I', x: 19, y: 43, z: 93 },
	];

  const options = {
    backgroundColor: "#0000",
    animationEnabled: true,
    exportEnabled: false,
    theme: "dark1", //"light1", "dark1", "dark2"
    title:{
      text: " "
    },
    axisX: {
      gridColor: "transparent",
      lineColor: "transparent",
      includeZero: true
    },
    axisY: {
      gridColor: "transparent",
      lineColor: "transparent",
      includeZero: true
    },
    data: [{ 
      type: "column", //change type to bar, line, area, pie, etc  
      //indexLabel: "{y}", //Shows y value on all Data Points
      indexLabelFontColor: "#fff",
      indexLabelPlacement: "outside",
      dataPoints: [  
        { label: "Dec-21", y: 71 },
        { label: "Feb-22", y: 55 },
        { label: "Apr-22", y: 50 },
        { label: "May-22", y: 65 },
        { label: "Jun-22", y: 71 },
        { label: "Aug-22", y: 68 }, 
        // { x: 80, y: 92, indexLabel: "Highest" },
      ]
    },
    { 
      type: "column", //change type to bar, line, area, pie, etc  
      //indexLabel: "{y}", //Shows y value on all Data Points
      indexLabelFontColor: "#fff",
      indexLabelPlacement: "outside",
      dataPoints: [  
        { label: "Dec-21", y: 71 },
        { label: "Feb-22", y: 55 },
        { label: "Apr-22", y: 50 },
        { label: "May-22", y: 65 },
        { label: "Jun-22", y: 71 },
        { label: "Aug-22", y: 68 }, 
        // { x: 80, y: 92, indexLabel: "Highest" },
      ]
    }
  ]
  }

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
                            {/* <Crt></Crt> */}
                            <BarChart width={500} height={500} data={data} >
                              <CartesianGrid />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Bar dataKey="x" stackId="a" fill="#8884d8" />
                              <Bar dataKey="y" stackId="a" fill="#82ca9d" />
                            </BarChart>
			                      {/* <CanvasJSChart options = {options} />
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
                            }/> */}
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