import React, { useEffect, useState } from "react";
import { ThemeProvider, keyframes } from "styled-components";
import { darkTheme } from "./Themes";
import styled from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import astronaut from '../assets/Images/spaceman.png'
import BigTitle from "../subComponents/BigTitle";
import ToggleFullscreen from "./ToggleFullscreen";


const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;

`;

const float = keyframes`
0% {transform: translateY(-10px)}
50% {transform: translateY(15px) translateX(15px)}
100% {transform: translateY(-10px)}
`

const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img {
  width: 100%;
  height: auto;
}

@media (width <= 768px) {
  top: 5%;
  img {
    width: 80%;
  }
}
`;

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color:  ${props => props.theme.text};
//background-color: ${props => props.theme.body};
padding: 3rem;
margin-bottom: 2rem;
width: 50vw;
height: 60vh;
z-index: 3;
line-height:  1.5;


display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.5rem + 1vw);
backdrop-filter: blur(4px);
position: absolute;
left: calc(5rem + 5vw);
top: 8rem;

font-family: 'Ubuntntu Mono', monospace;
font-style: italic;

@media (width <= 768px) {
  padding: .8rem 1.9rem;
  left: calc(3em + 4.3vw);
  height:50vh;
  width: 60vw;
  font-size: calc(0.6rem + 1.3vw);
  margin-top: 5rem;
  
}
`;


const AboutPage = () => {
  const [replace, setReplace] = useState(window.innerWidth <= 768 ? '25%' : '68%');

  useEffect(() => {
    const hanldeReplace = () => {
      setReplace(window.innerWidth <= 768 ? '25%' : '68%');
    }

    window.addEventListener('resize',hanldeReplace);
    return () => {
      window.removeEventListener('resize',hanldeReplace);
    }
  },[])

  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <LogoComponent theme='dark'/>
        <SocialIcons theme='dark' />
        <PowerButton />
        <ParticleComponent theme='dark'/>
        <ToggleFullscreen/>
        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <Main>
        <ToggleFullscreen/>
        I&apos;m a front-end developer located in India. I love to create simple yet beautiful websites with great user experience.
        <br/> <br/>
        I&apos;m interested in the whole frontend stack Like trying new things and building great projects. I&apos;m an independent freelancer and blogger. I love to write blogs and read books.
        <br/> <br/>
        I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.  
        </Main>

        <BigTitle text="ABOUT" top='8%' left={replace} right={replace}/>

      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;

