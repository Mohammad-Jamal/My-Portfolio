import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import Me from '../assets/Images/profile-img.png'


const Box = styled(motion.div)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
width: 65vw;
height: 55vh;
display: flex;

background : linear-gradient(
  to right,
  ${props => props.theme.body} 50%,
  ${props => props.theme.text} 50%) bottom,
  linear-gradient(
  to right,
  ${props => props.theme.body} 50%,
  ${props => props.theme.text} 50%) top;
background-repeat: no-repeat;
background-size: 100% 2px;
border-left: 2px solid ${props => props.theme.body};
border-right: 2px solid ${props => props.theme.text};
z-index : 1;
@media (max-width: 768px) {
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 90vh;
  background : linear-gradient(
    to right,
    black 50%,
    black 50%) bottom,
    linear-gradient(
    to right,
    white 50%,
    white 50%) top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${props => props.theme.body};
  border-right: 2px solid ${props => props.theme.text};
}
 

`;






const SubBox = styled.div`
width: 50%;

position: relative;
display: flex;


.pic {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%,0%);
  width: 100%;
  height: auto;

}

@media (width <= 768px) {
  width: 100%;
  .pic {
    width: 26vh;
  }
}


`;

const Text = styled(motion.div)`
font-size:calc(1em + 1.5vw) ;
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: space-evenly;

&>*:last-child {
  color: ${props => `rgba(${props.theme.bodyRgba},0.6)` };
  font-size:calc(0.5rem + 1.5vw) ;
  font-weight: 300;

}


@media (width <= 768px) {
  display: flex;
  justify-content: space-between;
  align-items: space-between;
}


`;

const Intro = () => {
  return (
    <Box
    initial={{height:0}}
    animate={{height:'55vh'}}
    transition={{type:'spring', duration:2, delay:1}}
    >
      <SubBox>
        <Text
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1, delay:1}}
        >
          <h1>HI,</h1>
          <h3>I&apos;m Mohammad Jamal.</h3>
          <h6>I design and Code simple yet beautiful websites & the ability to adapt to any situation and the proven ability to grow oneself and others.</h6>
        </Text>
      </SubBox>
      <SubBox >
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1, delay:2}}

        >
          <img  className='pic'  src={Me} alt="profile pic" />
        </motion.div>
      </SubBox>
    </Box>
  )
}

export default Intro;
