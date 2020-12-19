import styled from "styled-components";
import { rgba } from "polished";
import vars from "../../config/vars";

export const Wrapper = styled.div`
  position: relative;

  ol {
    padding-left: 1.25em;

    li {
      font-size: 0.75em;
      margin-bottom: 0.5em;

      &:last-child {
        margin-bottom: 0;
      }

      a:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const Title = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  padding: 0.25em 0;
  margin-bottom: 0.25em;
  overflow: hidden;
  background-color: ${rgba(vars.colorBackground, 0.95)};
`;
