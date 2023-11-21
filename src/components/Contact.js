import React from "react";
import styled from "styled-components";

const Contact = () => {
  const date = new Date();
  const updatedYear = date.getFullYear();

  console.log(updatedYear);
  return (
    <Container id="contacts">
      <Content>
        <div className="socials__contact">
          <h3>My social media handles</h3>
          <div className="socials__wrapper">
            <a
              href="https://www.facebook.com/profile.php?id=100089375211792"
              target="_blank"
              rel="noreferrer  noopener"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="" target="_blank" rel="noreferrer  noopener">
              <i className="bx bxl-instagram"></i>
            </a>
            <a
              href="https://wa.me/+2348067028516"
              target="_blank"
              rel="noreferrer  noopener"
            >
              <i className="bx bxl-whatsapp"></i>
            </a>
          </div>
        </div>
        <div className="email__wrapper">
          <h3>
            <>Email me</>
          </h3>
          <a
            href="mailto:harrismuizz10@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            harrismuizz10@gmail.com
          </a>
        </div>
        <div className="contact__wrapper">
          <h3>
            <>Call me</>
          </h3>
          <a href="#">+(234) 80-670-285-16</a>
        </div>
      </Content>

      <CopyWrite>
        <div>©{updatedYear} All Rights Reserved | By Abdul Muizz</div>
      </CopyWrite>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  padding: 65px var(--big-screen);
  background-color: var(--color-bg-footer);

  @media (max-width: 1024px) {
    padding: 65px var(--small-screen);
  }

  .socials__contact {
    display: flex;
    flex-direction: column;
    align-items: start;
    h3 {
      font-size: 1.8rem;
      margin-bottom: 10px;
      color: var(--color-white);
    }
    .socials__wrapper {
      display: flex;
      gap: 1rem;
      & > a {
        font-size: 30px;
        color: var(--color-primary);
        cursor: pointer;

        &:hover {
          transition: var(--transition);
          color: var(--color-primary-dark);
        }
      }
    }
  }

  .email__wrapper {
    h3 {
      font-size: 1.8rem;
      margin-bottom: 10px;
      color: var(--color-white);
    }

    a {
      font-size: var(--fs-lg);
      color: var(--color-text);
      text-decoration: underline;

      &:hover {
        transition: var(--transition);
        color: var(--color-white);
      }
    }
  }

  .contact__wrapper {
    h3 {
      font-size: 1.8rem;
      margin-bottom: 10px;
      color: var(--color-white);
    }

    a {
      font-size: var(--fs-lg);
      color: var(--color-text);
      text-decoration: underline;

      &:hover {
        transition: var(--transition);
        color: var(--color-white);
      }
    }
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;
  border-bottom: 1px solid var(--color-border);
  padding: 30px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
  }
`;

const CopyWrite = styled.div`
  padding: 20px 0 0;

  div {
    text-align: center;
    font-size: var(--fs-md);
    margin-top: 10px;
  }
`;
