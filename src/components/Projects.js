import React from "react";
import styled from "styled-components";
import SectionHeader from "../UI/SectionHeader";

const Projects = () => {
  return (
    <Container id="projects">
      <SectionHeader
        icon="file"
        title="My Projects"
        subtitle="Each project is a unique piece of development"
      />

      <Cards>
        <Card>
          <div className="card__img">
            <img src="/img/disney.png" alt="" />
          </div>
          <div className="card__text">
            <h2>Disney-clone Website</h2>
            <p>
              This is very similar to the original disney plus website. it has a
              navbar with cool click effect same as disney+ and it also has a
              slider or carousel with infinity or endless effect.it also has a
              movie cards. with awesome hover effects.
            </p>
            <div className="directory">
              <div className="live__demo">
                <i className="bx bx-exit"></i>
                <a href="https://disney-clone-nu-inky.vercel.app">Live Demo</a>
              </div>
              <div className="git__hub">
                <i className="bx bxl-github"></i>
                <a href="https://github.com/Abdulmuizz10/Disney-clone">
                  Github
                </a>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="card__img">
            <img src="/img/tesla.png" alt="" />
          </div>
          <div className="card__text">
            <h2>Tesla-clone website</h2>
            <p>
              A responsive real-like tesla clone created with
              ReactJs,React-router and Styled-components. it has nice slick
              design with smooth animation transitions and also amazing pages
              that also features cool graphic images.
            </p>
            <div className="directory">
              <div className="live__demo">
                <i className="bx bx-exit"></i>
                <a href="https://tesla-clone-9ac75.web.app">Live Demo</a>
              </div>
              <div className="git__hub">
                <i className="bx bxl-github"></i>
                <a href="https://github.com/Abdulmuizz10/Tesla-clone">Github</a>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="card__img">
            <img src="/img/linked-in.png" alt="" />
          </div>
          <div className="card__text">
            <h2>Linked-in Clone website</h2>
            <p>
              This is a responsive linked-in clone created with ReactJs.This
              clone also has an amazing feature which is creation and also
              deleting posts to wrap this up you can also add images to posts
              which gives users original linked-in live experience.
            </p>
            <div className="directory">
              <div className="live__demo">
                <i className="bx bx-exit"></i>
                <a href="https://linked-in-clone-henna.vercel.app/">
                  Live Demo
                </a>
              </div>
              <div className="git__hub">
                <i className="bx bxl-github"></i>
                <a href="https://github.com/Abdulmuizz10/Linked-in-clone">
                  Github
                </a>
              </div>
            </div>
          </div>
        </Card>
        {/* <Card>
            <div className="card__img">
              <img src="/img/netflix.png" alt="" />
            </div>
            <div className="card__text">
              <h2>Netflix-clone website</h2>
              <p>
                This is a simple Netflix clone created with Reactjs. which has a
                local sign in and login authentication that stores user
                cresidentials in the browser for accessing the main hompage.
                this clone has an amazing carousel slider with cool movie card
                hover effect that reveals movie trailer and info's about the
                movie.
              </p>
              <div className="directory">
                <div className="live__demo">
                  <i className="bx bx-exit"></i>
                  <a href="#">Live Demo</a>
                </div>
                <div className="git__hub">
                  <i className="bx bxl-github"></i>
                  <a href="#">Github</a>
                </div>
              </div>
            </div>
          </Card> */}
      </Cards>
    </Container>
  );
};

export default Projects;

const Container = styled.div``;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  @media (max-width: 768px) {
    justify-content: space-evenly;
  }
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;
  border-radius: 10px;
  width: 100%;
  height: 290px;
  margin: 30px auto;
  justify-content: center;

  &:nth-child(2) {
    .card__img {
      order: 2;
    }
  }

  &:nth-child(4) {
    .card__img {
      order: 2;
    }
  }

  @media (max-width: 1024px) {
    gap: 2rem;
    grid-template-columns: 1fr;
    height: 100%;
    border: 2px solid var(--color-border);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    &:nth-child(2) {
      .card__img {
        order: 0;
      }
    }

    &:nth-child(4) {
      .card__img {
        order: 0;
      }
    }
  }

  @media (max-width: 568px) {
    gap: 0rem;
    grid-template-columns: 1fr;
  }

  .card__img {
    max-width: 100%;
    border: 4px solid var(--color-border);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border-radius: 10px;

    @media (max-width: 1024px) {
      box-shadow: none;
      border: none;
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      overflow: none;

      @media (max-width: 1200px) {
        height: 95%;
      }

      @media (max-width: 768px) {
        height: 90%;
      }
    }
  }

  .card__text {
    text-align: center;
    margin: auto;
    @media (max-width: 1024px) {
      margin-bottom: 30px;
    }

    h2 {
      font-size: var(--fs-xl);
      color: transparent;
      margin-bottom: 20px;
      -webkit-text-stroke: 1px var(--color-primary);

      @media (max-width: 568px) {
        margin-bottom: 10px;
      }
    }

    p {
      font-size: var(--fs-md);

      @media (max-width: 1024px) {
        width: 70%;
        margin: auto;
      }

      @media (max-width: 768px) {
        width: 80%;
        margin: auto;
        font-size: 1.3rem;
      }

      @media (max-width: 568px) {
        width: 70%;
      }
    }

    .directory {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px 0 5px;
      gap: 2.5rem;

      .live__demo {
        display: flex;
        align-items: center;
        i {
          font-size: 25px;
          color: var(--color-primary);
          margin-right: 5px;
        }
        a {
          color: white;
          font-size: var(--fs-md);
          transition: var(--transition);

          &:hover {
            color: var(--colo-text);
          }
        }
      }

      .git__hub {
        display: flex;
        align-items: center;
        i {
          font-size: 25px;
          color: var(--color-primary);
          margin-right: 5px;
        }
        a {
          color: white;
          font-size: var(--fs-md);
          transition: var(--transition);

          &:hover {
            color: var(--colo-text);
          }
        }
      }
    }
  }
`;
