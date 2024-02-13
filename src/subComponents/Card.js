import React from 'react'
import styled from 'styled-components';
import * as PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
import { Github } from '../components/AllSvgs';
import { motion } from 'framer-motion';

const Box = styled(motion.div)`
position: relative;
width: 16rem;
height: 40vh;
padding: 1.5rem 2rem;
margin-right: 8rem; 
border-radius: 0 50px 0 50px;
cursor: grab;
transition: all 0.1s linear;



/*&:hover {
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  border: 1px solid ${props => props.theme.text} ;
}*/

`;

const TheCard = styled.div`
position: absolute;
top: 0;
left: 0;
width:100%;
height: 100%;
transform-style: preserve-3d ;
transition: all 1s ease;
font-size: 100%;
&:hover {
  transform: rotateY(180deg);
}

`;

const Front = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
border-radius: 0 50px 0 50px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
backface-visibility:hidden;
background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
font-size: 100%;
`;

const Title = styled.h2`
font-size: calc(1rem + 0.5vw);
margin: 1rem;

@media (width <= 768px) {
  font-size: calc(1.5em + 0.9vw);
  margin: .5em;
}

`;

const Description = styled.h2`
font-size: calc(0.5rem + 0.5vw);
font-family: 'Karla',sans-serif;
font-weight: 500;
padding: 1.7rem;
text-align: center;

@media (width <= 768px) {
  font-size: calc(1em + 0.5vw);
  margin: 1em;
}


`;

const Back = styled.div`
position: absolute;
width: 100%;
height: 100%;
overflow: hidden;
top: 0;
left: 0;
border-radius: 0 50px 0 50px;
border: 1px solid ${props => props.theme.text};
backface-visibility:hidden;
transform: rotateY(180deg);
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
font-size: 100%;
`;


const Image = styled.div`
background-image: ${props => `url(${props.img})`};
width: 81%;
height: 45%;
margin: 1.8rem;
background-position: center center;
background-size:cover;

`;

const Tags = styled.div`
border-top: 2px solid ${props => props.theme.text};
margin-right: 1.9rem;
margin-left: 1.63rem;
margin-top: -1rem;
display: flex;
justify-content: start;
align-items: center;

&>*{
  margin-top: 0.6rem;
}

@media (width <= 768px) {
  margin-top: 1rem;
  &>*{
  margin-top: 1rem;
}
}

`;

const Tag = styled.span`
margin-right: 1rem;
font-size: calc(0.9em + 0.4vw);

@media (width <= 768px) {
  font-size: calc(1.3rem + 0.4vw);
}

`;

const Footer =styled.footer`
display: flex;
justify-content: space-between;
align-items: center;
padding: 2rem;
margin-top: 1rem;
//background-color: aliceblue;
@media (width <= 768px) {
  margin-top: 3em;
  padding: 2.3em;
}

`;

const Link = styled(NavLink)`
background-color:  ${props => props.theme.text};
color:  ${props => props.theme.body};
text-decoration: none;
padding: 0.5rem calc(2rem + 2vw);
border-radius: 0 0 0 50px;
font-size: calc(1em + 0.5vw);


`;

const Git = styled(NavLink)`
color: inherit;
text-decoration: none;
fill: ${props => props.theme.text};
`;

// Framer-motion Configuration

const Item = {
  hidden: {
    scale: 0,
  },

  show: {
    scale:1,
    transition: {
      type: 'spring',
      duration: 0.5,
    }
  }

}
const Card = (props) => {
  const {id, name, description, imgSrc, tags, demo, github} = props.data;
  return (
    <Box key={id} variants={Item}>
      <TheCard>
        <Front>
        <Title>{name}</Title>
        <Description>
          {description}
        </Description>
        </Front>
        <Back>
          <Image img={imgSrc} alt='no image' />
          <Tags>
            {
              tags.map((t,id) => {
                return <Tag key={id}>#{t}</Tag>
              })
            }
          </Tags>
          <Footer>
            <Link to={demo} target = "_blank">
              Visit
            </Link>
            <Git to={github} target = "_blank">
              <Github width={30} height={30}
    />      </Git>
          </Footer>
        </Back>
      </TheCard>


    </Box>
  )
}

Card.propTypes = {
  data: PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string), // Assuming tags is an array of strings
  demo: PropTypes.string, // Assuming demo is a string
  github: PropTypes.string, // Assuming github is a string
  }).isRequired,
};

export default Card;
