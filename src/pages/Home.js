import React from "react";
import Head from "../components/Head";
import styled from "styled-components";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Ad from "../UI/Ad";

const Home = () => {
  return (
    <>
      <Head />
      <Section>
        <Hero />
      </Section>
      <Section>
        <About />
      </Section>
      <Section>
        <Projects />
      </Section>
      <Section>
        <Ad />
      </Section>
      <Contact />
    </>
  );
};

export default Home;

const Section = styled.div`
  padding: 100px var(--big-screen);

  @media (max-width: 1024px) {
    padding: 100px var(--small-screen);
  }
`;
