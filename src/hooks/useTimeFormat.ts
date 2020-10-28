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
