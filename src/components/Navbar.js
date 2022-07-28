import React, { Component  } from 'react'
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "../styles/Navbar.style";

export default class Navbar extends Component {
  render() {
    // const [extendNavbar, setExtendNavbar] = useState(false);
    return (
      // <NavbarContainer extendNavbar={extendNavbar}>
         <NavbarContainer>
             <NavbarInnerContainer>
             <LeftContainer>
                 <NavbarLinkContainer>
                 <NavbarLink to="/women"> WOMEN</NavbarLink>
                   <NavbarLink to="/men"> MEN</NavbarLink>
                   <NavbarLink to="/kids"> KIDS</NavbarLink>
                   {/* <OpenLinksButton
                     onClick={() => {
                       setExtendNavbar((curr) => !curr);
                     }}
                   >
                    {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
                </OpenLinksButton> */}
                </NavbarLinkContainer>
              </LeftContainer>
            </NavbarInnerContainer>
            {/* {extendNavbar && (
              <NavbarExtendedContainer>
                <NavbarLinkExtended to="/women"> WOMEN</NavbarLinkExtended>
                <NavbarLinkExtended to="/men"> MEN</NavbarLinkExtended>
                <NavbarLinkExtended to="/kids"> KIDS</NavbarLinkExtended>
              </NavbarExtendedContainer>
            )} */}
          </NavbarContainer>
    )
  }
}
