import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const StyledPic = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;
  opacity: 40%;

  @media (max-width: 768px) {
    margin: 50px auto 0;
  }

  .wrapper {
    display: block;
    position: relative;
    width: 100%;

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: screen;
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hello, my name is</h1>;
  const two = <h2 className="big-heading">Tyler Mathes.</h2>;
  const three = (
    <h3 className="sub-heading">Product designer for early-stage AI, fintech, and healthcare</h3>
  );
  const four = (
    <>
      <p>
        I’m a senior product designer and design systems lead specializing in enterprise design
        systems. Currently, I’m focused on building out the Manhattan Design System at{' '}
        <a href="https://jpmorganchase.com/" target="_blank" rel="noreferrer">
          J.P. Morgan Chase
        </a>
        .
      </p>
    </>
  );
  const five = (
    <a className="email-link" href="#projects" rel="noreferrer">
      See My Recent Work
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      <StyledPic>
        <div className="wrapper">
          <StaticImage
            className="img"
            src="../../images/hero-bg.jpg"
            quality={95}
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt="abstract"
          />
        </div>
      </StyledPic>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
