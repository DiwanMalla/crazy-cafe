export type DayHours = {
  day: string;
  open: string;
  close: string;
  closed?: boolean;
};

export const hours: DayHours[] = [
  { day: "Monday", open: "7:00 AM", close: "11:00 PM" },
  { day: "Tuesday", open: "7:00 AM", close: "11:00 PM" },
  { day: "Wednesday", open: "7:00 AM", close: "12:00 AM" },
  { day: "Thursday", open: "7:00 AM", close: "12:00 AM" },
  { day: "Friday", open: "7:00 AM", close: "1:00 AM" },
  { day: "Saturday", open: "8:00 AM", close: "1:00 AM" },
  { day: "Sunday", open: "8:00 AM", close: "10:00 PM" },
];

export const hoursBlurb = "Open early. Stay late. Seven days a week.";
