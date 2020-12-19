import React from "react";
import Plyr from "plyr";
import Style, { Wrapper } from "./styles";
import Widget from "../../components/widget/widget";

export default function NewsLive({ youTubeCode = "9Auq9mYxFEE" }) {
  const player = React.useRef<null | Plyr>(null);

  React.useEffect(() => {
    player.current = new Plyr(`#video-${youTubeCode}`, {
      controls: ["progress", "play", "mute", "volume"],
      muted: true,
      autoplay: true,
      youtube: {
        rel: 0,
        showinfo: 0,
        iv_load_policy: 3,
        modestbranding: 1,
      },
    });
  }, [youTubeCode]);

  return (
    <>
      <Style />
      <Widget>
        <Wrapper>
          <div id={`video-${youTubeCode}`}>
            <iframe
              title="Live News"
              src={`https://www.youtube.com/embed/${youTubeCode}`}
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Wrapper>
      </Widget>
    </>
  );
}
