import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Importa tu logo
import logoCategorium from '../assets/Images/logo_categorium.png';

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 6;

  width: 100%;
  width: fit-content;

  a {
    width: 100%;
    display: flex;
    align-items: flex-end;
  }

  img {
    width: 8rem; 
    height: auto;
    object-fit: contain;
    
    @media (max-width: 48em) {
      width: 6rem;
    }
  }
`;

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  padding-bottom: 0.5rem;
  margin-left: 0.5rem;
`;

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    
    transition: {
      duration: 2,
      delay: 3,
      ease: 'easeInOut',
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: -5,
    
    transition: {
      duration: 2,
      delay: 5,
      ease: 'easeInOut',
    },
  },
};

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <motion.img
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          src={logoCategorium}
          alt="Categorium"
        />
        
        <Text variants={textVariants} initial="hidden" animate="visible">
        </Text>
      </Link>
    </Container>
  );
};

export default Logo;