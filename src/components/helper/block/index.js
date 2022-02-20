import React from "react";
import Tilt from 'react-tilt'
import "./style.css"
function ContentBlock({children,title,img,classNames }) {
    return (
        <Tilt className="willMove" options={{ max : 15,perspective:2500,scale:1, }}> 
            <div className={classNames ? "content-block "+classNames : "content-block"}>
                {title ? <h5>{title}</h5> : ""}
                { children }
                {img ? <img src={img} alt="" /> : ""} 
            </div>
        </Tilt>
    );
}

export default ContentBlock;