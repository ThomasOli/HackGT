import React from "react";
//import { ParallaxProvider } from "react-scroll-parallax";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
// import { Parallax } from "react-scroll-parallax";
// mountain functionality from: https://github.com/jscottsmith/react-scroll-parallax-examples

import bg1 from "../Images/bg-1.png";
import bg2 from "../Images/bg-2.png";
import bg3 from "../Images/bg-3.png";
import bg4 from "../Images/bg-4.png";
import bg5 from "../Images/bg-5.png";

import "./Home.css";

export default function Home() {
  return (
    <main>  
      <ParallaxProvider>
      
        <header>
          <ParallaxBanner
            className="banner"
            layers={[
            {
                speed: -500,
            },
            {
                translateY: ['-2500px', '-25px'],
                children: (
                    <div className="textdiv">
                        <img src={bg1} />
                    </div>
                ),
            },
            {
                image: bg2, speed: -10
            },
            {
                image: bg3, speed: -20
            },
            {
                image: bg4, speed: -30
            },
            {
                image: bg5, speed: -40, 
                
            },
                
            ]}
          >
        
            <div className="textdiv">
                <h1 className="text">HelloWOrld</h1>
            </div>
        </ParallaxBanner>
        </header>
      </ParallaxProvider>
      <div className="homeMessageBox" style={{display: "flex"}}>
        <h1 className="messageHeading">
          Welcome to HootAI - your new tool for studying smarter and faster.
          <p className="message">
            Just upload your reading, article, or content and we'll generate a summary, important points, 
            and a quiz for you. Quizzes not your learning style? Explore our tactical option, which allows you to 
            interact directly with what you have to learn.  
          </p>
        </h1>
      </div>
    </main>
  );
}


