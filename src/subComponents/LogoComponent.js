import React from 'react'
import styled from 'styled-components'
import { darkTheme } from '../components/Themes'
import * as PropTypes from 'prop-types';

const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};
font-family:'Pacifico',cursive;
position: fixed;
top: 2rem;
font-size: 2rem;
font-weight: bold;
left: 1.2rem;
z-index: 3;
`


const LogoComponent = ({theme}) => {
  return (
    <Logo color={theme} style={{fontFamily:'Pacifico',fontWeight:500}}>
      MJ
    </Logo>
  )
}

LogoComponent.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default LogoComponent;
