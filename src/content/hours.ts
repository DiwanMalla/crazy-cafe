export type DayHours = {
  day: string;
  open: string;
  close: string;
  closed?: boolean;
};

export const hours: DayHours[] = [
  { day: "Monday", open: "7:00 AM", close: "2:00 PM" },
  { day: "Tuesday", open: "7:00 AM", close: "2:00 PM" },
  { day: "Wednesday", open: "7:00 AM", close: "2:00 PM" },
  { day: "Thursday", open: "7:00 AM", close: "2:00 PM" },
  { day: "Friday", open: "7:00 AM", close: "2:00 PM" },
  { day: "Saturday", open: "7:00 AM", close: "2:00 PM" },
  { day: "Sunday", open: "7:00 AM", close: "2:00 PM" },
];

export const hoursBlurb = "Open 7:00 AM – 2:00 PM. Seven days a week.";
