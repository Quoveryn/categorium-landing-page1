import React from "react";
import styled from "styled-components";

import img1 from "../assets/Images/1.webp"; // Reemplazalo con tu imagen real, por ejemplo: "categorium-banner.png"

const Section = styled.section`
  min-height: 100vh;
  width: 100vw; 
  margin: 0;
  position: relative;
  display: flex;
  background-color: #022e3dff; 
  color: #fff; 

  @media (max-width: 48em) {
    width: 100vw;
    flex-direction: column;
  }

  @media (max-width: 30em) {
    width: 100vw;
  }
`;

const ContentWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: flex;
  position: relative;

  @media (max-width: 48em) {
    width: 90vw;
    flex-direction: column;
  }

  @media (max-width: 30em) {
    width: 100vw;
  }
`;

const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 15%;
  display: flex;
  flex-direction: column;
  color: #fff; /* Asegurar texto blanco */

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    margin: 0 auto;
    padding: 2rem;
    font-weight: 600;
    
    backdrop-filter: blur(2px);
    background-color: rgba(255, 255, 255, 0.1); /* Fondo ligeramente transparente */
    border-radius: 20px;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    padding: 2rem;
    width: 90%;
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    display: block;
  }

  @media (max-width: 64em) {
    width: 100%;
    margin-top: 2rem;
    
    img {
      max-width: 90%;
    }
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Kaushan Script";
  font-weight: 300;
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;
  color: #fff; /* Título blanco */

  span {
    display: inline-block;
  }

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontBig} - 5vw)`};
    top: 0;
    left: 0%;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxxl};
  }
`;

const About = () => {
  return (
    <Section id="fixed-target" className="about">
      <ContentWrapper>
        <Title
          data-scroll
          data-scroll-speed="-2"
          data-scroll-direction="horizontal"
        >
          ¿Que es?
        </Title>

        <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
          <p>
            <strong></strong>
          </p>
          <br />
          Plataforma digital para la gestión, visibilidad y desarrollo de torneos
          y ligas de vóley. Ofrecemos soluciones para federaciones, clubes y
          deportistas, facilitando estadísticas, programación de partidos, fichaje
          de jugadores y mucho más.
          <br />
          <br />
          Nuestro sistema permite seguir cada jugada como si estuvieras en la
          cancha.
        </Left>

        <Right>
          <img src={img1} alt="Categorium Banner" />
        </Right>
      </ContentWrapper>
    </Section>
  );
};

export default About;