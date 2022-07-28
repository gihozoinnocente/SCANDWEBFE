import styled from "styled-components";
// import styled from 'styled-components/native';
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  /* height: ${(props) => (props.extendNavbar ? "100vh" : "80px")}; */
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  height: 80px;


  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
color: black;
text-decoration: none;
margin: 10px; 
width: 65px;
height: 20px;
font-family: 'Raleway';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 120%;
  &:hover{
    /* margin-bottom: 10px; */
    border-bottom: 2px solid #5ECE7B ;
    color: #5ECE7B;
  };
  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: black;
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const BodyContainer = styled.div`
 background-color: grey;
 height: 588px;


 @media (max-width: 700px) {
  height: 800px;
  }
`
export const BodyTitle = styled.div`
   margin-left:0px; 
   color:red;
`

