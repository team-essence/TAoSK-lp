import React, { FCX } from "react";
import { AtLeast } from "types/carousel";
import { calculateVwBasedOnFigma } from "utils/figma/calculateSizeBasedOnFigma";
import styled, { keyframes, css } from "styled-components";

type Props = {
  direction: "left" | "right";
  images: AtLeast<4, string>;
};

export const Carousel: FCX<Props> = ({ direction, images }) => {
  return (
    <StyledContainer>
      <StyledUl direction={direction}>
        {images.map((image, index) => (
          <StyledLi key={index} length={images.length}>
            <img src={image} alt="slide" />
          </StyledLi>
        ))}
      </StyledUl>
      <StyledUl direction={direction}>
        {images.map((image, index) => (
          <StyledLi key={index} length={images.length}>
            <img src={image} alt="slide" />
          </StyledLi>
        ))}
      </StyledUl>
    </StyledContainer>
  );
};

const infinityScrollLeft = keyframes`
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
`;
const infinityScrollRight = keyframes`
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
`;
const StyledContainer = styled.div`
  display: flex;
  overflow: hidden;
`;
const StyledUl = styled.ul<{ direction: "left" | "right" }>`
  display: flex;
  list-style: none;
  ${({ direction }) =>
    css`
      animation: ${direction === "left"
          ? infinityScrollLeft
          : infinityScrollRight}
        15s infinite linear 0.5s both;
    `}
`;
const StyledLi = styled.li<{ length: number }>`
  /* ${({ length }) =>
    css`
      width: calc(100vw / ${length});
    `} */
  width: ${calculateVwBasedOnFigma(442)};
  height: ${calculateVwBasedOnFigma(280)};
  background: #f0f;
  margin: 0 ${calculateVwBasedOnFigma(20)};
`;
