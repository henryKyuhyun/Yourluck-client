import { Link } from "react-router-dom";
import styled from "styled-components";


export const BannerSection = styled.section`
  padding-top:50px;
  background-color: #B1ABF4;
  padding-bottom: 5rem;
`;

// Title

export const TitleText = styled.h1`
  font-size: 8rem;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: -30px;
  padding-left: 50px;

  @media (max-width: 768px) {
    font-size: 6rem;
  }
  @media (max-width: 480px) {
    font-size:4rem;
  }
`;

export const HeaderP = styled.p`
  font-style: normal;
  font-size: 3rem;
  font-weight: 700;
  padding-left: 50px;
`;


// MENUBAR

export const MenuNav = styled.nav`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  /* flex-direction: row; */
  flex-wrap: nowrap;
  margin-bottom: -70px;
`;

export const MenuCenter = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

export const MenuRight = styled.div`
  margin-left: auto;
`;

export const LinkForMenu = styled(Link)`
  color: #112;
  background-color: #A3DE9B;
  padding: 15px 30px;
  border-radius: 40px;
  font-size: 1.3rem;
  text-decoration: none;
  cursor: pointer;
  &:visited {
    color: #112;
  }
`;
export const LinkWithoutBackground = styled(Link)`
  color: #112;
  font-weight: 700;
  padding: 15px 30px;
  border-radius: 40px;
  font-size: 1.3rem;
  text-decoration: none;
  cursor: pointer;
  &:visited {
    color: #112;
  }
`;

// img
