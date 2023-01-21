import * as React from "react";

import { BsCheck2 } from "react-icons/bs";
import { formatCurrency } from "../utils/numberToRupiah";
import styled from "styled-components";
import { SummaryContext } from "../context/SummaryContext";

const CardStyled = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  p {
    margin: 0.5rem 0;
  }
`;
interface ICard {
  onClick: () => void;
  name: string;
  cost?: number;
  type: string;
}
const Card: React.FC<ICard> = ({ onClick, cost, name, type }) => {
  const { shipment, paymentMethod } = React.useContext(SummaryContext);
  return (
    <div>
      {type === "shipment" ? (
        <CardStyled onClick={onClick}>
          <div>
            <p>{name}</p>
            <p>{cost && formatCurrency(cost)}</p>
          </div>
          {name === shipment.name && <BsCheck2 />}
        </CardStyled>
      ) : (
        <CardStyled onClick={onClick}>
          <div>
            <p>{name}</p>
          </div>
          {name === paymentMethod && <BsCheck2 />}
        </CardStyled>
      )}
    </div>
  );
};

export default Card;
