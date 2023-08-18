import React from "react";
import styled from "styled-components";

const Ad = () => {
  return (
    <Container>
      <div className="ad__container">
        <div className="chat">
          <i className="bx bx-chat"></i>
        </div>
        <div className="ad__text">
          <h2>Have a project in mind?</h2>
          <p>
            Your's True'ly Is Always Ready To Deliver Amazing Results, Come On
            Don't Be Shy Hit Me Up.
          </p>
        </div>
        <div className="ad__btn">
          <button className="btn">
            <i className="bx bx-paper-plane"></i>
            <a
              href="mailto:harrismuizz10@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Let's talk
            </a>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Ad;

const Container = styled.div`
  background: var(--color-primary);
  padding: 35px 20px;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  @media (max-width: 768px) {
    padding: 25px 20px;
  }

  .ad__container {
    display: flex;
    justify-content: center;
    gap: 4rem;
    margin: 10px 0;

    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
      align-items: center;
    }

    .chat {
      i {
        color: var(--color-white);
        font-size: 40px;
      }
    }

    .ad__text {
      width: 50%;

      @media (max-width: 768px) {
        width: 70%;
      }
      h2 {
        font-size: var(--fs-xl);
        color: var(--color-white);
        margin-bottom: 10px;
      }

      p {
        font-size: var(--fs-md);
        color: var(--color-white);
      }
    }

    .ad__btn {
      button {
        padding: 15px 20px;
        background: var(--color-bg-primary);
        border: none;
        border-radius: 5px;
        cursor: pointer;
        text-align: center;
        font-size: 14px;
        color: var(--color-white);
        display: flex;
        align-items: center;
        gap: 4px;
        margin-left: 10px;

        a {
          color: var(--color-text);
          font-size: var(--fs-md);
        }

        &:hover {
          transform: scale(1.02);
          transition: var(--transition);
          background: var(--color-bg-secondary);
        }
      }
    }
  }
`;
