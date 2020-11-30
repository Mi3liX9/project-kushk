const defaultOptions: Intl.DateTimeFormatOptions = {
  weekday: "long",
  day: "numeric",
  year: "numeric",
  month: "long",
  hour: "numeric",
  minute: "numeric",
};

export function useDateFormat(
  date: Date = new Date(),
  options: Intl.DateTimeFormatOptions = defaultOptions
) {
  return date.toLocaleString("default", options);
}

export function getUTC3Date(date: string | Date) {
  return new Date(date + " utc +3");
}

export function getTimeDifferecne(date: Date) {
  return (new Date().getTime() - date.getTime()) / 1000 / 60 / 60 / 24;
}
