import React from "react";
import { ThemeProvider } from "styled-components";
import { Content, Indicator, Wrapper } from "./styles";

type Props = {
  maxHeight?: string | number;
  height?: string | number;
  children: any;
};

export default function Scroll({ maxHeight, height, children }: Props) {
  const wrapper = React.useRef<HTMLDivElement>(null);
  const [showIndicator, setShowIndicator] = React.useState<boolean>(false);

  React.useEffect(() => {
    const element = wrapper.current;
    if (element === null) return;
    function onResize(): void {
      if (element === null) return;
      setShowIndicator(
        element.scrollTop === 0 && element.clientHeight < element.scrollHeight
      );
    }
    function onScroll(): void {
      if (element === null) return;
      setShowIndicator(element.scrollTop === 0);
    }
    onResize();
    onScroll();
    window.addEventListener("resize", onResize);
    element.addEventListener("scroll", onScroll);
    return (): void => {
      window.removeEventListener("resize", onResize);
      element.removeEventListener("scroll", onScroll);
    };
  }, [wrapper]);

  return (
    <ThemeProvider theme={{ showIndicator }}>
      <Wrapper style={{ maxHeight, height }} ref={wrapper}>
        <Content>{children}</Content>
        <Indicator>
          <svg enableBackground="new 0 0 512 512" viewBox="0 0 512 512">
            <path d="m256 298.3 174.2-167.2c4.3-4.2 11.4-4.1 15.8.2l30.6 29.9c4.4 4.3 4.5 11.3.2 15.5l-212.7 204.2c-2.2 2.2-5.2 3.2-8.1 3-3 .1-5.9-.9-8.1-3l-212.7-204.2c-4.3-4.2-4.2-11.2.2-15.5l30.6-29.9c4.4-4.3 11.5-4.4 15.8-.2z" />
          </svg>
        </Indicator>
      </Wrapper>
    </ThemeProvider>
  );
}
