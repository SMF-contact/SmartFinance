import React from "react";
import "./style.css"
import ContentBlock from "../helper/block/"
import VisionShape from "../../imgs/vision-shape.png"
import CircleBackg from "../../imgs/circles.png"
import VDefi from "../../imgs/vision-defi.png"
import vmarketPlace from "../../imgs/vision-marketplace.png" 
import ScrollAnimation from 'react-animate-on-scroll'; 



function Vision() {
    return (
        <div className="vision-area" id="vision">
            <img src={VisionShape} className="visionShape" alt="" />
            <img src={CircleBackg} className="circleShape" alt="" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>  
                                <h3>Our Vision</h3>
                            </ScrollAnimation>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>  
                            <ContentBlock>
                                <p>Smart Finance is a marketplace divided into multiple part, where buyers and sellers meet to carry out operations involving digital goods and assets in a secure way, involving AI for searching, matching and advising. One of the multiple advantathe automatic mg of h. <br />
                                Smart Finance is a marketplace divided into multiple part, where buyers and sellers meet to carry out operations involving digital goods and assets in a secure way, involving AI for searching, matching and advising. One of the multiple advantathe automatic mg of h.</p>
                            </ContentBlock>
                        </ScrollAnimation>
                    </div>
                    <div className="col-lg-6">
                        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>  
                            <ContentBlock classNames="btm_vision mt-5" title="Defi App" img={vmarketPlace}>
                                <p>Operates as a Decentralized Yield Optimizer platform, allowing users to earn compound interest on their assets.</p>
                                <p>It automatically optimizes user returns from different liquidity pools (LPs), automated market making (AMM), and other yield farming possibilities in the DeFi ecosystem using a set investment methods protected and enforced by smart contracts and powered by AI.</p>
                            </ContentBlock>
                        </ScrollAnimation>
                    </div>
                    <div className="col-lg-6">
                        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>  
                            <ContentBlock classNames="btm_vision mt-5" title="Marketplace" img={VDefi}>
                                <p>The P2P marketplace is where buyers and sellers meet to carry out operations involving digital goods and assets in a secure way, involving AI for searching, matching, and advising.</p>
                                <p>One of the multiple advantages is the automatic matching of users, based on a straight AI approach.</p>
                            </ContentBlock>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vision;