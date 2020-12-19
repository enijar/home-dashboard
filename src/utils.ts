export function objectToQueryString(object: object): string {
  return Object.entries(object)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
}

export function kelvinToCelsius(kelvin: null | number): null | number {
  if (kelvin === null) return null;
  return Math.round(kelvin - 273.15);
}

export function formatDateTime(date: Date = new Date()): string {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const weekdayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const month = monthNames[date.getMonth()];
  const weekday = weekdayNames[date.getDay()];
  const hours = String(date.getHours()).padStart(2, "0");
  const mins = String(date.getMinutes()).padStart(2, "0");

  return `${weekday} ${date.getDate()} ${month} ${hours}:${mins}`;
}
