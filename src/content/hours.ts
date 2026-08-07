export type DayHours = {
  day: string;
  open: string;
  close: string;
  closed?: boolean;
};

/** Hours sourced from public listings for Crazies Cafe, Richmond NSW. */
export const hours: DayHours[] = [
  { day: "Monday", open: "6:00 AM", close: "3:00 PM" },
  { day: "Tuesday", open: "6:00 AM", close: "3:00 PM" },
  { day: "Wednesday", open: "6:00 AM", close: "3:00 PM" },
  { day: "Thursday", open: "6:00 AM", close: "3:00 PM" },
  { day: "Friday", open: "6:00 AM", close: "3:00 PM" },
  { day: "Saturday", open: "7:00 AM", close: "3:00 PM" },
  { day: "Sunday", open: "8:00 AM", close: "2:00 PM" },
];

export const hoursBlurb =
  "Mon–Fri 6:00 AM – 3:00 PM · Sat 7:00 AM – 3:00 PM · Sun 8:00 AM – 2:00 PM";
