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
  const content = React.useRef<HTMLDivElement>(null);
  const [showIndicator, setShowIndicator] = React.useState<boolean>(false);

  React.useEffect(() => {
    const wrapperElement = wrapper.current;
    const contentElement = content.current;
    if (wrapperElement === null || contentElement === null) return;
    function updateShowScrollIndicator(wrapperElement: HTMLDivElement): void {
      setShowIndicator(
        wrapperElement.scrollTop === 0 &&
          wrapperElement.clientHeight < wrapperElement.scrollHeight
      );
    }
    function onChange(): void {
      if (wrapperElement === null) return;
      updateShowScrollIndicator(wrapperElement);
    }
    onChange();
    window.addEventListener("resize", onChange);
    wrapperElement.addEventListener("scroll", onChange);
    contentElement.addEventListener("DOMSubtreeModified", onChange);
    return (): void => {
      window.removeEventListener("resize", onChange);
      wrapperElement.removeEventListener("scroll", onChange);
      contentElement.removeEventListener("DOMSubtreeModified", onChange);
    };
  }, [wrapper]);

  return (
    <ThemeProvider theme={{ showIndicator }}>
      <Wrapper style={{ maxHeight, height }} ref={wrapper}>
        <Content ref={content}>{children}</Content>
        <Indicator>
          <svg enableBackground="new 0 0 512 512" viewBox="0 0 512 512">
            <path d="m256 298.3 174.2-167.2c4.3-4.2 11.4-4.1 15.8.2l30.6 29.9c4.4 4.3 4.5 11.3.2 15.5l-212.7 204.2c-2.2 2.2-5.2 3.2-8.1 3-3 .1-5.9-.9-8.1-3l-212.7-204.2c-4.3-4.2-4.2-11.2.2-15.5l30.6-29.9c4.4-4.3 11.5-4.4 15.8-.2z" />
          </svg>
        </Indicator>
      </Wrapper>
    </ThemeProvider>
  );
}
