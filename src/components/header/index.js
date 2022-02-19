import React from "react";
import "./style.css"
import Logo from "../../imgs/Logo.png"
import Button from "../helper/button"


function Header() {
    return (
        <div className="header-area">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-3">
                        <div className="logo">
                            <a href="#"><img src={Logo} alt="" /></a>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="menu-area">
                            <ul>
                                <li><a href="#vision">Vision</a></li>
                                <li><a href="#features">Features</a></li>
                                <li><a href="#roadmap">Roadmap</a></li>
                                <li><a href="#tokenomics">Tokenomics</a></li>
                                <li><a href="#presale">Presale</a></li>
                                <li><a href="#team">Team</a></li>
                                <li><a href="#partners">Partners</a></li>
                                <li><a href="#">Audit</a></li> 
                            </ul>
                            <div className="btns">
                                <Button classes={"theme-btn"} text="Whitepaper" />
                                <Button classes={"theme-btn theme-btn-round"} text="app" /> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;