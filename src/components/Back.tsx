import * as React from "react";

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { FormContex } from "../context/FormContext";
import { SummaryContext } from "../context/SummaryContext";

const BackStyled = styled.div<{ marginY?: string }>`
  align-items: center;
  display: flex;
  cursor: pointer;
  margin-top: ${({ marginY }) => marginY};
  margin-bottom: ${({ marginY }) => marginY};
  p {
    margin-left: 1rem;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const Back: React.FC<{ marginY?: string; label?: string }> = ({ marginY, label }) => {
  const history = useHistory();
  const { setShipment, setPaymentMethod } = React.useContext(SummaryContext);
  const { setIsEmail, setIsAddress, setIsDropshipPhone, setIsPhone, setIsNameDropship } = React.useContext(FormContex);
  return (
    <BackStyled
      marginY={marginY}
      onClick={() => {
        if (label === "Homepage") {
          history.push("/");
          setShipment({
            name: "",
            cost: 0,
            estimate: "",
          });
          setPaymentMethod("");
          setIsEmail("default");
          setIsAddress("default");
          setIsDropshipPhone("default");
          setIsNameDropship("default");
          setIsPhone("default");
          localStorage.setItem("data", "");
        } else {
          history.goBack();
        }
      }}
    >
      <AiOutlineArrowLeft color="#646464" />
      <p>Back to {label}</p>
    </BackStyled>
  );
};

export default Back;
