import styled, { css } from "styled-components";
import vars from "../../config/vars";
import { darken } from "polished";

const SCROLL_WIDTH = 0.75;

export const Wrapper = styled.div`
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  height: 100%;

  ::-webkit-scrollbar-track,
  ::-webkit-scrollbar-thumb {
    border-radius: ${SCROLL_WIDTH / 2}em;
  }

  ::-webkit-scrollbar {
    width: ${SCROLL_WIDTH}em;
  }

  ::-webkit-scrollbar-track {
    background: ${vars.colorWhite900};
  }

  ::-webkit-scrollbar-thumb {
    background: ${vars.colorPrimary};

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
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
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
