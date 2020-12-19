import React from "react";
import { Wrapper, TemperatureIcon, TemperatureIconImg } from "./styles";
import { objectToQueryString, kelvinToCelsius } from "../../utils";
import fetchJson from "../../services/fetch-json";
import useLocation from "../../hooks/use-location";
import Widget from "../../components/widget/widget";

type Result = {
  location?: null | string;
  temperature?: null | number;
  icon?: null | string;
};

function getIcon(icon: null | string): null | string {
  if (icon === null) return null;
  return `https://openweathermap.org/img/wn/${icon}@2x.png`;
}

export default function Weather() {
  const location = useLocation();
  const [result, setResult] = React.useState<Result>({});

  React.useEffect(() => {
    if (location === null) return;

    const settingsQueryString = objectToQueryString({
      lat: location.lat,
      lon: location.lon,
      appid: process?.env?.REACT_APP_WEATHER_API_KEY ?? "",
    });

    fetchJson(
      `https://api.openweathermap.org/data/2.5/weather?${settingsQueryString}`
    ).then(({ data }) => {
      setResult({
        location: data?.name ?? null,
        temperature: kelvinToCelsius(data?.main?.feels_like ?? null),
        icon: getIcon(data?.weather?.[0]?.icon ?? null),
      });
    });
  }, [location]);

  return (
    <Widget>
      <Wrapper>
        {result.location !== null && <h3>{result.location}</h3>}
        <TemperatureIcon>
          <TemperatureIconImg src={result.icon} />
          <p>
            {result.temperature}
            <sup>&deg;C</sup>
          </p>
        </TemperatureIcon>
      </Wrapper>
    </Widget>
  );
}
