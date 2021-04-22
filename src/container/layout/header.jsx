import React from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components/macro";
import useAnimatedNavToggler from "container/helpers/useAnimatedNavToggler";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderLayout = () => {
  const history = useHistory();

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss = collapseBreakPointCssMap["lg"];
  const isAuth = useSelector((state) => state.isAuth);
  return (
    <header>
      <Header className="header-light">
        <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
          <LogoLink className="header-title" onClick={() => history.push("/")}>
            UET Hán - Nôm
          </LogoLink>
          <div className="cs-nav">
            <NavLink>About</NavLink>
            <NavLink>Blog</NavLink>
            <NavLink>Pricing</NavLink>
            <NavLink>Contact Us</NavLink>
            <NavLink tw="lg:ml-12!" hidden={isAuth}>
              <Link to="/auth/sign-in">Login</Link>
            </NavLink>
            <PrimaryLink hidden={isAuth}><Link to="/auth/sign-up" style={{color: "white"}}>Sign up</Link></PrimaryLink>
            <div className="cs-avt" hidden={!isAuth}>
              <img src="https://source.unsplash.com/random" alt="" />
            </div>
          </div>
        </DesktopNavLinks>

        <MobileNavLinksContainer
          css={collapseBreakpointCss.mobileNavLinksContainer}
        >
          <LogoLink className="header-title" onClick={() => history.push("/")}>
            UET Hán - Nôm
          </LogoLink>
          <MobileNavLinks
            initial={{ x: "150%", display: "none" }}
            animate={animation}
            css={collapseBreakpointCss.mobileNavLinks}
          >
            <div className="cs-nav">
              <NavLink>About</NavLink>
              <NavLink>Blog</NavLink>
              <NavLink>Pricing</NavLink>
              <NavLink>Contact Us</NavLink>
              <NavLink tw="lg:ml-12!">
                <Link to="/auth/sign-in">Login</Link>
              </NavLink>
              <PrimaryLink>Sign Up</PrimaryLink>
              <div className="cs-avt">
                <img src="https://source.unsplash.com/random" alt="" />
              </div>
            </div>
          </MobileNavLinks>
          <NavToggle
            onClick={toggleNavbar}
            className={showNavLinks ? "open" : "closed"}
          >
            {showNavLinks ? (
              <i class="fi-rr-cross"></i>
            ) : (
              <i class="fi-rr-menu-burger"></i>
            )}
          </NavToggle>
        </MobileNavLinksContainer>
      </Header>
    </header>
  );
};
const Header = tw.div`
  flex justify-between items-center
  max-w-screen-xl mx-auto
`;
const NavLink = tw.span`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-10 mr-3`}
  }
`;

const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;
const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;

const MobileNavLinks = motion.custom(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
`);
const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`,
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`,
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
};

export default HeaderLayout;
