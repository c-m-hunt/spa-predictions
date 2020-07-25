import { readJsonSync } from "https://deno.land/std/fs/mod.ts";

export interface Score {
  homeGoals: number;
  awayGoals: number;
}

export interface ActualScore extends Score {
  scorers: string[];
}

export interface PredictedScore extends Score {
  scorer: string;
}

export interface PlayerPredictions {
  name: string;
  currentPoints: number;
  predictions: { [key: string]: PredictedScore };
}

export interface PredictionData {
  actual: {
    [key: string]: ActualScore;
  };
  predictions: PlayerPredictions[];
}

export const getData = (): PredictionData =>
  readJsonSync("./data.json") as PredictionData;
