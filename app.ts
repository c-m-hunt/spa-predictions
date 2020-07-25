import AsciiTable, { AsciiAlign } from "https://deno.land/x/ascii_table/mod.ts";
import {
  getData,
  PredictionData,
  ActualScore,
  PredictedScore,
} from "./data.ts";

type Result = "H" | "D" | "A";
interface LeagueTableRow {
  name: string;
  points: number;
}
type LeagueTable = LeagueTableRow[];

interface Points {
  [key: string]: number;
}

const getResult = (homeGoals: number, awayGoals: number): Result => {
  if (homeGoals > awayGoals) {
    return "H";
  }
  if (awayGoals > homeGoals) {
    return "A";
  }
  return "D";
};

const calculateGamePoints = (
  prediction: PredictedScore,
  actual: ActualScore,
): number => {
  let points = 0;
  const predictedResult = getResult(prediction.homeGoals, prediction.awayGoals);
  const actualResult = getResult(actual.homeGoals, actual.awayGoals);
  if (predictedResult === actualResult) {
    points += 2;
  }
  if (
    prediction.homeGoals === actual.homeGoals &&
    prediction.awayGoals === actual.awayGoals
  ) {
    points += 4;
  }
  if (actual.scorers.includes(prediction.scorer)) {
    points += 4;
  }
  if (actual.scorers.length === 0 && prediction.scorer === "") {
    points += 4;
  }
  return points;
};

const calcualatePoints = (
  predictions: { [key: string]: PredictedScore },
  actual: { [key: string]: ActualScore },
): Points => {
  const points: Points = {};
  for (const game in predictions) {
    points[game] = calculateGamePoints(predictions[game], actual[game]);
  }
  return points;
};

const calculateTable = (data: PredictionData) => {
  const gamePoints: { [key: string]: Points } = {};
  const leagueTable: LeagueTable = [];

  for (const player of data.predictions) {
    const name = player.name;
    const weekPoints = calcualatePoints(player.predictions, data.actual);
    const totalPoints = Object.values(weekPoints).reduce((a: number, b: number) => a + b, 0) +
      player.currentPoints;
    leagueTable.push({
      name,
      points: totalPoints,
    });
    gamePoints[name] = weekPoints;
  }

  return {
    gamePoints,
    leagueTable,
  };
};

const displayWeeklyGamePoints = (
  gamePoints: { [key: string]: Points },
  games: string[],
  predictionData: PredictionData
) => {
  const weekTable = new AsciiTable("Weekly Table");
  weekTable.setHeading("Game", "Current score", ...Object.keys(gamePoints));
  for (const game of games) {
    const playerPoints = Object.values(gamePoints).map((p: {[key: string]: number}, i: number) => {
      const pred = predictionData.predictions[i].predictions[game]
      return `${pred.homeGoals}-${pred.awayGoals} ${pred.scorer} - ${p[game]}`;
    });
    const actualGame = predictionData.actual[game];
    const actualGameString = `${actualGame.homeGoals}-${actualGame.awayGoals} ${actualGame.scorers.join(",")}`
    weekTable.addRow(game, actualGameString, ...playerPoints);
  }
  console.log(weekTable.toString());
};

const displayLeagueTable = (
  leagueTableData: LeagueTable,
  gamePoints: { [key: string]: Points },
) => {
  const sortedPoints = leagueTableData.sort((a: any, b: any) => {
    return b.points - a.points;
  });

  const leagueTable = new AsciiTable("League Table");

  leagueTable
    .setHeading("Pos", "Name", "Week points", "Total points")
    .setAlign(2, AsciiAlign.RIGHT)
    .setAlign(3, AsciiAlign.RIGHT);
  for (const pos in sortedPoints) {
    const row = sortedPoints[pos];
    const weekPoints = Object.values(gamePoints[row["name"]]).reduce(
      (a: number, b: number) => a + b,
      0,
    );
    const posNo = parseInt(pos) + 1;
    leagueTable.addRow(posNo, row["name"], `${weekPoints}`, row["points"]);
  }
  console.log(leagueTable.toString());
};

const showUpdatedData = () => {
  const predictionData = getData();
  const points = calculateTable(predictionData);

  displayWeeklyGamePoints(
    points.gamePoints,
    Object.keys(predictionData.actual),
    predictionData
  );
  displayLeagueTable(points.leagueTable, points.gamePoints);
};

const appendLeadingZeroes = (n: number): string => {
  if (n <= 9) {
    return "0" + n;
  }
  return n.toString();
};

showUpdatedData();

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
    showUpdatedData();
  }
}
