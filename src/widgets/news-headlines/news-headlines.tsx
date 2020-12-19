import React from "react";
import { Wrapper } from "./styles";
import vars from "../../config/vars";
import { objectToQueryString } from "../../utils";
import fetchJson from "../../services/fetch-json";
import Widget from "../../components/widget/widget";
import Scroll from "../../components/scroll/scroll";

type Article = null | {
  title?: null | string;
  url?: null | string;
};

type Result = {
  title: undefined | string;
  url: undefined | string;
};

export default function NewsHeadlines({ limit = 30 }) {
  const [results, setResults] = React.useState<Result[]>([]);

  React.useEffect(() => {
    const settingsQueryString = objectToQueryString({
      country: "gb",
      apiKey: process?.env?.REACT_APP_NEWS_API_KEY ?? "",
      pageSize: limit,
    });
    fetchJson(
      `https://newsapi.org/v2/top-headlines?${settingsQueryString}`
    ).then(({ data }) => {
      const articles = data?.articles ?? [];
      setResults(
        articles.map((article: Article) => {
          return {
            title: article?.title,
            url: article?.url,
          };
        })
      );
    });
  }, [limit]);

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
