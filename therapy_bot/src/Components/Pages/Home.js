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
import girlStudying from "../Images/girlStudying.png";
import demo from "../Images/demo.gif";

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
                <h1 className="text">Owl you need is knowledge. Not long readings.</h1>
            </div>
        </ParallaxBanner>
        </header>
      </ParallaxProvider>
      <h1 className="messageHeading">
          Welcome to HootAI - your new tool for studying smarter and faster.
        </h1>
      <view className="homeMessageBox">
        <p className="paragraph">
          Just upload your reading, article, or content and we'll generate a summary, important points, 
          and a quiz for you. Quizzes not your learning style? Talk to Hoot, and have a discussion on concepts you don't understand. 
          <br />
          <br />
          Whether you prefer quick summaries or in-depth discussions, HootAI empowers your learning journey. Upload your materials, and 
        let Hoot adapt to your unique study style. Watch our demonstration video below to learn how to make the best use of HootAI. 
        </p>
        <img src={girlStudying} className="messageImg"></img>
      </view>
      <div className="demoVideo">
        <img src={demo} style={{float: 'center', margin: "auto", width: "1000px"}}/>
      </div>
      
    </main>
  );
}


