import React, { useEffect }  from "react";
import "./Box.css";

import coding  from "../static/coding.jpg"
import wave1 from "../static/wave1.png"
import Javascript from "../static/Javascript.jpg"
import { Navbar } from "../Navbar/Navbar";






export const Box = ()=>{





    return(
        <>
        <Navbar/>
        <div className="container">
            <div className="box1">
                <div className="heading">Learning <span className="short">Coding</span> and   practice is good. <span className="short">Start  journy</span></div>
                <button  className="explorebtn">Explore more</button>

            </div>
            <div className="box2">
                <img src={coding} alt="s" />

            </div>

        </div>
        <div className="centerHeading">Latest Course</div>

        <div className="cards">
            <div className="card">
                <div className="courseBg">
                    <img  src={Javascript}/>
                </div>
                <div className="courseName">JavaScript Development</div>
                <div className="courseDes">In this you will from beginer to advanced</div>
                <div className="courseStart">Course start from <span>5 Sep</span></div>
                <div className="coursePrice">Course price  <span>4999</span></div>
                <button className="courseSellbtn">Buy</button>
            </div>
            <div className="card">
            <div className="courseBg">
                    <img  src={Javascript}/>
                </div>
                <div className="courseName">ReactJS Development</div>
                <div className="courseDes">In this you will from beginer to advanced</div>
                <div className="courseStart">Course start from <span>5 Sep</span></div>
                <div className="coursePrice">Course price  <span>4999</span></div>
                <button className="courseSellbtn">Buy</button>
            </div>
            <div className="card">
            <div className="courseBg">
                    <img  src={Javascript}/>
                </div>
                <div className="courseName">NodeJS Development</div>
                <div className="courseDes">In this you will from beginer to advanced</div>
                <div className="courseStart">Course start from <span>5 Sep</span></div>
                <div className="coursePrice">Course price  <span>4999</span></div>
                <button className="courseSellbtn">Buy</button>
            </div>
            <div className="card">
            <div className="courseBg">
                    <img  src={Javascript}/>
                </div>
                <div className="courseName">Mern Stack Development</div>
                <div className="courseDes">In this you will from beginer to advanced</div>
                <div className="courseStart">Course start from <span>5 Sep</span></div>
                <div className="coursePrice">Course price  <span>4999</span></div>
                <button className="courseSellbtn">Buy</button>
            </div>

        </div>
        <div className="footer">
            <img  className="footerImg" src={wave1} >
                
            </img>

            <div className="footer1">
                <ul className="navlinks"> Home Page
                    <li className="navlink">Home</li>
                    <li className="navlink">Service</li>
                    <li className="navlink"> Best Course</li>
                </ul>
                <ul className="navlinks"> Course
                    <li className="navlink">JavaScript</li>
                    <li className="navlink">React</li>
                    <li className="navlink">Node</li>
                    <li className="navlink">HTML</li>
                    <li className="navlink">CSS</li>
                </ul>
                <ul className="navlinks"> Service
                    <li className="navlink">Web Development</li>
                    <li className="navlink">Graphic Desigening</li>
                    <li className="navlink"> Mobile App</li>
                    <li className="navlink">Custom Website</li>
                </ul>
                

            </div>
           
            <div className="main-footer">Copyright @2023 Apni coding</div>
        </div>
        
        </>
    )
}