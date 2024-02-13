import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Facebook, Github, Instagram, Linkedin } from '../components/AllSvgs'
import styled from 'styled-components'
import { darkTheme } from '../components/Themes'
import * as PropTypes from 'prop-types';
import { motion } from 'framer-motion'


const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: fixed;
bottom: 0;
left: 2rem;
z-index: 3;
transition-delay: 1s ease;
font-size: 100%;

&>*:not(:last-child) {
  margin: 0.5rem 0;
}

@media (width <= 768px) {
  left: 1.4rem;
}
   
`;

const Line = styled(motion.span)`
width: 2px;
height: 8rem;
background-color: ${(props) => props.color === 'dark' ? darkTheme.text : darkTheme.body } ;

`;



const SocialIcons = ({theme}) => {
  const [iconSize, setIconSize] = useState(window.innerWidth <= 768 ? 20 : 25);

  useEffect(() => {
    const handleResize = () => {
      setIconSize(window.innerWidth <= 768 ? 20 : 30);
    }

    window.addEventListener('resize',handleResize);

    return () => {
      window.removeEventListener('resize',handleResize);
    } 
  },[])
  return (
    <Icons>
      
      <motion.div
      initial={{transfrom:"scale(0)"}}
      animate={{scale:[0,1,1.5,1]}}
      transition={{type:'spring', duration: 1, delay: 1}}
      >
        <NavLink style={{color:'inherit'}} target="_blank" to="https://github.com/Mohammad-Jamal">
          <Github width={iconSize} height={iconSize} fill={theme === "dark" ? darkTheme.text : darkTheme.body}/>
        </NavLink>
      </motion.div>
      
      <motion.div
      initial={{transfrom:"scale(0)"}}
      animate={{scale:[0,1,1.5,1]}}
      transition={{type:'spring', duration: 1, delay: 1.2}}
      >
        <NavLink style={{color:'inherit'}} target="_blank" to="https://www.linkedin.com/in/mohammadjamalm/">
          <Linkedin width={iconSize} height={iconSize} fill={theme === "dark" ? darkTheme.text : darkTheme.body}/>
        </NavLink>
      </motion.div>
      <motion.div
      initial={{transfrom:"scale(0)"}}
      animate={{scale:[0,1,1.5,1]}}
      transition={{type:'spring', duration: 1, delay: 1.4}}
      >
        <NavLink style={{color:'inherit'}} target="_blank" to="https://www.facebook.com/mj.jamal.9026/">
          <Facebook width={iconSize} height={iconSize} fill={theme === "dark" ? darkTheme.text : darkTheme.body}/>
        </NavLink>
      </motion.div>
      <motion.div
      initial={{transfrom:"scale(0)"}}
      animate={{scale:[0,1,1.5,1]}}
      transition={{type:'spring', duration: 1, delay: 1.6}}
      >
        <NavLink style={{color:'inherit'}} target="_blank" to="https://www.instagram.com/mister___mj?utm_source=qr&igsh=MXVxaTFhcHR2bTB4bA==">
          <Instagram width={iconSize} height={iconSize} fill={theme === "dark" ? darkTheme.text : darkTheme.body}/>
        </NavLink>
      </motion.div>
      <Line color={theme}
      initial={
        {
          height: 0
        }
      }
      animate={{height: '8rem'}}
      transition={{
        type: 'spring', duration:1,delay: 0.8
      }}
      />
    </Icons>
  )
};

SocialIcons.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default SocialIcons;
