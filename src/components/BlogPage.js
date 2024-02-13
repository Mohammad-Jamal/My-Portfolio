import React, { useEffect, useState } from "react";
import styled from "styled-components";
import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";

import { Blogs } from "../data/BlogData";
import BlogComponent from "./BlogComponent";
import BigTitle from "../subComponents/BigTitle";
import { motion } from "framer-motion";
import ToggleFullscreen from "./ToggleFullscreen";



const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100vw;
  height: 100vh;

  @media (width <= 768px) {
    height: auto;
  }

`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.7)`};
  width: 100%;
  height: 100%;
  position: relative;
  @media (width <= 768px) {
    padding-bottom: 1rem;
    height: 100vh;
  }

`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 18vw), 1fr));
  grid-gap: calc(1rem + 3vw);

  @media (width <= 768px) {
    grid-template-columns: repeat(1, minmax(calc(10rem + 18vw), 1fr));
    place-items: center;
  }

`;
//For Framer Motion Configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const BlogPage = () => {
  const [replace, setReplace] = useState(window.innerWidth <= 768 ? '5%' : '50%');

  useEffect(() => {
    const hanldeReplace = () => {
      setReplace(window.innerWidth <= 768 ? '5%' : '50%');
    }

    window.addEventListener('resize',hanldeReplace);
    return () => {
      window.removeEventListener('resize',hanldeReplace);
    }
  },[])
  return (
    <MainContainer
      variants={container}
      initial="hidden"
      animate="show"
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}
    >
      
      <Container>
      <ToggleFullscreen/>
        <LogoComponent theme="light" />
        <PowerButton />
        <SocialIcons theme="light" />
        <Center>
          <Grid>
            {Blogs.map((blog, id) => {
              return <BlogComponent key={id} blog={blog} />;
            })}
          </Grid>
        </Center>
      </Container>
      <BigTitle text="FEATURES" top="10%" left={replace} right={replace} />
    </MainContainer>
  );
};

export default BlogPage;
