import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;

  h3 {
    position: sticky;
    top: 0;
    left: 0;
    padding: 0.25em 0;
    margin-bottom: 0.25em;
    background-color: rgba(255, 255, 255, 0.9);
  }

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
