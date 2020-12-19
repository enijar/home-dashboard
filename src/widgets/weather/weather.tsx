import React from "react";
import { TemperatureIcon, TemperatureIconImg, Wrapper } from "./styles";
import { kelvinToCelsius, objectToQueryString } from "../../utils";
import useLocation from "../../hooks/use-location";
import Widget from "../../components/widget/widget";
import useRefreshData from "../../hooks/use-refresh-data";

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
  const url = React.useMemo(() => {
    if (location === null) return null;
    const settingsQueryString = objectToQueryString({
      lat: location.lat,
      lon: location.lon,
      appid: process?.env?.REACT_APP_WEATHER_API_KEY ?? "",
    });
    return `https://api.openweathermap.org/data/2.5/weather?${settingsQueryString}`;
  }, [location]);
  const data: Result = useRefreshData(
    url,
    (data: any): Result => ({
      location: data?.name ?? null,
      temperature: kelvinToCelsius(data?.main?.feels_like ?? null),
      icon: getIcon(data?.weather?.[0]?.icon ?? null),
    })
  );

  return (
    <Widget>
      <Wrapper>
        <h3>{data?.location}</h3>
        <TemperatureIcon>
          <TemperatureIconImg src={data?.icon} />
          <p>
            {data?.temperature}
            <sup>&deg;C</sup>
          </p>
        </TemperatureIcon>
      </Wrapper>
    </Widget>
  );
}
