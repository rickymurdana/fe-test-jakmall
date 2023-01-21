import { IoIosArrowForward } from "react-icons/io";
import React from "react";
import styled from "styled-components";

const StepStyled = styled.div`
  margin: 1rem 0rem;
  display: flex;
  align-items: center;
  h3 {
    margin-left: 0.5rem;
    color: #ff8a00;
    margin-right: 1rem;
  }
  .active {
    background-color: #ff8a00;
  }
  p {
    background: #ff8a00;
    // opacity: 0.5;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    color: #ffffff;
  }
  @media (min-width: 1024px) {
    margin: 0 1rem;
  }
`;

interface IStep {
  no: number;
  label: string;
}

const Step: React.FC<IStep> = ({ no, label }) => {
  return (
    <StepStyled>
      <p>{no}</p>
      <h3>{label}</h3>
      {no === 3 ? "" : <IoIosArrowForward color="#FF8A00" />}
    </StepStyled>
  );
};
export default Step;
