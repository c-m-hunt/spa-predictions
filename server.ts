import { getTables, appendLeadingZeroes} from './app.ts'
import { serve } from 'https://deno.land/std/http/server.ts'
const s = serve({ port: 8000 })

let tables = {weeklyTable: '', leagueTable: ''};

for await (const req of s) {
  tables = getTables();
  const now = new Date();
  const formattedTime = `${appendLeadingZeroes(now.getHours())}:${
    appendLeadingZeroes(now.getMinutes())
  }:${appendLeadingZeroes(now.getSeconds())}`;
  const formattedDate = `${appendLeadingZeroes(now.getFullYear())}-${
    appendLeadingZeroes(now.getMonth() + 1)
  }-${appendLeadingZeroes(now.getDate())}`;
  req.respond({ body: `
------------------------------------
Updated at ${formattedTime} on ${formattedDate}
------------------------------------

${tables.leagueTable}

${tables.weeklyTable}
` })
}
