import React from "react";
import { Wrapper } from "./styles";
import vars from "../../config/vars";
import { objectToQueryString } from "../../utils";
import Widget from "../../components/widget/widget";
import Scroll from "../../components/scroll/scroll";
import useRefreshData from "../../hooks/use-refresh-data";

type Article = {
  title?: null | string;
  url?: null | string;
};

type Result = {
  title: string | undefined;
  url: string | undefined;
};

export default function NewsHeadlines({ limit = 30 }) {
  const url = React.useMemo(() => {
    const settingsQueryString = objectToQueryString({
      country: "gb",
      apiKey: process?.env?.REACT_APP_NEWS_API_KEY ?? "",
      pageSize: limit,
    });
    return `https://newsapi.org/v2/top-headlines?${settingsQueryString}`;
  }, [limit]);
  const results: Result[] = useRefreshData(url, (res: any) => {
    return (res?.articles ?? []).map(
      (article: Article): Result => ({
        title: article?.title ?? undefined,
        url: article?.url ?? undefined,
      })
    );
  });

  return (
    <Widget>
      <Wrapper>
        <Scroll
          height={`calc((50vw - ${vars.widgetPadding * 2}em) * ${9 / 16})`}
        >
          <h3>News Headlines</h3>
          <ol>
            {results.map((result, index) => {
              return (
                <li key={index}>
                  <a
                    href={result.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {result.title}
                  </a>
                </li>
              );
            })}
          </ol>
        </Scroll>
      </Wrapper>
    </Widget>
  );
}
