import * as React from "react";

import Back from "../components/Back";
import HeadingStyled from "../styled/HeadingStyled";
import Summary from "../components/Summary";
import styled from "styled-components";
import { SummaryContext } from "../context/SummaryContext";

const FinishStyled = styled.div`
  .finish {
    /* position: relative; */
    .wrap-finish {
    }
    p {
      margin: 1rem 0;
    }
    .order-id {
      margin-top: 2rem;
    }
  }
  @media (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    .finish {
      width: 30%;
      margin: 0 auto;
      margin-top: 6rem;
    }
  }
`;

const Finish: React.FC = () => {
  const { shipment } = React.useContext(SummaryContext);
  const randomStr = () => {
    let str = "";
    const chars = "23456789abcdefghijklmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
    for (let i = 6; i > 0; --i) {
      str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
  };
  return (
    <FinishStyled>
      <section className="finish">
        <HeadingStyled as="h2" marginY="1rem" size="36px">
          Thank you
        </HeadingStyled>
        <p className="order-id">Order ID : {randomStr()}</p>
        <p>
          Your order will be delivered {shipment.estimate} with {shipment.name}
        </p>
        <Back label="Homepage" />
      </section>
      <section className="summary">
        <Summary button="" />
      </section>
    </FinishStyled>
  );
};

export default Finish;
