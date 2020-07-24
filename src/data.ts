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

export interface PredictionData {
    actual: {
        [key: string]: ActualScore;
    };
    predictions: {
        name: string;
        currentPoints: number;
        predictions: { [key: string]: PredictedScore };
    }[];
}


export const data: PredictionData = {
    actual: {
        ARSvWAT: { homeGoals: 0, awayGoals: 0, scorers: [] },
        BURvBRI: { homeGoals: 0, awayGoals: 0, scorers: [] },
        CHEvWOL: { homeGoals: 0, awayGoals: 0, scorers: [] },
        CRYvTOT: { homeGoals: 0, awayGoals: 0, scorers: [] },
        EVEvBOU: { homeGoals: 0, awayGoals: 0, scorers: [] },
        LEIvMAU: { homeGoals: 0, awayGoals: 0, scorers: [] },
        MACvNOR: { homeGoals: 0, awayGoals: 0, scorers: [] },
        NEWvLIV: { homeGoals: 0, awayGoals: 0, scorers: [] },
        SOUvSHE: { homeGoals: 0, awayGoals: 0, scorers: [] },
        WHUvAST: { homeGoals: 0, awayGoals: 0, scorers: [] },
    },
    predictions: [
        {
            name: "Chris",
            currentPoints: 180,
            predictions: {
                ARSvWAT: { homeGoals: 0, awayGoals: 0, scorer: ""},
                BURvBRI: { homeGoals: 0, awayGoals: 0, scorer: ""},
                CHEvWOL: { homeGoals: 0, awayGoals: 0, scorer: ""},
                CRYvTOT: { homeGoals: 0, awayGoals: 0, scorer: ""},
                EVEvBOU: { homeGoals: 0, awayGoals: 0, scorer: ""},
                LEIvMAU: { homeGoals: 0, awayGoals: 0, scorer: ""},
                MACvNOR: { homeGoals: 0, awayGoals: 0, scorer: ""},
                NEWvLIV: { homeGoals: 0, awayGoals: 0, scorer: ""},
                SOUvSHE: { homeGoals: 0, awayGoals: 0, scorer: ""},
                WHUvAST: { homeGoals: 0, awayGoals: 0, scorer: ""},
            },
        },
        {
            name: "Garry",
            currentPoints: 174,
            predictions: {
                ARSvWAT: { homeGoals: 0, awayGoals: 0, scorer: ""},
                BURvBRI: { homeGoals: 0, awayGoals: 0, scorer: ""},
                CHEvWOL: { homeGoals: 0, awayGoals: 0, scorer: ""},
                CRYvTOT: { homeGoals: 0, awayGoals: 0, scorer: ""},
                EVEvBOU: { homeGoals: 0, awayGoals: 0, scorer: ""},
                LEIvMAU: { homeGoals: 0, awayGoals: 0, scorer: ""},
                MACvNOR: { homeGoals: 0, awayGoals: 0, scorer: ""},
                NEWvLIV: { homeGoals: 0, awayGoals: 0, scorer: ""},
                SOUvSHE: { homeGoals: 0, awayGoals: 0, scorer: ""},
                WHUvAST: { homeGoals: 0, awayGoals: 0, scorer: ""},
            },
        },
        {
            name: "Taff",
            currentPoints: 174,
            predictions: {
                ARSvWAT: { homeGoals: 0, awayGoals: 0, scorer: ""},
                BURvBRI: { homeGoals: 0, awayGoals: 0, scorer: ""},
                CHEvWOL: { homeGoals: 0, awayGoals: 0, scorer: ""},
                CRYvTOT: { homeGoals: 0, awayGoals: 0, scorer: ""},
                EVEvBOU: { homeGoals: 0, awayGoals: 0, scorer: ""},
                LEIvMAU: { homeGoals: 0, awayGoals: 0, scorer: ""},
                MACvNOR: { homeGoals: 0, awayGoals: 0, scorer: ""},
                NEWvLIV: { homeGoals: 0, awayGoals: 0, scorer: ""},
                SOUvSHE: { homeGoals: 0, awayGoals: 0, scorer: ""},
                WHUvAST: { homeGoals: 0, awayGoals: 0, scorer: ""},
            },
        },
        {
            name: "Eddie",
            currentPoints: 170,
            predictions: {
                ARSvWAT: { homeGoals: 0, awayGoals: 0, scorer: ""},
                BURvBRI: { homeGoals: 0, awayGoals: 0, scorer: ""},
                CHEvWOL: { homeGoals: 0, awayGoals: 0, scorer: ""},
                CRYvTOT: { homeGoals: 0, awayGoals: 0, scorer: ""},
                EVEvBOU: { homeGoals: 0, awayGoals: 0, scorer: ""},
                LEIvMAU: { homeGoals: 0, awayGoals: 0, scorer: ""},
                MACvNOR: { homeGoals: 0, awayGoals: 0, scorer: ""},
                NEWvLIV: { homeGoals: 0, awayGoals: 0, scorer: ""},
                SOUvSHE: { homeGoals: 0, awayGoals: 0, scorer: ""},
                WHUvAST: { homeGoals: 0, awayGoals: 0, scorer: ""},
            },
        },
        {
            name: "Joe",
            currentPoints: 164,
            predictions: {
                ARSvWAT: { homeGoals: 0, awayGoals: 0, scorer: ""},
                BURvBRI: { homeGoals: 0, awayGoals: 0, scorer: ""},
                CHEvWOL: { homeGoals: 0, awayGoals: 0, scorer: ""},
                CRYvTOT: { homeGoals: 0, awayGoals: 0, scorer: ""},
                EVEvBOU: { homeGoals: 0, awayGoals: 0, scorer: ""},
                LEIvMAU: { homeGoals: 0, awayGoals: 0, scorer: ""},
                MACvNOR: { homeGoals: 0, awayGoals: 0, scorer: ""},
                NEWvLIV: { homeGoals: 0, awayGoals: 0, scorer: ""},
                SOUvSHE: { homeGoals: 0, awayGoals: 0, scorer: ""},
                WHUvAST: { homeGoals: 0, awayGoals: 0, scorer: ""},
            },
        },
        {
            name: "Dobs",
            currentPoints: 150,
            predictions: {
                ARSvWAT: { homeGoals: 0, awayGoals: 0, scorer: ""},
                BURvBRI: { homeGoals: 0, awayGoals: 0, scorer: ""},
                CHEvWOL: { homeGoals: 0, awayGoals: 0, scorer: ""},
                CRYvTOT: { homeGoals: 0, awayGoals: 0, scorer: ""},
                EVEvBOU: { homeGoals: 0, awayGoals: 0, scorer: ""},
                LEIvMAU: { homeGoals: 0, awayGoals: 0, scorer: ""},
                MACvNOR: { homeGoals: 0, awayGoals: 0, scorer: ""},
                NEWvLIV: { homeGoals: 0, awayGoals: 0, scorer: ""},
                SOUvSHE: { homeGoals: 0, awayGoals: 0, scorer: ""},
                WHUvAST: { homeGoals: 0, awayGoals: 0, scorer: ""},
            },
        },
        {
            name: "Scott",
            currentPoints: 146,
            predictions: {
                ARSvWAT: { homeGoals: 0, awayGoals: 0, scorer: ""},
                BURvBRI: { homeGoals: 0, awayGoals: 0, scorer: ""},
                CHEvWOL: { homeGoals: 0, awayGoals: 0, scorer: ""},
                CRYvTOT: { homeGoals: 0, awayGoals: 0, scorer: ""},
                EVEvBOU: { homeGoals: 0, awayGoals: 0, scorer: ""},
                LEIvMAU: { homeGoals: 0, awayGoals: 0, scorer: ""},
                MACvNOR: { homeGoals: 0, awayGoals: 0, scorer: ""},
                NEWvLIV: { homeGoals: 0, awayGoals: 0, scorer: ""},
                SOUvSHE: { homeGoals: 0, awayGoals: 0, scorer: ""},
                WHUvAST: { homeGoals: 0, awayGoals: 0, scorer: ""},
            },
        },
        {
            name: "Rob",
            currentPoints: 140,
            predictions: {
                ARSvWAT: { homeGoals: 0, awayGoals: 0, scorer: ""},
                BURvBRI: { homeGoals: 0, awayGoals: 0, scorer: ""},
                CHEvWOL: { homeGoals: 0, awayGoals: 0, scorer: ""},
                CRYvTOT: { homeGoals: 0, awayGoals: 0, scorer: ""},
                EVEvBOU: { homeGoals: 0, awayGoals: 0, scorer: ""},
                LEIvMAU: { homeGoals: 0, awayGoals: 0, scorer: ""},
                MACvNOR: { homeGoals: 0, awayGoals: 0, scorer: ""},
                NEWvLIV: { homeGoals: 0, awayGoals: 0, scorer: ""},
                SOUvSHE: { homeGoals: 0, awayGoals: 0, scorer: ""},
                WHUvAST: { homeGoals: 0, awayGoals: 0, scorer: ""},
            },
        },
    ]
};