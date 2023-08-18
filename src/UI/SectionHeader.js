import React from "react";
import styled from "styled-components";

const SectionHeader = ({ icon, title, subtitle }) => {
  return (
    <Container>
      <div className="section__header">
        <i className={`bx bx-${icon}`}></i>
        <h2 className="section__tile">{title}</h2>
      </div>
      <span className="section__subtitle">{subtitle}</span>
    </Container>
  );
};

export default SectionHeader;

const Container = styled.div`
  margin-bottom: 10px;
  .section__header {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 7px;

    h2 {
      font-size: var(--fs-xl);
      color: var(--color-primary);
    }

    i {
      background: var(--color-primary);
      font-size: 25px;
      padding: 8px;
      border-radius: 3px;
      color: var(--color-white);
    }
  }

  span {
    font-size: var(--fs-md);
    font-weight: var(--fw-bold);
    color: var(--color-white);
  }
`;
