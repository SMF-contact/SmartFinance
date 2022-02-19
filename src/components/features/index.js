import React from "react";
import ScrollAnimation from 'react-animate-on-scroll'; 
import "./style.css"
import ContentBlock from "../helper/block"
import FeatureShape from "../../imgs/feature-back.png"



function Features() {
    return (
        <div className="feature-area" id="features">
            <img src={FeatureShape} className="features-backg" alt="" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>  
                                <h3>Features</h3>
                            </ScrollAnimation> 
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'> 
                            <ContentBlock classNames="mt-5" title="AnticameAI">
                                <p>The Anti-Scam AI analyzes lots of information about a crypto and provides a score regarding the investment risk. The analysis goes through the following:</p>
                                <ul> 
                                    <li>Website</li>
                                    <li>Whitepaper</li>
                                    <li>Social Media</li>
                                    <li>Smart Contract</li>
                                    <li>News Website</li>
                                </ul>
                            </ContentBlock>
                        </ScrollAnimation>
                    </div>
                    <div className="col-lg-4">
                        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'> 
                            <ContentBlock classNames="mt-5" title="AI Trading Bot">
                                <p>Auto-Trading is an AI powered feature. It analyses big data sets using deep learning and AI to identify significant patterns, make better decisions, and create exact predictions. Investors can make wise investments by simplifying their selections, reducing the risk of uncertainty, and taking advantage of market volatility.</p>
                            </ContentBlock>
                        </ScrollAnimation>
                    </div>
                    <div className="col-lg-4">
                        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'> 
                            <ContentBlock classNames="mt-5" title="Whales AI Tracker">
                                <p>The Whales Tracker provides real-time streaming as well as tools for tracking whale movements across many blockchains.
                                Our API retrieves the most current data and retains information about unconfirmed transactions from the past</p>
                            </ContentBlock>
                        </ScrollAnimation>
                    </div>
                    <div className="col-lg-4">
                        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'> 
                            <ContentBlock classNames="mt-5" title="Smart Wallet">
                                <p>The Smart Wallet is relatively easy for all users to log in to the platform.  You can sign in with a fingerprint or Face ID to access your wallet.</p> 
                            </ContentBlock>
                        </ScrollAnimation>
                    </div>
                    <div className="col-lg-4">
                        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'> 
                            <ContentBlock classNames="mt-5" title="SearchAI">
                                <p>Smart Finance is a marketplace divided into multiple part, where buyers and sellers meet to carry out operations involving digital goods and assets in a secure way, involving AI for searching, matching and advising. One of the multiple advantathe automatic mg of h</p>
                            </ContentBlock>
                        </ScrollAnimation>
                    </div>
                    <div className="col-lg-4">
                        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'> 
                            <ContentBlock classNames="mt-5" title="Arbitration">
                                <p>We are here to help people resolve their disputes in an intelligent manner. Our system is based on human intelligence, and it comes up with logical solutions that are acceptable for all parties to dispute.</p>
                            </ContentBlock>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;