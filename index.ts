import { appendLeadingZeroes, getTables} from './app.ts'

const displayTables = (tables: any) => {
  console.log(tables.weeklyTable)
  console.log(tables.leagueTable)
}

displayTables(getTables());

const watcher = Deno.watchFs("./data.json");
for await (const event of watcher) {
  if (event.kind === "modify") {
    const now = new Date();
    const formattedTime = `${appendLeadingZeroes(now.getHours())}:${
      appendLeadingZeroes(now.getMinutes())
    }:${appendLeadingZeroes(now.getSeconds())}`;
    const formattedDate = `${appendLeadingZeroes(now.getFullYear())}-${
      appendLeadingZeroes(now.getMonth() + 1)
    }-${appendLeadingZeroes(now.getDate())}`;
    console.log("--------------------------------------");
    console.log(`UPDATED AT ${formattedTime} on ${formattedDate}`);
    console.log("--------------------------------------");
    displayTables(getTables());
  }
}