import React from "react";
import styled from "styled-components";

import img1 from "../assets/Images/videoejemploabout.mp4";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  position: relative;
  display: flex;
  background-color: #022e3dff;
  color: #fff;

  @media (max-width: 48em) {
    flex-direction: column;
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
  font-size: 1.9rem;
  font-weight: 300;
  z-index: 5;
  margin-top: 15%;
  display: flex;
  flex-direction: column;
  color: #fff;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    margin: 0 auto;
    padding: 2rem;
    font-weight: 600;
    backdrop-filter: blur(2px);
    background-color: rgba(255, 255, 255, 0.1);
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

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 2rem;

  li {
    margin-bottom: 1rem;
    font-weight: 400;
    font-size: 1.2rem;
    display: flex;
    align-items: center;

    &::before {
      content: "✔️";
      margin-right: 0.5rem;
    }
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  video {
    width: 100%;
    max-width: 700px;
    height: auto;
    display: block;
    border-radius: 10px;
  }

  @media (max-width: 64em) {
    width: 100%;
    margin-top: 2rem;

    video {
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
  color: #fff;

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
    <Section className="about">
      <ContentWrapper>
        <Title>
        </Title>
        <Left>
          <br />
          <p>
            Plataforma digital para la gestión, visibilidad y desarrollo de torneos
            y ligas de vóley.
            <br />
            <br />
            Ofrecemos soluciones para federaciones, clubes y
            deportistas, facilitando estadísticas, programación de partidos, fichaje
            de jugadores y mucho más.
          </p>
          <br />
          <List>
            <li>Gestioná fichajes, calendarios, torneos, arbitrajes, estadísticas y mucho más.</li>
            <li>Centralizá toda la información de tus jugadores, equipos y entrenadores.</li>
            <li>Ahorrá tiempo con herramientas pensadas específicamente para el vóley.</li>
            <li>Accedé a soporte técnico y actualizaciones constantes.</li>
          </List>
        </Left>

        <Right>
          <video 
            src={img1} 
            autoPlay 
            muted 
            loop 
            playsInline
          />
        </Right>
      </ContentWrapper>
    </Section>
  );
};

export default About;
