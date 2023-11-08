import { MONTHS } from "./AllConstant";

const date = new Date();

export function currentDateTime() {
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const month = MONTHS[date.getMonth()].slice(0, 3);
  const year = date.getFullYear();
  const time = date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h12",
  });

  const DateTime = day.toString().concat("-", month, "-", year, ", ", time);
  return DateTime;
}

export function getDayMonth() {
  const month = MONTHS[date.getMonth()].slice(0, 3);
  const day = date.getUTCDate();

  return day + " " + month;
}

export function transformDateFormat() {
  const month = date.toLocaleString("en-US", { month: "2-digit" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();
  const time = date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  });

  const newFormatDate = year.toString().concat("-", month, "-", day, " ", time);
  return newFormatDate;
}