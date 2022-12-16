import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/amondz_logo.jpg";

function Header() {
  return (
    <Wrapper>
      <StyledLink to="/">
        <LogoImg src={Logo} alt="아몬드 로고" />
      </StyledLink>
      <StyledLink to="/">상품 등록</StyledLink>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px auto;
  max-width: 1920px;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.gray100};
  @media ${({ theme }) => theme.mediaQuery.mobile} {
    font-size: ${({ theme }) => theme.fontSize.md};
    padding: 15px;
    column-gap: 20px;
    height: 53px;
  }
  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.fontSize.lg};
    padding: 30px;
    column-gap: 40px;
    height: 73px;
  }
  @media ${({ theme }) => theme.mediaQuery.desktop} {
    font-size: ${({ theme }) => theme.fontSize.lg};
    padding: 30px;
    column-gap: 40px;
    height: 73px;
  }
`;

const LogoImg = styled.img`
  width: 100px;
  @media ${({ theme }) => theme.mediaQuery.mobile} {
    width: 80px;
  }
  @media ${({ theme }) => theme.mediaQuery.tablet} {
    width: 100px;
  }
  @media ${({ theme }) => theme.mediaQuery.desktop} {
    width: 100px;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  color: ${({ theme }) => theme.colors.gray400};
  text-decoration: none;
  font-size: ${({ theme }) => theme.colors.xl};
  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export default Header;
