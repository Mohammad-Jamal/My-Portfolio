import React, { useEffect, useRef, useState } from "react";
import { ThemeProvider} from "styled-components";
import { darkTheme } from "./Themes";
import styled from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";

import {Work} from "../data/WorkData";
import Card from "../subComponents/Card";
import { YinYang } from "./AllSvgs";
import BigTitle from "../subComponents/BigTitle";

import { motion} from "framer-motion";
import ToggleFullscreen from "./ToggleFullscreen";




const Box = styled(motion.div)`
background-color: ${props => props.theme.body};
height: 270vh;
position: relative;
display: flex;
align-items: center;

`;

const Main = styled(motion.ul)`
position: fixed;
top: 12rem;
left: calc(10rem + 15vw);
height: 40vh;
display: flex;
color: white;

@media (width <= 768px) {
  top: 15rem;
  left: calc(5rem + 8vw);
  transition: all 0.3s linear;
}

`;

const Rotate = styled.span`
display: block;
position: fixed;
right: 1rem;
bottom: 1rem;
width: 80px;
height: 80px;
z-index: 1;

@media (width <=768px) {
  width: 50px;
  height: 50px;
  right: 1.2rem;
  bottom: 1.2rem;
}


`;

// Framer-motion Configuration
const container = {
  hidden: {opacity:0},
  show: {
    opacity: 1,

    transition:{
      staggerChildren: 0.5,
      duration: 0.5,
    }
  }
}
const ProjectPage = () => {

  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      return (yinyang.current.style.transform = 
        "rotate(" + -window.pageYOffset + "deg)"
      );
    };
    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  const [replace, setReplace] = useState(window.innerWidth <= 768 ? '4%' : '30%');

  useEffect(() => {
    const hanldeReplace = () => {
      setReplace(window.innerWidth <= 768 ? '4%' : '30%');
    }

    window.addEventListener('resize',hanldeReplace);
    return () => {
      window.removeEventListener('resize',hanldeReplace);
    }
  },[])

  const [iconSize, setIconSize] = useState(window.innerWidth <= 768 ? 50 : 80)
  useEffect( () => {
    const handleResize = () => {
      setIconSize(window.innerWidth <= 768 ? 50 : 80) ;
    }
    
    window.addEventListener('resize',handleResize);
    return () => {
      window.removeEventListener('resize',handleResize);
    }
  })



  return (
    <ThemeProvider theme={darkTheme} >
      <Box variants={container} initial='hidden' animate='show'>
        <ToggleFullscreen/>
        <LogoComponent theme='dark'/>
        <SocialIcons theme='dark' />
        <PowerButton />
        <Main  ref={ref} variants={container} initial='hidden' animate='show'>  
          {
            Work.map( (d) =>
            <Card key={d.id} data={d}/>                
            )
          }
        </Main>
        <Rotate ref={yinyang}>
          <YinYang width={iconSize} height={iconSize} fill={darkTheme.text}/>
        </Rotate>
        <BigTitle text="PROJECTS" top='10%' right={replace} left=''/>
        <BigTitle text="Scroll" top='78%' right='10%' left=''/>
      </Box>
    </ThemeProvider>
  );
};



export default ProjectPage; 

