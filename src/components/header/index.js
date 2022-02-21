import React,{useEffect,useState,useRef} from "react";
import "./style.css"
import Logo from "../../imgs/Logo.png"
import Button from "../helper/button"
import { Link } from "react-router-dom";


function Header() {

    const headerMenu = useRef()
    const menuBtn = useRef()

    const ShowHideMenuInMobile = () => {
        if (headerMenu.current && menuBtn.current) {
            menuBtn.current.classList.toggle('active')
            headerMenu.current.classList.toggle('active')
        }
    }


    return (
        <> 
            <div className="header-area">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-8">
                            <div className="logo">
                                <Link to="/"><img src={Logo} alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-9 col-4">
                            <div className="menu-area" ref={headerMenu}>
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
                            <div className="mobileMenuI" ref={menuBtn} onClick={() => ShowHideMenuInMobile()}>
                                <span></span>
                            </div>
                        </div> 
                    </div>
                </div>
            </div> 
        </>
    );
}

export default Header;