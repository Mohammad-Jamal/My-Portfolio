import React from 'react'
//import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import * as PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Box = styled(motion.a)`
width: calc(10rem + 15vw);
text-decoration: none;
height: 20rem;
padding: 1rem; 
color: ${props => props.theme.text};
border: 2px solid ${props => props.theme.text};
backdrop-filter: blur(1px);
box-shadow: 0 0 1rem 0 rgba(0,0,0,0.2);
cursor: grab;

display: flex;
flex-direction: column;
z-index: 5;

&:hover {
  color: ${props => props.theme.body};
  background-color: ${props => props.theme.text};
  transition: all  0.4s ease;
}

@media (width <= 768px) {
  //width: calc(15rem + 17vw);
  width: 65vw;
  height: 23rem;
  //height: 30vh;
}

`;

const Image = styled.div`
background-image: ${props => `url(${props.img})`};
width: 100%;
height: 60%;
background-size: cover;
border: 1px solid transparent;
background-position:  center center;

${Box}:hover &{
  border: 1px solid ${props => props.theme.body};
}

@media (width <= 768px) {
  background-size: 100% 100%;
}

`;

const Title = styled.h3`
color: inherit;
padding: 0.5rem 0;
padding-top:  1rem;
font-family: 'Karla', sans-serif;
font-weight: 700;
border-bottom: 1px solid ${props => props.theme.text};

${Box}:hover &{
  border-bottom: 1px solid ${props => props.theme.body};
}

`;

const HashTags = styled.div`
padding: 0.5rem 0;
`;

const Tag = styled.span`
padding-right: 0.5rem;
`;

const Date = styled.span`
padding: 0.5rem 0;
`;

const Container = styled(motion.div)``;

// Framer motion configuration
const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};



const BlogComponent = (props) => {
  const {name,tags,date,imgSrc,link} = props.blog;
  return (
    <Container variants={Item}>
      <Box target='_blank' href={`${link}`} >
        <Image img={imgSrc} />
        <Title>{name}</Title>
        <HashTags>
          {
            tags.map((t,id) => {
              return <Tag  key={id}>#{t}</Tag>
            })
          }
        </HashTags>
        <Date>
          {date}
        </Date>
      </Box>
    </Container>

  )
}

BlogComponent.propTypes = {
  blog: PropTypes.shape({
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string), // Assuming tags is an array of strings
  link: PropTypes.string, // Assuming demo is a string // Assuming github is a string
  }).isRequired,
};

export default BlogComponent
