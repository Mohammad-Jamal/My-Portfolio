import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import styled from "styled-components";
import { Design,Develope } from "./AllSvgs";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;

@media (width <= 790px) {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  flex-wrap: wrap;
  padding-top: 7rem;
  padding-bottom: 7rem;
}

`;

const Main = styled.div`
border: 2px solid ${props => props.theme.text };
color:  ${props => props.theme.text };
background-color:  ${props => props.theme.body };
padding: 2rem;
width: 30vw;
height: 60vh;
z-index: 0;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono' ,monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover {
  color: ${props => props.theme.body};
  background-color: ${props => `rgba(${props.theme.textRgba},0.7)`}
}
  
@media (width <= 790px) {
  margin: 2.8rem;
  width: 55vw;
  height: auto;
  justify-content: space-around;
  align-items: space-around;
}

`;

const Title =styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    fill : ${props => props.theme.body};
}

&>*:first-child {
  margin-right: 1rem;
}

@media (width <= 790px ) {
  font-size : calc(1.5rem + 1vw);
}

`;

const Description = styled.div`
color: ${props => props.theme.text };
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;

strong {
  margin-bottom: 1rem;
  text-transform: uppercase;
}

ul {
  margin-left: 2rem;
}


${Main}:hover &{
    color : ${props => props.theme.body};
}

@media (width <= 790px) {
  font-size: calc(0.9rem + 1vw);
  padding: 0.2rem 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}  >
      <Box>
        <LogoComponent theme='light'/>
        <SocialIcons theme='light' />
        <PowerButton />
        <ParticleComponent theme='light'/>
        <Main>
          <Title>
            <Design width={40} height={40} /> Software Developer
          </Title>
          <Description>
            I love to create design which speaks, Keep it clean, minimal and simple.
          </Description>
          <Description>
            <strong>I like to Code in</strong>
            <ul>
              <li>Python</li>
              <li>Javascript</li>
              <li>Node</li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <ul>
              <li>Pycharm</li>
              <li>Anaconda</li>
            </ul>
            
          </Description>
        </Main>
        <Main>
        <Title>
            <Develope width={40} height={40} /> Web Developer
        </Title>
        <Description>
          It&apos;s fun for me to bring new concepts to life & consider myself as Frontend Developer.
        </Description>
        <Description>
            <strong>Skills</strong>
            <ul>
              <li>Html,Css,Javascript</li>
              <li>React,Redux</li>
              <li>Boostrap,Sass</li>
              <li>Python</li>
            </ul>
        </Description>
        <Description>
            <strong>Tools</strong>
            VScode,Github,npm,AdobeXD etc.
          </Description>
        </Main>
        <BigTitle text="SKILLS" top="80%" right="30%" left='' />
       </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
