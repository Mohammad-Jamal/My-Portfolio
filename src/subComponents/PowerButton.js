//Home button

import React, { useEffect } from 'react'
import styled from 'styled-components'
import { PowerBtn } from '../components/AllSvgs'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Power = styled.button`
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%, 0);
background-color: #FCF6F4;
padding:0.3rem;
border-radius: 50%;
border: none;
//border: 0.5px solid #000;
box-shadow: 0 0 6px rgba(0,0,0,0.8);
width: 2.5rem;
height: 2.5rem;

display: flex;
justify-content: center;
align-items: center;
z-index: 3;
cursor: pointer;
&:hover {
  box-shadow: 0 0 8px 6px rgba(3,190,245,0.5);
}

&>*:first-child {
  text-decoration: none;
  color: inherit;


}

@media (width <= 768px) {
  padding: 0.7rem;
}

`;


const PowerButton = () => {
  const [iconSize, setIconSize] = useState(window.innerWidth <= 768 ? 20 : 25);

  useEffect(() => {
    const handleResize = () => {
      setIconSize(window.innerWidth <= 768 ? 20 : 25);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Power>
      <NavLink to="/">
      <PowerBtn className="icons" width={iconSize} height= {iconSize} fill='currentColor' />
      </NavLink>
    </Power>
  )
}

export default PowerButton;
