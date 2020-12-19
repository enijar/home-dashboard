import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  //
`;

export const TemperatureIcon = styled.div`
  display: flex;
  align-items: center;

  img {
    flex-shrink: 0;
    align-self: center;
    pointer-events: none;
    user-select: none;
    width: 3em;
  }

  sup {
    font-size: 0.75em;
    vertical-align: top;
  }
`;

const IMG_SIZE = 3;

type TemperatureIconImgProps = {
  src?: null | string;
};

export const TemperatureIconImg = styled.div<TemperatureIconImgProps>`
  flex-shrink: 0;
  align-self: center;
  pointer-events: none;
  user-select: none;
  width: ${IMG_SIZE}em;
  height: ${IMG_SIZE}em;
  background-size: contain;
  background-position: 50%;

  ${(props) => css`
    ${props.src && `background-image: url(${props.src})`};
  `}
`;
