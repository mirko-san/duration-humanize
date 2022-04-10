import { serve } from "https://deno.land/std@0.131.0/http/server.ts"
import moment from "https://deno.land/x/momentjs@2.29.1-deno/mod.ts";

serve(async (req) => {
  const now = moment();
  const expect = moment("2022-12-25");

  const duration = moment.duration(expect.diff(now))

  const humanize = {
    years: duration.years(),
    months: duration.months(),
    days: duration.days(),
    hours: duration.hours(),
    minutes: duration.minutes(),
    seconds: duration.seconds(),
  };

  const data = {
    humanize,
  }

  return new Response(
    JSON.stringify(data),
    { headers: { "Content-Type": "application/json" } },
  )
});
