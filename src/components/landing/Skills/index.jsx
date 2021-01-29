import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m Yazan and I’m & a Devops engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>About</h1>
          <p>
          I’ve long been interested in software development and design and always enjoy learning about new and exciting technologies. my experience in Python Frameworks Django, Flask. Golang, Bash and JavaScript libraries like ReactJs. I love open source software especially GNU Linux, my favorite distribution fedora silverblue. working on containerzation technologies like Docker and Kubernetes. kubeflow.
          </p>
          {/* <Button as={AnchorLink} href="#contact">
            Hire me
          </Button> */}
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
