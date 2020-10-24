const defaultOptions = {
  weekday: "long",
  day: "numeric",
  year: "numeric",
  month: "long",
  hour12: true,
  hour: "numeric",
  minute: "numeric",
};

export function useDateFormat(
  date: Date = new Date(),
  options: Intl.DateTimeFormatOptions = defaultOptions
) {
  return new Intl.DateTimeFormat("default", options).format(date);
}
