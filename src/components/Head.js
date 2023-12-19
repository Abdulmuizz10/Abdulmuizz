import React, { useState } from "react";
import styled from "styled-components";

const Head = () => {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <Header>
      <div className="logo">
        <p>Developer</p> <i className="bx bx-code-alt"></i>
      </div>

      <Navbar className="navbar__list">
        <li className="navbar__list_item">
          <a href="#home">Home</a>
        </li>
        <li className="navbar__list_item">
          <a href="#about">About me</a>
        </li>
        <li className="navbar__list_item">
          <a href="#projects">Projects</a>
        </li>
        <li className="navbar__list_item">
          <a href="#contacts">Contacts</a>
        </li>
      </Navbar>

      <div className="open">
        <i className="bx bx-menu" onClick={() => setOpenNavbar(true)}></i>
      </div>

      {openNavbar && (
        <MobileNavBar>
          <div className="close">
            <i className="bx bx-x" onClick={() => setOpenNavbar(false)}></i>
          </div>
          <MobileNav>
            <li
              className="navbar__list_item"
              onClick={() => setOpenNavbar(false)}
            >
              <a href="#home">Home</a>
            </li>
            <li
              className="navbar__list_item"
              onClick={() => setOpenNavbar(false)}
            >
              <a href="#about">About me</a>
            </li>
            <li
              className="navbar__list_item"
              onClick={() => setOpenNavbar(false)}
            >
              <a href="#projects">Projects</a>
            </li>
            <li
              className="navbar__list_item"
              onClick={() => setOpenNavbar(false)}
            >
              <a href="#contacts">Contacts</a>
            </li>
            <a
              href="mailto:harrismuizz10@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="btn">
                {" "}
                <i className="bx bx bx-paper-plane"></i>Hit me up 👍
              </button>
            </a>
          </MobileNav>
        </MobileNavBar>
      )}
    </Header>
  );
};

export default Head;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 30px var(--big-screen);
  background: var(--color-bg-primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  animation: animatenav 0.5s linear;
  @media (max-width: 1024px) {
    padding: 25px var(--small-screen);
  }

  .logo {
    display: flex;
    align-items: center;

    p {
      font-size: var(--fs-md);
      color: var(--color-white);
    }

    i {
      font-size: 20px;
      color: var(--color-primary);
    }
  }

  .open {
    color: var(--color-white);
    font-size: 30px;
    cursor: pointer;

    display: none;

    @media (max-width: 1024px) {
      display: block;
    }
  }
`;

const Navbar = styled.nav`
  display: flex;
  gap: 2rem;
  font-size: var(--fs-md);

  li a {
    color: var(--color-text);

    &:hover {
      color: var(--color-primary);
      transition: var(--transition);
    }
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const MobileNavBar = styled.div`
  display: none;
  position: relative;
  background: var(--color-bg-primary);
  animation: slideIn 0.5s;

  @media (max-width: 1024px) {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    width: 100%;
    z-index: 1000;
  }

  .close {
    position: absolute;
    top: 25px;
    right: var(--big-screen);

    @media (max-width: 1024px) {
      right: var(--small-screen);
    }

    i {
      color: var(--color-white);
      font-size: 30px;
      cursor: pointer;
    }
  }

  button {
    padding: 10px 12px;
    background: var(--color-primary);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    font-size: 14px;
    color: var(--color-white);
    display: flex;
    align-items: center;
    gap: 2px;

    &:hover {
      transform: scale(1.1);
      transition: var(--transition);
    }
  }
`;

const MobileNav = styled.nav`
  flex-direction: column;
  font-size: var(--fs-md);
  text-align: center;

  li {
    margin: 40px 0;
  }

  li a {
    color: var(--color-text);

    &:hover {
      color: var(--color-primary);
      transition: var(--transition);
    }
  }
`;
