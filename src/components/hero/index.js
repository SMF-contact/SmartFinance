import React,{useEffect, useState} from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ScrollAnimation from 'react-animate-on-scroll'; 

import "./style.css"
import CountDown from "../helper/countDown";
import HeroBackg from "../../imgs/hero-shapes.png"
import HeroImg from "../../imgs/hero.png"
import Brand from "../../imgs/brands/b.png"
import Brand2 from "../../imgs/brands/b2.png"
import Brand3 from "../../imgs/brands/b3.png"
import Brand4 from "../../imgs/brands/b4.png"
import Brand5 from "../../imgs/brands/b5.png"



function Hero() {

    const [AddressToCopy,setAddressToCopy] = useState("");
    const [Copied,setCopied] = useState(false);
    useEffect(() => {
        setAddressToCopy("0xAE973B22d9764476041043C7d6eFdF20a5E6093F")
    },[])

    return (
        <div className="hero-area" id="hero">
            <img src={HeroBackg} className="hero_img" alt="" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <ScrollAnimation animateIn="fadeIn"> 
                        <div className="hero-wrp">
                            <h2>Smart<span>Finance</span></h2>
                            <p className="whiteColor">The first ever platform powerd by AI</p>
                            <p>A new AI-powered platform that offers DeFi services as well as P2P trading and investing tools. All of this is made possible by our one-of-a-kind Artificial Intelligence, Machine Learning, and Mathematical Expectations approach.</p>
                            <CountDown date="12/25/2022" />{/* you could use both date formate no problem: Oct 25, 2023 OR 12/25/2022 */} 
                        </div>
                        </ScrollAnimation>
                    </div>
                    <div className="col-lg-7">
                        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'> 
                        <div className="hero-img">
                            <img src={HeroImg} alt="" />
                        </div>
                        </ScrollAnimation>
                    </div>
                </div>
                <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'> 
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 text-center">
                        <div className="copyAddress">
                            <p>Contract Address</p>
                            <CopyToClipboard text={AddressToCopy} onCopy={() => {
                                setCopied(true)
                                setTimeout(() => {
                                    setCopied(false)
                                }, 2000);
                            }}> 
                            <label>
                                <input type="text" defaultValue={AddressToCopy} readOnly/>
                                <button type="button">Copy Address</button>
                            </label>
                            </CopyToClipboard>
                            {Copied ? <span className="copied_success">copied success fully</span> : "" } 
                        </div> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12"> 
                        <div className="brands">
                            <img src={Brand} alt="" />
                            <img src={Brand2} alt="" />
                            <img src={Brand3} alt="" />
                            <img src={Brand4} alt="" />
                            <img src={Brand5} alt="" />
                        </div>
                    </div>
                </div>
                </ScrollAnimation>
            </div>
        </div>
    );
}

export default Hero;