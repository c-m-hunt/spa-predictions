import Table from "cli-table";
import { data, PredictionData, ActualScore, PredictedScore } from "./data";

type Result = "H" | "D" | "A"
interface LeagueTableRow {
    name: string;
    points: number;
}
type LeagueTable = LeagueTableRow[]

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

const calculateGamePoints = (prediction: PredictedScore, actual: ActualScore): number => {
    let points = 0;
    const predictedResult = getResult(prediction.homeGoals, prediction.awayGoals);
    const actualResult = getResult(actual.homeGoals, actual.awayGoals);
    if (predictedResult === actualResult) {
        points += 2;
    }
    if (prediction.homeGoals === actual.homeGoals && prediction.awayGoals === actual.awayGoals) {
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

const calcualatePoints = (predictions: { [key: string]: PredictedScore }, actual: { [key: string]: ActualScore }): Points => {
    const points: Points = {};
    for (const game in predictions) {
        points[game] = calculateGamePoints(predictions[game], actual[game]);
    }
    return points;
};

const calculateTable = (data: PredictionData) => {
    const gamePoints: {[key: string]: Points} = {};
    const leagueTable: LeagueTable = [];

    for (const player of data.predictions) {
        const name = player.name;
        const weekPoints = calcualatePoints(player.predictions, data.actual);
        const totalPoints = Object.values(weekPoints).reduce((a,b) => a + b, 0) + player.currentPoints;
        leagueTable.push({
            name,
            points: totalPoints
        });
        gamePoints[name] = weekPoints;
    }

    return {
        gamePoints,
        leagueTable
    };
};

const points = calculateTable(data);

const weekTable = new Table({head: ["Game", ...Object.keys(points.gamePoints)], colAligns: ["left", ...new Array(Object.keys(points.gamePoints).length).fill("right") ]});
console.log(weekTable);
for (const game in data.actual) {
    const playerPoints = Object.values(points.gamePoints).map(p => p[game]);
    weekTable.push([game, ...playerPoints]);
}

console.log(weekTable.toString());

const sortedPoints = Array.from(points.leagueTable.entries()).sort((a: any, b: any) => {
    return a[1] - b[1];
});

const leagueTable = new Table({head: ["Pos", "Name", "Week points", "Total points"], colAligns: ["left", "left", "right", "right"]});
for (const pos in sortedPoints) {
    const row = sortedPoints[pos][1];
    const weekPoints = Object.values(points.gamePoints[row["name"]]).reduce((a,b) => a + b, 0);
    const posNo = parseInt(pos)+1;
    leagueTable.push([posNo, row["name"], `${weekPoints}`, row["points"]]);
}
console.log(leagueTable.toString());