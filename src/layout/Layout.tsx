import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Delivery from "../pages/Delivery";
import Finish from "../pages/Finish";
import Payment from "../pages/Payment";
import React from "react";
import Step from "../components/Step";
import styled from "styled-components";

const LayoutStyled = styled.div`
  background-color: #fffae6;
  padding: 2rem;
  .wrap-step {
    display: none;
  }
  @media (min-width: 1024px) {
    .wrap-step {
      padding: 1rem;
      background-color: #fffae6;
      border-radius: 50px;
      width: 500px;
      display: flex;
      justify-content: center;
      margin: auto;
      position: relative;
      top: 35px;
    }
  }
`;
const ContainerStyled = styled.div`
  background-color: #fff;
  height: auto;
  padding: 2rem;
`;

const Layout = () => {
  return (
    <Router>
      <LayoutStyled>
        <div className="wrap-step">
          <Step label="Delivery" no={1} />
          <Step label="Payment" no={2} />
          <Step label="Summary" no={3} />
        </div>
        <Switch>
          <ContainerStyled>
            <Route exact path="/">
              <Delivery />
            </Route>
            <Route path="/payment">
              <Payment />
            </Route>
            <Route path="/finish">
              <Finish />
            </Route>
          </ContainerStyled>
        </Switch>
      </LayoutStyled>
    </Router>
  );
};

export default Layout;
