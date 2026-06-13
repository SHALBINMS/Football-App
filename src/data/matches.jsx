const matches = [
  {
    id: 4,

    homeTeam: "Mexico",
    awayTeam: "South Korea",

    homeScore: 1,
    awayScore: 1,

    minute: 85,

    status: "LIVE",

    stats: {
      possession: "52%",
      shots: 10,
      corners: 4,
      passAccuracy: "84%",
    },

    events: [
      { minute: 18, type: "GOAL", player: "Jimenez", team: "Mexico" },
      { minute: 63, type: "GOAL", player: "Son", team: "South Korea" },
    ],
  },

  {
    id: 5,

    homeTeam: "Canada",
    awayTeam: "Switzerland",

    homeScore: 2,
    awayScore: 1,

    minute: 90,

    status: "FT",

    stats: {
      possession: "49%",
      shots: 14,
      corners: 7,
      passAccuracy: "82%",
    },

    events: [
      { minute: 14, type: "GOAL", player: "David", team: "Canada" },
      { minute: 41, type: "GOAL", player: "Amdouni", team: "Switzerland" },
      { minute: 72, type: "GOAL", player: "Davies", team: "Canada" },
    ],
  },

  {
    id: 6,

    homeTeam: "Morocco",
    awayTeam: "Brazil",

    homeScore: 0,
    awayScore: 3,

    minute: 90,

    status: "FT",

    stats: {
      possession: "43%",
      shots: 8,
      corners: 3,
      passAccuracy: "80%",
    },

    events: [
      { minute: 22, type: "GOAL", player: "Vinicius Jr", team: "Brazil" },
      { minute: 48, type: "GOAL", player: "Rodrygo", team: "Brazil" },
      { minute: 81, type: "GOAL", player: "Raphinha", team: "Brazil" },
    ],
  },

  {
    id: 7,

    homeTeam: "United States",
    awayTeam: "Australia",

    homeScore: 2,
    awayScore: 0,

    minute: 90,

    status: "FT",

    stats: {
      possession: "57%",
      shots: 15,
      corners: 8,
      passAccuracy: "87%",
    },

    events: [
      { minute: 31, type: "GOAL", player: "Pulisic", team: "United States" },
      { minute: 69, type: "GOAL", player: "Balogun", team: "United States" },
    ],
  },

  {
    id: 8,

    homeTeam: "Germany",
    awayTeam: "Ecuador",

    homeScore: 2,
    awayScore: 1,

    minute: 90,

    status: "FT",

    stats: {
      possession: "61%",
      shots: 16,
      corners: 9,
      passAccuracy: "90%",
    },

    events: [
      { minute: 11, type: "GOAL", player: "Musiala", team: "Germany" },
      { minute: 55, type: "GOAL", player: "Valencia", team: "Ecuador" },
      { minute: 84, type: "GOAL", player: "Wirtz", team: "Germany" },
    ],
  },

  {
    id: 9,

    homeTeam: "Netherlands",
    awayTeam: "Japan",

    homeScore: 1,
    awayScore: 0,

    minute: 74,

    status: "LIVE",

    stats: {
      possession: "55%",
      shots: 11,
      corners: 5,
      passAccuracy: "88%",
    },

    events: [
      { minute: 39, type: "GOAL", player: "Gakpo", team: "Netherlands" },
    ],
  },

  {
    id: 10,

    homeTeam: "Spain",
    awayTeam: "Uruguay",

    homeScore: 2,
    awayScore: 2,

    minute: 90,

    status: "FT",

    stats: {
      possession: "64%",
      shots: 17,
      corners: 7,
      passAccuracy: "92%",
    },

    events: [
      { minute: 9, type: "GOAL", player: "Yamal", team: "Spain" },
      { minute: 27, type: "GOAL", player: "Nunez", team: "Uruguay" },
      { minute: 51, type: "GOAL", player: "Pedri", team: "Spain" },
      { minute: 83, type: "GOAL", player: "Valverde", team: "Uruguay" },
    ],
  },

  {
    id: 11,

    homeTeam: "France",
    awayTeam: "Senegal",

    homeScore: 3,
    awayScore: 1,

    minute: 90,

    status: "FT",

    stats: {
      possession: "60%",
      shots: 18,
      corners: 6,
      passAccuracy: "89%",
    },

    events: [
      { minute: 12, type: "GOAL", player: "Mbappe", team: "France" },
      { minute: 37, type: "GOAL", player: "Dembele", team: "France" },
      { minute: 58, type: "GOAL", player: "Mane", team: "Senegal" },
      { minute: 79, type: "GOAL", player: "Kolo Muani", team: "France" },
    ],
  },

  {
    id: 12,

    homeTeam: "Argentina",
    awayTeam: "Austria",

    homeScore: 2,
    awayScore: 0,

    minute: 90,

    status: "FT",

    stats: {
      possession: "62%",
      shots: 13,
      corners: 5,
      passAccuracy: "91%",
    },

    events: [
      { minute: 24, type: "GOAL", player: "Alvarez", team: "Argentina" },
      { minute: 71, type: "GOAL", player: "Messi", team: "Argentina" },
    ],
  },
];

export default matches;
