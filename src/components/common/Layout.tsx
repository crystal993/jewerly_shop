import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
`;

const Main = styled.div`
  margin: 0 auto;
  @media ${({ theme }) => theme.mediaQuery.mobile} {
    width: 100%;
    padding: 15px;
  }
  @media ${({ theme }) => theme.mediaQuery.tablet} {
    width: 100%;
    padding: 30px;
  }
  @media ${({ theme }) => theme.mediaQuery.desktop} {
    width: 70%;
    padding: 40px;
  }
`;

export default Layout;
