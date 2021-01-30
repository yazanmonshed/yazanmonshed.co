import React, {useContext} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import ToggleTheme from 'components/theme/Header/ToggleTheme';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <AnchorLink href="#about">About</AnchorLink>
      <AnchorLink href="#projects">Projects</AnchorLink>
      <AnchorLink href="#contact">Contact</AnchorLink>
<<<<<<< HEAD
      <AnchorLink href="http://blog.yazanmonshed.com/">Blog</AnchorLink>
=======
      <a href="http://blog.yazanmonshed.com/" target="_blank">Blog</a>
>>>>>>> beta
      <ToggleTheme />
    </Wrapper>
  )

};

export default NavbarLinks;
