import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Container className="hero__container" id="home">
      <div className="hero__text">
        <h2>
          Hi,👋I Am <span>Abdulmuizz,</span> Web Developer 💻
        </h2>
        <p>
          I, Am a passionate web developer Based in <br />
          Abuja, Nigeria.
        </p>

        <a
          href="mailto:harrismuizz10@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <button>
            <i className="bx bx-paper-plane"></i> Hit me up 👍
          </button>
        </a>

        <div className="socials">
          <a
            href="https://www.facebook.com/profile.php?id=100089375211792"
            target="_blank"
            rel="noreferrer  noopener"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="" target="_blank" rel="noreferrer  noopener">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://wa.me/+2348067028516"
            target="_blank"
            rel="noreferrer  noopener"
          >
            <i className="bx bxl-whatsapp"></i>
          </a>
          <a
            href="https://github.com/Abdulmuizz10"
            target="_blank"
            rel="noreferrer  noopener"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </div>
      <div className="hero__img">
        <img src="/img/avatar.jpg" alt="" />
      </div>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  margin: auto auto;

  @media (min-width: 768px) {
    margin: -50px 0;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    margin: 50px auto;
  }
  .hero__text {
    animation: animateleft 1s linear;
    h2 {
      font-size: var(--fs-biggest);
      color: var(--color-white);

      span {
        -webkit-text-stroke: 1.7px var(--color-primary);
        color: transparent;
      }
    }
    p {
      font-size: var(--fs-md);
      margin: 5px 0;
    }

    button {
      padding: 13px 25px;
      margin: 10px 0 15px;
      border: 2px solid var(--color-border);
      border-radius: 1rem 0 1rem;
      background: var(--color-bg-primary);
      cursor: pointer;
      text-align: center;
      font-size: var(--fs-md);
      color: var(--color-white);
      display: flex;
      align-items: center;
      gap: 2px;

      &:hover {
        transform: scale(1.02);
        transition: var(--transition);
        background: var(--color-primary-dark);
      }
    }

    .socials {
      display: flex;
      align-items: center;
      gap: 1rem;

      i {
        color: var(--color-primary);
        font-size: 25px;
        cursor: pointer;
      }
    }
  }

  .hero__img {
    max-width: 350px;
    animation: animateright 1s linear;

    @media (max-width: 768px) {
      margin: auto;
    }

    img {
      width: 100%;
    }
  }
`;
