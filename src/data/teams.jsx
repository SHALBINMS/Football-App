const teams = [
  // =====================
  // GROUP A
  // =====================

  {
    id: "mexico",
    name: "Mexico",
    coach: "Javier Aguirre",
    fifaRank: 17,
    group: "A",
    logo: "https://upload.wikimedia.org/wikipedia/en/f/fc/FMF_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 14,
      goals: 35,
      cleanSheets: 7,
      possession: "56%",
    },
  },

  {
    id: "south-africa",
    name: "South Africa",
    coach: "Hugo Broos",
    fifaRank: 56,
    group: "A",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/South_African_Football_Association_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1486286701208-1d58e9338013?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 10,
      goals: 24,
      cleanSheets: 8,
      possession: "48%",
    },
  },

  {
    id: "south-korea",
    name: "South Korea",
    coach: "Hong Myung-bo",
    fifaRank: 23,
    group: "A",
    logo: "https://upload.wikimedia.org/wikipedia/en/8/88/Korea_Football_Association_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 13,
      goals: 31,
      cleanSheets: 6,
      possession: "54%",
    },
  },

  {
    id: "czechia",
    name: "Czechia",
    coach: "Ivan Hasek",
    fifaRank: 39,
    group: "A",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/4e/Football_Association_of_the_Czech_Republic_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 12,
      goals: 28,
      cleanSheets: 7,
      possession: "51%",
    },
  },

  // =====================
  // GROUP B
  // =====================

  {
    id: "canada",
    name: "Canada",
    coach: "Jesse Marsch",
    fifaRank: 30,
    group: "B",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d8/Canada_Soccer_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 12,
      goals: 29,
      cleanSheets: 5,
      possession: "53%",
    },
  },

  {
    id: "bosnia-herzegovina",
    name: "Bosnia and Herzegovina",
    coach: "Sergej Barbarez",
    fifaRank: 74,
    group: "B",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/e8/NFSBiH_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1508098682722-e99c643e7485?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 8,
      goals: 22,
      cleanSheets: 4,
      possession: "49%",
    },
  },

  {
    id: "qatar",
    name: "Qatar",
    coach: "Julen Lopetegui",
    fifaRank: 55,
    group: "B",
    logo: "https://upload.wikimedia.org/wikipedia/en/7/73/Qatar_Football_Association_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 11,
      goals: 27,
      cleanSheets: 5,
      possession: "50%",
    },
  },

  {
    id: "switzerland",
    name: "Switzerland",
    coach: "Murat Yakin",
    fifaRank: 20,
    group: "B",
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f3/Swiss_Football_Association_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 15,
      goals: 34,
      cleanSheets: 9,
      possession: "57%",
    },
  },

  // =====================
  // GROUP C
  // =====================

  {
    id: "brazil",
    name: "Brazil",
    coach: "Carlo Ancelotti",
    fifaRank: 5,
    group: "C",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/05/Brazil_national_football_team_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 16,
      goals: 39,
      cleanSheets: 8,
      possession: "61%",
    },
  },

  {
    id: "morocco",
    name: "Morocco",
    coach: "Walid Regragui",
    fifaRank: 12,
    group: "C",
    logo: "https://upload.wikimedia.org/wikipedia/en/7/79/Royal_Moroccan_Football_Federation_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 15,
      goals: 33,
      cleanSheets: 10,
      possession: "54%",
    },
  },

  {
    id: "haiti",
    name: "Haiti",
    coach: "Sebastien Migne",
    fifaRank: 83,
    group: "C",
    logo: "https://upload.wikimedia.org/wikipedia/en/7/76/FHF_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1508098682722-e99c643e7485?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 8,
      goals: 20,
      cleanSheets: 3,
      possession: "45%",
    },
  },

  {
    id: "scotland",
    name: "Scotland",
    coach: "Steve Clarke",
    fifaRank: 44,
    group: "C",
    logo: "https://upload.wikimedia.org/wikipedia/en/8/8f/Scottish_Football_Association_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 11,
      goals: 26,
      cleanSheets: 6,
      possession: "49%",
    },
  },

  // =====================
  // GROUP D
  // =====================

  {
    id: "united-states",
    name: "United States",
    coach: "Mauricio Pochettino",
    fifaRank: 16,
    group: "D",
    logo: "https://upload.wikimedia.org/wikipedia/en/9/97/United_States_Soccer_Federation_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 14,
      goals: 32,
      cleanSheets: 7,
      possession: "55%",
    },
  },

  {
    id: "paraguay",
    name: "Paraguay",
    coach: "Gustavo Alfaro",
    fifaRank: 48,
    group: "D",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/36/Paraguay_FA_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 10,
      goals: 24,
      cleanSheets: 6,
      possession: "47%",
    },
  },

  {
    id: "australia",
    name: "Australia",
    coach: "Tony Popovic",
    fifaRank: 26,
    group: "D",
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Football_Australia_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1508098682722-e99c643e7485?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 13,
      goals: 30,
      cleanSheets: 7,
      possession: "52%",
    },
  },

  {
    id: "turkey",
    name: "Turkey",
    coach: "Vincenzo Montella",
    fifaRank: 27,
    group: "D",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/68/Turkish_Football_Federation_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 14,
      goals: 33,
      cleanSheets: 6,
      possession: "56%",
    },
  },

  // =====================
  // GROUP E
  // =====================

  {
    id: "germany",
    name: "Germany",
    coach: "Julian Nagelsmann",
    fifaRank: 10,
    group: "E",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/e3/DFB_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1508098682722-e99c643e7485?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 15,
      goals: 36,
      cleanSheets: 9,
      possession: "59%",
    },
  },

  {
    id: "curacao",
    name: "Curacao",
    coach: "Dick Advocaat",
    fifaRank: 90,
    group: "E",
    logo: "https://upload.wikimedia.org/wikipedia/en/8/85/FFK_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 7,
      goals: 18,
      cleanSheets: 3,
      possession: "44%",
    },
  },

  {
    id: "ivory-coast",
    name: "Ivory Coast",
    coach: "Emerse Fae",
    fifaRank: 14,
    group: "E",
    logo: "https://upload.wikimedia.org/wikipedia/en/8/8f/FIF_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 16,
      goals: 35,
      cleanSheets: 8,
      possession: "54%",
    },
  },

  {
    id: "ecuador",
    name: "Ecuador",
    coach: "Sebastian Beccacece",
    fifaRank: 24,
    group: "E",
    logo: "https://upload.wikimedia.org/wikipedia/en/7/74/FEF_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 14,
      goals: 29,
      cleanSheets: 10,
      possession: "50%",
    },
  },

  // =====================
  // GROUP F
  // =====================

  {
    id: "netherlands",
    name: "Netherlands",
    coach: "Ronald Koeman",
    fifaRank: 7,
    group: "F",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/21/KNVB_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 17,
      goals: 38,
      cleanSheets: 11,
      possession: "60%",
    },
  },

  {
    id: "japan",
    name: "Japan",
    coach: "Hajime Moriyasu",
    fifaRank: 15,
    group: "F",
    logo: "https://upload.wikimedia.org/wikipedia/en/9/97/Japan_Football_Association.svg",
    banner:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 15,
      goals: 34,
      cleanSheets: 9,
      possession: "57%",
    },
  },

  {
    id: "sweden",
    name: "Sweden",
    coach: "Jon Dahl Tomasson",
    fifaRank: 29,
    group: "F",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/45/Swedish_Football_Association_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 12,
      goals: 28,
      cleanSheets: 7,
      possession: "53%",
    },
  },

  {
    id: "tunisia",
    name: "Tunisia",
    coach: "Sami Trabelsi",
    fifaRank: 41,
    group: "F",
    logo: "https://upload.wikimedia.org/wikipedia/en/7/74/Tunisian_Football_Federation_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 10,
      goals: 22,
      cleanSheets: 8,
      possession: "48%",
    },
  },

  // =====================
  // GROUP G
  // =====================

  {
    id: "belgium",
    name: "Belgium",
    coach: "Rudi Garcia",
    fifaRank: 8,
    group: "G",
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f8/Royal_Belgian_FA_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 16,
      goals: 37,
      cleanSheets: 8,
      possession: "59%",
    },
  },

  {
    id: "egypt",
    name: "Egypt",
    coach: "Hossam Hassan",
    fifaRank: 32,
    group: "G",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/07/Egyptian_Football_Association_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 12,
      goals: 27,
      cleanSheets: 8,
      possession: "51%",
    },
  },

  {
    id: "iran",
    name: "Iran",
    coach: "Amir Ghalenoei",
    fifaRank: 20,
    group: "G",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/58/Football_Federation_Islamic_Republic_of_Iran_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 14,
      goals: 31,
      cleanSheets: 10,
      possession: "52%",
    },
  },

  {
    id: "new-zealand",
    name: "New Zealand",
    coach: "Darren Bazeley",
    fifaRank: 95,
    group: "G",
    logo: "https://upload.wikimedia.org/wikipedia/en/7/72/New_Zealand_Football_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1508098682722-e99c643e7485?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 8,
      goals: 19,
      cleanSheets: 5,
      possession: "46%",
    },
  },

  // =====================
  // GROUP H
  // =====================

  {
    id: "spain",
    name: "Spain",
    coach: "Luis de la Fuente",
    fifaRank: 3,
    group: "H",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/31/Spain_National_Football_Team_badge.svg",
    banner:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 17,
      goals: 40,
      cleanSheets: 11,
      possession: "67%",
    },
  },

  {
    id: "cape-verde",
    name: "Cape Verde",
    coach: "Bubista",
    fifaRank: 72,
    group: "H",
    logo: "https://upload.wikimedia.org/wikipedia/en/8/83/Federacao_Cabo_Verde_Futebol_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 9,
      goals: 21,
      cleanSheets: 6,
      possession: "47%",
    },
  },

  {
    id: "saudi-arabia",
    name: "Saudi Arabia",
    coach: "Herve Renard",
    fifaRank: 58,
    group: "H",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/66/Saudi_Arabian_Football_Federation_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 11,
      goals: 24,
      cleanSheets: 7,
      possession: "49%",
    },
  },

  {
    id: "uruguay",
    name: "Uruguay",
    coach: "Marcelo Bielsa",
    fifaRank: 11,
    group: "H",
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Uruguayan_Football_Association_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 16,
      goals: 36,
      cleanSheets: 9,
      possession: "58%",
    },
  },

  // =====================
  // GROUP I
  // =====================

  {
    id: "france",
    name: "France",
    coach: "Didier Deschamps",
    fifaRank: 2,
    group: "I",
    logo: "https://upload.wikimedia.org/wikipedia/en/1/12/France_national_football_team_seal.svg",
    banner:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 18,
      goals: 42,
      cleanSheets: 10,
      possession: "64%",
    },
  },

  {
    id: "senegal",
    name: "Senegal",
    coach: "Pape Thiaw",
    fifaRank: 19,
    group: "I",
    logo: "https://upload.wikimedia.org/wikipedia/en/8/8d/Federation_Senegalaise_de_Football_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 14,
      goals: 30,
      cleanSheets: 10,
      possession: "52%",
    },
  },

  {
    id: "iraq",
    name: "Iraq",
    coach: "Graham Arnold",
    fifaRank: 59,
    group: "I",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/3d/Iraq_Football_Association_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1508098682722-e99c643e7485?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 10,
      goals: 23,
      cleanSheets: 6,
      possession: "48%",
    },
  },

  {
    id: "norway",
    name: "Norway",
    coach: "Stale Solbakken",
    fifaRank: 38,
    group: "I",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/0f/Norwegian_Football_Federation_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 13,
      goals: 32,
      cleanSheets: 7,
      possession: "55%",
    },
  },

  // =====================
  // GROUP J
  // =====================

  {
    id: "argentina",
    name: "Argentina",
    coach: "Lionel Scaloni",
    fifaRank: 1,
    group: "J",
    logo: "https://upload.wikimedia.org/wikipedia/en/c/c1/Argentina_national_football_team_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 18,
      goals: 42,
      cleanSheets: 10,
      possession: "64%",
    },
  },

  {
    id: "algeria",
    name: "Algeria",
    coach: "Vladimir Petkovic",
    fifaRank: 36,
    group: "J",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/08/Algerian_Football_Federation_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 13,
      goals: 30,
      cleanSheets: 8,
      possession: "53%",
    },
  },

  {
    id: "austria",
    name: "Austria",
    coach: "Ralf Rangnick",
    fifaRank: 22,
    group: "J",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/36/Austrian_Football_Association_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 15,
      goals: 35,
      cleanSheets: 8,
      possession: "57%",
    },
  },

  {
    id: "jordan",
    name: "Jordan",
    coach: "Jamal Sellami",
    fifaRank: 62,
    group: "J",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/e2/Jordan_Football_Association_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1508098682722-e99c643e7485?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 10,
      goals: 24,
      cleanSheets: 5,
      possession: "48%",
    },
  },

  // =====================
  // GROUP K
  // =====================

  {
    id: "portugal",
    name: "Portugal",
    coach: "Roberto Martinez",
    fifaRank: 6,
    group: "K",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/Portuguese_Football_Federation.svg",
    banner:
      "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 17,
      goals: 40,
      cleanSheets: 9,
      possession: "62%",
    },
  },

  {
    id: "dr-congo",
    name: "DR Congo",
    coach: "Sebastien Desabre",
    fifaRank: 57,
    group: "K",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/29/FECOFA_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 11,
      goals: 25,
      cleanSheets: 7,
      possession: "49%",
    },
  },

  {
    id: "uzbekistan",
    name: "Uzbekistan",
    coach: "Timur Kapadze",
    fifaRank: 54,
    group: "K",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/e7/Uzbekistan_Football_Association_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 12,
      goals: 28,
      cleanSheets: 8,
      possession: "51%",
    },
  },

  {
    id: "colombia",
    name: "Colombia",
    coach: "Nestor Lorenzo",
    fifaRank: 13,
    group: "K",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/35/FCF_Logo.svg",
    banner:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 16,
      goals: 38,
      cleanSheets: 8,
      possession: "58%",
    },
  },

  // =====================
  // GROUP L
  // =====================

  {
    id: "england",
    name: "England",
    coach: "Thomas Tuchel",
    fifaRank: 4,
    group: "L",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/53/The_Football_Association_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 17,
      goals: 41,
      cleanSheets: 10,
      possession: "63%",
    },
  },

  {
    id: "croatia",
    name: "Croatia",
    coach: "Zlatko Dalic",
    fifaRank: 9,
    group: "L",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/e8/Croatian_Football_Federation_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 15,
      goals: 34,
      cleanSheets: 9,
      possession: "56%",
    },
  },

  {
    id: "ghana",
    name: "Ghana",
    coach: "Otto Addo",
    fifaRank: 76,
    group: "L",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/e7/Ghana_Football_Association_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 9,
      goals: 22,
      cleanSheets: 4,
      possession: "47%",
    },
  },

  {
    id: "panama",
    name: "Panama",
    coach: "Thomas Christiansen",
    fifaRank: 35,
    group: "L",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/02/Fepafut_logo.svg",
    banner:
      "https://images.unsplash.com/photo-1508098682722-e99c643e7485?q=80&w=1600&auto=format&fit=crop",
    stats: {
      wins: 12,
      goals: 27,
      cleanSheets: 6,
      possession: "50%",
    },
  },
];

export default teams;
