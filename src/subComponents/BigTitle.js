import React from 'react';
import styled from 'styled-components';

import * as PropTypes from 'prop-types'

const Text = styled.h1`
position: fixed;
top: ${props => props.top};
right: ${props => props.right};
color: ${props => `rgba(${props.theme.textRgba},0.2)`};
font-size: calc(5rem + 5vw);
z-index: 0;


`;
const BigTitle = (props) => {
  return (
    <Text top={props.top} right={props.right} left={props.left} >
      {props.text}
    </Text>
  );
};

BigTitle.propTypes = {
  right: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
}

export default BigTitle;
