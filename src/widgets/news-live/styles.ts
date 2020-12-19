import styled, { createGlobalStyle } from "styled-components";
import "plyr/dist/plyr.css";
import vars from "../../config/vars";

export const Wrapper = styled.div`
  position: relative;
  flex: 1;
`;

export default createGlobalStyle`
  :root {
    --plyr-color-main: ${vars.colorPrimary};
  }

  .plyr__video-embed,
  .plyr__video-wrapper--fixed-ratio {
    padding-bottom: 56.25% !important;
  }
`;
