import React from "react";
import { Wrapper } from "./styles";
import Flex from "../../components/flex/flex";
import NewsLive from "../../widgets/news-live/news-live";
import Weather from "../../widgets/weather/weather";
import NewsHeadlines from "../../widgets/news-headlines/news-headlines";
import Time from "../../widgets/time/time";

export default function Dashboard() {
  return (
    <Wrapper>
      <Flex>
        <Time style={{ marginRight: "auto", marginBottom: "auto" }} />
        <Weather style={{ marginBottom: "auto" }} />
      </Flex>
      <NewsLive />
      <NewsHeadlines />
    </Wrapper>
  );
}
