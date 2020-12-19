import React from "react";
import { Wrapper } from "./styles";
import NewsLive from "../../widgets/news-live/news-live";
import Weather from "../../widgets/weather/weather";
import NewsHeadlines from "../../widgets/news-headlines/news-headlines";
import Time from "../../widgets/time/time";

export default function Dashboard() {
  return (
    <Wrapper>
      <Weather />
      <Time />
      <NewsLive />
      <NewsHeadlines />
    </Wrapper>
  );
}
