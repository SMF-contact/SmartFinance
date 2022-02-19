import React from "react";
import ScrollAnimation from 'react-animate-on-scroll'; 
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css"; 
import "swiper/css/navigation";
 
// import required modules
import { Navigation } from "swiper";


import "./style.css"
import RoadMapBackg from "../../imgs/roadmap.png"


function RoadMap() {
    return (
        <div className="roadmap-area" id="roadmap">
            <img src={RoadMapBackg} className="RoadMapBackgrond" alt="" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>  
                                <h3>ROADMAP</h3>
                            </ScrollAnimation>  
                        </div>
                    </div>
                    <div className="col-lg-8 offset-lg-2">
                        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>   
                            <div className="roadmap_slider">
                                <Swiper
                                    direction={"vertical"}
                                    navigation={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className="roadmapWrp">
                                            <div className="roadmapWrp-blk"> 
                                                <h2>2021-Q4</h2>
                                                <ul>
                                                    <li>Concept Design</li>
                                                    <li>Architectural Design</li>
                                                    <li>Marketing Strategy</li>
                                                    <li>Business Plan</li>
                                                    <li>Website Launch</li>
                                                    <li>Whitepaper Release</li>
                                                    <li>Social Media Channel</li>
                                                    <li>Presale Launch</li>
                                                    <li>Pancakeswap Listing</li> 
                                                </ul>
                                            </div>
                                            <div className="roadmapWrp-blk mt-5"> 
                                                <h2>2021-Q1</h2>
                                                <ul> 
                                                    <li>Smart Contract Audit.</li>
                                                    <li className="roundShape">Platform Launch.</li>
                                                    <li className="roundShape">Coinmarketcap Listing.</li>
                                                    <li className="roundShape">Coingecko Listing.</li>
                                                    <li className="roundShape">Unveiling marketing plan.</li>
                                                    <li className="roundShape">Marketplace Beta test</li> 
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>  
                                    <SwiperSlide>
                                        <div className="roadmapWrp">
                                            <div className="roadmapWrp-blk"> 
                                                <h2>2021-Q4</h2>
                                                <ul>
                                                    <li>Concept Design</li>
                                                    <li>Architectural Design</li>
                                                    <li>Marketing Strategy</li>
                                                    <li>Business Plan</li>
                                                    <li>Website Launch</li>
                                                    <li>Whitepaper Release</li>
                                                    <li>Social Media Channel</li>
                                                    <li>Presale Launch</li>
                                                    <li>Pancakeswap Listing</li> 
                                                </ul>
                                            </div>
                                            <div className="roadmapWrp-blk mt-5"> 
                                                <h2>2021-Q1</h2>
                                                <ul> 
                                                    <li>Smart Contract Audit.</li>
                                                    <li className="roundShape">Platform Launch.</li>
                                                    <li className="roundShape">Coinmarketcap Listing.</li>
                                                    <li className="roundShape">Coingecko Listing.</li>
                                                    <li className="roundShape">Unveiling marketing plan.</li>
                                                    <li className="roundShape">Marketplace Beta test</li> 
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>  
                                    <SwiperSlide>
                                        <div className="roadmapWrp">
                                            <div className="roadmapWrp-blk"> 
                                                <h2>2021-Q4</h2>
                                                <ul>
                                                    <li>Concept Design</li>
                                                    <li>Architectural Design</li>
                                                    <li>Marketing Strategy</li>
                                                    <li>Business Plan</li>
                                                    <li>Website Launch</li>
                                                    <li>Whitepaper Release</li>
                                                    <li>Social Media Channel</li>
                                                    <li>Presale Launch</li>
                                                    <li>Pancakeswap Listing</li> 
                                                </ul>
                                            </div>
                                            <div className="roadmapWrp-blk mt-5"> 
                                                <h2>2021-Q1</h2>
                                                <ul> 
                                                    <li>Smart Contract Audit.</li>
                                                    <li className="roundShape">Platform Launch.</li>
                                                    <li className="roundShape">Coinmarketcap Listing.</li>
                                                    <li className="roundShape">Coingecko Listing.</li>
                                                    <li className="roundShape">Unveiling marketing plan.</li>
                                                    <li className="roundShape">Marketplace Beta test</li> 
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>  
                                    <SwiperSlide>
                                        <div className="roadmapWrp">
                                            <div className="roadmapWrp-blk"> 
                                                <h2>2021-Q4</h2>
                                                <ul>
                                                    <li>Concept Design</li>
                                                    <li>Architectural Design</li>
                                                    <li>Marketing Strategy</li>
                                                    <li>Business Plan</li>
                                                    <li>Website Launch</li>
                                                    <li>Whitepaper Release</li>
                                                    <li>Social Media Channel</li>
                                                    <li>Presale Launch</li>
                                                    <li>Pancakeswap Listing</li> 
                                                </ul>
                                            </div>
                                            <div className="roadmapWrp-blk mt-5"> 
                                                <h2>2021-Q1</h2>
                                                <ul> 
                                                    <li>Smart Contract Audit.</li>
                                                    <li className="roundShape">Platform Launch.</li>
                                                    <li className="roundShape">Coinmarketcap Listing.</li>
                                                    <li className="roundShape">Coingecko Listing.</li>
                                                    <li className="roundShape">Unveiling marketing plan.</li>
                                                    <li className="roundShape">Marketplace Beta test</li> 
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>  
                                    <SwiperSlide>
                                        <div className="roadmapWrp">
                                            <div className="roadmapWrp-blk"> 
                                                <h2>2021-Q4</h2>
                                                <ul>
                                                    <li>Concept Design</li>
                                                    <li>Architectural Design</li>
                                                    <li>Marketing Strategy</li>
                                                    <li>Business Plan</li>
                                                    <li>Website Launch</li>
                                                    <li>Whitepaper Release</li>
                                                    <li>Social Media Channel</li>
                                                    <li>Presale Launch</li>
                                                    <li>Pancakeswap Listing</li> 
                                                </ul>
                                            </div>
                                            <div className="roadmapWrp-blk mt-5"> 
                                                <h2>2021-Q1</h2>
                                                <ul> 
                                                    <li>Smart Contract Audit.</li>
                                                    <li className="roundShape">Platform Launch.</li>
                                                    <li className="roundShape">Coinmarketcap Listing.</li>
                                                    <li className="roundShape">Coingecko Listing.</li>
                                                    <li className="roundShape">Unveiling marketing plan.</li>
                                                    <li className="roundShape">Marketplace Beta test</li> 
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>  
                                </Swiper>
                            </div>
                        </ScrollAnimation>  
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default RoadMap;