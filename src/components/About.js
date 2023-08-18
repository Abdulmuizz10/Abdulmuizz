import React from "react";
import styled from "styled-components";
import SectionHeader from "../UI/SectionHeader";

const About = () => {
  return (
    <Container id="about">
      <div className="about__img">
        <img src="/img/about-img.jpg" alt="" />
      </div>
      <div className="about__text">
        <SectionHeader
          icon="face"
          title="About me"
          subtitle="A Dedicated Web-developer From Abuja, Nigeria."
        />
        {/* <p>
            I'm an experienced web Developer with 2 years of experience building
            amazing web applications with friendly user experience, here are the
            Technologies i work with.
          </p> */}

        <p>
          As a junior web developer i possess an impressive oriented of skills
          in HTML,CSS,Javascript,React,and SCSS. I excel in designing and
          maintaning responsive websites that offer a smooth user experience,
          Here are the Technologies i work with.
        </p>

        <div className="about__skills">
          <Card>
            <i className="bx bx-pen"></i>
            <p>Front-end</p>
            <ul className="skills__list">
              <li className="list__item">HTML</li>
              <li className="list__item">CSS</li>
              <li className="list__item">SCSS</li>
              <li className="list__item">JAVASCRIPT</li>
              <li className="list__item">JQUERY</li>
              <li className="list__item">REACT JS</li>
            </ul>
          </Card>
          <Card>
            <i className="bx bx-server"></i>
            <p>Back-end</p>
            <ul className="skills__list">
              <li className="list__item">NODE JS</li>
              <li className="list__item">EXPRESS JS</li>
              <li className="list__item">MONGO DB</li>
              <li className="list__item">PYTHON</li>
              <li className="list__item">FIREBASE</li>
            </ul>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default About;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 38% 52%;
  gap: 10%;
  justify-content: center;
  margin: auto;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .about__img {
    max-width: 400px;
    margin: 0 auto;

    @media (max-width: 968px) {
      order: 2;
      max-width: 800px;
      max-height: 500px;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  .about__text {
    p {
      font-size: var(--fs-md);
      width: 100%;
    }

    .about__skills {
      display: flex;
      align-items: center;
      margin-top: 35px;
      gap: 2rem;

      @media (max-width: 468px) {
        gap: 1rem;
      }
    }
  }
`;

const Card = styled.div`
  padding: 32px 30px;
  border: 2px solid var(--color-border);
  border-radius: 1rem 0 1rem;
  position: relative;
  width: 200px;
  height: 275px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  @media (max-width: 968px) {
    width: 50%;
  }

  @media (max-width: 468px) {
    width: 100%;
  }

  i {
    position: absolute;
    top: -20px;
    left: 15px;
    background: var(--color-bg-primary);
    padding: 7px;
    border-radius: 3px;
    border: 2px solid var(--color-border);
    color: var(--color-primary);
    font-size: 25px;
  }

  p {
    color: var(--color-primary);
    font-weight: var(--fw-bold);
  }

  li {
    margin: 10px 0;
    list-style-type: circle;
    font-size: 1.6rem;
  }
`;
