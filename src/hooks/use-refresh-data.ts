import React from "react";
import fetchJson from "../services/fetch-json";

export default function useRefreshData(
  url: null | string,
  onChange: Function,
  ttl: number = 60000
) {
  const lastFetchTime = React.useRef<number>(0);
  const [data, setData] = React.useState<any>(onChange);

  React.useEffect(() => {
    let nextFrame: number;
    (function update() {
      nextFrame = requestAnimationFrame(update);
      if (url === null) return;
      if (Date.now() - lastFetchTime.current < ttl) return;
      lastFetchTime.current = Date.now();
      fetchJson(url).then(({ data }) => {
        setData(onChange(data));
      });
    })();
    return () => cancelAnimationFrame(nextFrame);
  }, [ttl, url, onChange]);

  return data;
}
