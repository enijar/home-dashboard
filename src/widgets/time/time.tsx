import React from "react";
import { Wrapper } from "./styles";
import { formatDateTime } from "../../utils";
import Widget from "../../components/widget/widget";

export default function Time({ style = {} }) {
  const [dateTime, setDateTime] = React.useState<string>(formatDateTime());

  React.useEffect(() => {
    let nextFrame: number;
    (function update() {
      nextFrame = requestAnimationFrame(update);
      setDateTime(formatDateTime());
    })();
    return () => cancelAnimationFrame(nextFrame);
  }, []);

  return (
    <Widget style={style}>
      <Wrapper>
        <time>{dateTime}</time>
      </Wrapper>
    </Widget>
  );
}
