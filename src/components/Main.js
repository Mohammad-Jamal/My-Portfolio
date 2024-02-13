import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import { NavLink } from "react-router-dom";
import { YinYang } from "./AllSvgs";
import Intro from "./Intro";
import { motion } from "framer-motion";
import { ProgressBar } from "react-loader-spinner";
import ToggleFullscreen from "./ToggleFullscreen";




const MainContainer = styled.div`
  //background: ${(props) => props.theme.body};
  //background: url('./assets/Images/Fb-Website.png');
  background: #E55D87;  /* fallback for old browsers */
  background: -webkit-linear-gradient(-45deg, #5FC3E4, #E55D87);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(-45deg, #5FC3E4, #3ca55c
  , #E55D87, #e5e5be); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  background-size: 300% 300%;
  height: 100vh;
  position: relative;
  width: 100%;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  animation: gradient 5s linear infinite;

  h1,
  h2,
  h3,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

`;

const Container = styled.div`
  padding: 2rem;
`;
const Contact = styled.a`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;


  @media (width <= 768px) {
    right: calc(1.2rem + 2vw);
    color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
    transition: all 0.2s linear;
  }
`;

const Blog = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;

  @media (width <= 768px) {
    color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
    transition: all 0.2s linear;
  }
`;

const Projects = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 45%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 100;
  @media (width <= 768px) {
    left: calc(1.5rem + 2vw);
    transition: all 0.2s linear;
  }
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;

  @media (width <= 768px) {
    bottom : 1.3rem ;
  }
`;

const About = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 5;

  @media (width <= 768px) {
    color : ${ props => props.theme.text};
    transition: all 0.2s linear;
  }

`;

const Skills = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const rotate = keyframes`
from {
  transform: rotate(0);
}
to{
  transform: rotate(360deg);
}
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  & > :nth-child(2) {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
    font-size: medium;
  }

  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: .5rem;
    font-size: smaller;
  }

  @media (width <= 768px) {
    top: ${(props) => (props.click ? "89%" : "50%")};
    left: ${(props) => (props.click ? "89%" : "50%")};
  }

`;
const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  background-color: #000;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;

  @media (width <= 768px) {
    top: 0;
    //bottom: 50%;
    //left: 0;
    right: 0;
    width: ${(props) => (props.click ? "100%" : "0%")};
    height: ${(props) => (props.click ? "50%" : "0%")};
    transition: width 0.5s ease, height 1s ease 0.5s;
  }
`;

const Resume = styled(NavLink)`
color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
position: absolute;
top: 2rem;
left: calc(15rem + 3vw);
text-decoration: none;
z-index: 1; 
@media (width <= 768px) {
  top: 15rem;
  left: calc(1.5rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
}

`;

const Main = () => {

  const [loading, setLoading] = useState(true);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


  // for handling the size of YinYang image to be responsive
  const [iconSize, setIconSize] = useState(window.innerWidth <= 768 ? 117 : 180) ;
  const [clikedIcon , setClickedIcon] = useState(window.innerWidth <= 768 ? 45 : 120) ;
  const [iconColor , setIconColor] = useState(window.innerWidth <= 768 ? 'light' : 'dark') ;
  useEffect( () => {
    const handleResize = () => {
      setIconSize(window.innerWidth <= 768 ? 117 : 180) ;
      setClickedIcon(window.innerWidth <= 768 ? 45 : 120);
      setIconColor(window.innerWidth <= 768 ? 'light' : 'dark');
    }
    
    window.addEventListener('resize',handleResize);
    return () => {
      window.removeEventListener('resize',handleResize);
    }
  });
  
  useEffect(() => {
    // Simulate loading delay with setTimeout
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after a delay (e.g., 2 seconds)
    }, 500);

    // Clean up the timer to prevent memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <MainContainer>
      <ToggleFullscreen/>
      {loading ? (
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
          <ProgressBar
            height={80}
            width={80}
            radius={9}
            borderColor="black"
            barColor="white"
            ariaLabel="three-dots-loading"
          />
        </div>
      ) : (
        <>

          <DarkDiv click={click} />
          <Container>
        <PowerButton />
        <LogoComponent theme={click ? "dark" : "light"} />
        <Resume target="_blank" to="https://drive.google.com/file/d/1qqJnevPv0HSsW2hkv622j9bKtkLsCnjQ/view?usp=drivesdk" click={+click}>
          <motion.h2 
            initial={{
            y: -200,
            transition: {type:'spring',duration: 1.5,delay: 1}
            }}
            animate={{
            y:0,
            transition: {type:'spring', duration: 1.5,delay: 1}
            }}         
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Resume</motion.h2>
        </Resume>
        <SocialIcons theme={click ? `${iconColor}` : "light"} />
        <Center click={click} >
          <YinYang
            onClick={() => handleClick()}
            width={click ? `${clikedIcon}` : `${iconSize}`}
            height={click ? `${clikedIcon}` : `${iconSize}`}
            fill="currentColor"
          />
          <span>Click Here</span>
          <span>[Double Click <b>anywhere</b> to Fullscreen]</span>
        </Center>
        <Contact click={+click} target="_blank" href="mailto:m.mohammadjamal1961@gmail.com">
          <motion.h2
           initial={{
            y: -200,
            transition: {type:'spring',duration: 1.5,delay: 1}
           }}
           animate={{
            y:0,
            transition: {type:'spring', duration: 1.5,delay: 1}
           }}
           whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Say hi..
          </motion.h2>
        </Contact>
        <Blog to="/blog" click={+click} >
          <motion.h2
            initial={{
            y: -200,
            transition: {type:'spring',duration: 1.5,delay: 1}
            }}
            animate={{
            y:0,
            transition: {type:'spring', duration: 1.5,delay: 1}
            }}
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Feats
          </motion.h2>
        </Blog>
        <Projects to="/work" click={+click}>
          <motion.h2 
            initial={{
              y: -200,
              transition: {type:'spring',duration: 1.5,delay: 1}
            }}
            animate={{
              y:0,
              transition: {type:'spring', duration: 1.5,delay: 1}
            }}         
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Projects
          </motion.h2>
        </Projects>
        <BottomBar>
          <About to="/about" click={+click}>
            <motion.h2
              initial={{
                y: 200,
                transition: {type:'spring',duration: 1.5,delay: 1}
              }}
              animate={{
                y:0,
                transition: {type:'spring', duration: 1.5,delay: 1}
              }}           
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              About Me
            </motion.h2>
          </About>
          <Skills to="/skills">
            <motion.h2 
             initial={{
              y: 200,
              transition: {type:'spring',duration: 1.5,delay: 1}
             }}
             animate={{
              y:0,
              transition: {type:'spring', duration: 1.5,delay: 1}
             }}          
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              My Skills
            </motion.h2>
          </Skills>
        </BottomBar>
          </Container>
          {click ? <Intro click={click} /> : null}
        </>
      )}

    </MainContainer>
  );
};

export default Main;
