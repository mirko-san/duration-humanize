import moment from "https://deno.land/x/momentjs@2.29.1-deno/mod.ts";

const now = moment();
const expect = moment("2022-12-25");

console.log(now.toISOString());
console.log(expect.toISOString());

const duration = moment.duration(expect.diff(now))

const humanize = {
  years: duration.years(),
  months: duration.months(),
  days: duration.days(),
  hours: duration.hours(),
  minutes: duration.minutes(),
  seconds: duration.seconds(),
};

console.log(humanize);
