import styled, { css } from "styled-components";
import { darken, lighten, rgba, linearGradient } from "polished";
import vars from "../../config/vars";

const SCROLL_WIDTH = 0.75;

export const Wrapper = styled.div`
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  height: 100%;

  ::-webkit-scrollbar-track,
  ::-webkit-scrollbar-thumb {
    border-radius: ${SCROLL_WIDTH / 2}em;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  ::-webkit-scrollbar {
    width: ${SCROLL_WIDTH}em;
  }

  ::-webkit-scrollbar-track {
    background-color: ${lighten(0.25, vars.colorBackground)};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${vars.colorPrimary};

    &:hover {
      background: ${darken(0.1, vars.colorPrimary)};
    }
  }
`;

export const Content = styled.div`
  position: relative;
  padding-right: 0.25em;
`;

const INDICATOR_HEIGHT = 2;

export const Indicator = styled.div`
  pointer-events: none;
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${INDICATOR_HEIGHT}em;
  ${linearGradient({
    colorStops: [
      `${rgba(vars.colorBackground, 0)} 0%`,
      `${rgba(vars.colorBackground, 1)} 100%`,
    ],
    toDirection: "to bottom",
  })}
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => css`
    display: ${props.theme.showIndicator ? "flex" : "none"};
  `}

  svg {
    height: ${INDICATOR_HEIGHT * 0.75}em;
    fill: ${vars.colorPrimary};
  }
`;
