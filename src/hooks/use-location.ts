import React from "react";

type Location = null | {
  lat: number;
  lon: number;
};

export default function useLocation(): Location {
  const [location, setLocation] = React.useState<Location>(null);

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setLocation({ lat: coords.latitude, lon: coords.longitude });
      },
      (err) => {
        console.error(err);
      }
    );
  }, []);

  return location;
}
