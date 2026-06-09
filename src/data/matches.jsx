const matches = [
  {
    id: 1,

    homeTeam: "Argentina",
    awayTeam: "Brazil",

    homeScore: 2,
    awayScore: 1,

    minute: 78,

    status: "LIVE",
    stats: {
      possession: "58%",
      shots: 12,
      corners: 6,
      passAccuracy: "89%",
    },

    events: [
      {
        minute: 23,
        type: "GOAL",
        player: "Messi",
        team: "Argentina",
      },

      {
        minute: 41,
        type: "GOAL",
        player: "Neymar",
        team: "Brazil",
      },

      {
        minute: 58,
        type: "YELLOW",
        player: "Romero",
        team: "Argentina",
      },
    ],
  },

  {
    id: 2,

    homeTeam: "France",
    awayTeam: "Spain",

    homeScore: 0,
    awayScore: 0,

    minute: 32,

    status: "LIVE",
    stats: {
      possession: "58%",
      shots: 12,
      corners: 6,
      passAccuracy: "89%",
    },
    events: [
      {
        minute: 12,
        type: "GOAL",
        player: "Mbappe",
        team: "France",
      },

      {
        minute: 27,
        type: "YELLOW",
        player: "Rodri",
        team: "Spain",
      },

      {
        minute: 44,
        type: "GOAL",
        player: "Yamal",
        team: "Spain",
      },

      {
        minute: 67,
        type: "YELLOW",
        player: "Kounde",
        team: "France",
      },
    ],
  },

  {
    id: 3,

    homeTeam: "Germany",
    awayTeam: "Portugal",

    homeScore: 3,
    awayScore: 2,

    minute: 90,

    status: "FT",
    stats: {
      possession: "58%",
      shots: 12,
      corners: 6,
      passAccuracy: "89%",
    },
    events: [
      {
        minute: 8,
        type: "GOAL",
        player: "Havertz",
        team: "Germany",
      },

      {
        minute: 22,
        type: "GOAL",
        player: "Ronaldo",
        team: "Portugal",
      },

      {
        minute: 39,
        type: "GOAL",
        player: "Musiala",
        team: "Germany",
      },

      {
        minute: 61,
        type: "YELLOW",
        player: "Dias",
        team: "Portugal",
      },

      {
        minute: 75,
        type: "GOAL",
        player: "Wirtz",
        team: "Germany",
      },
    ],
  },
];

export default matches;
