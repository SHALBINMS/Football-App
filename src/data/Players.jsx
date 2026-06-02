import messi from "../assets/players/messi.webp";
import mbappe from "../assets/players/mbappe.webp";
import haaland from "../assets/players/haaland.webp";
import salah from "../assets/players/salah.webp";
import bellingham from "../assets/players/jude.webp";
import ronaldo from "../assets/players/ronaldo.webp";
import defaultPlayer from "../assets/players/default_avatar.jpg";

// FIFA World Cup 2026 Players — Updated from confirmed/preliminary squads
// 48 nations, squads confirmed as of June 2, 2026
// Stats (goals, assists, rating, score) are illustrative/carry-over values —
// replace with live data from your backend as needed.

// ─── Image imports (keep your existing imports; new players default to undefined) ───
// import mbappe from "..."; import haaland from "..."; etc.

const dummyPlayers = [

  // ═══════════════════════════════════════════════════════
  // GROUP A — Czechia, Mexico, South Africa, South Korea
  // ═══════════════════════════════════════════════════════

  // --- Czechia ---
  { id: "101", name: "Matěj Kovář", team: "PSV Eindhoven", nationality: "Czech Republic", position: "Goalkeeper", rating: 82, goals: 0, assists: 0, age: 22, score: 290100 },
  { id: "102", name: "Jindřich Staněk", team: "Slavia Prague", nationality: "Czech Republic", position: "Goalkeeper", rating: 80, goals: 0, assists: 0, age: 28, score: 290095 },
  { id: "103", name: "Tomáš Souček", team: "West Ham", nationality: "Czech Republic", position: "Midfielder", rating: 82, goals: 6, assists: 4, age: 31, score: 290090 },
  { id: "104", name: "Patrik Schick", team: "Bayer Leverkusen", nationality: "Czech Republic", position: "Forward", rating: 84, goals: 22, assists: 5, age: 30, score: 290085 },
  { id: "105", name: "Adam Hložek", team: "Hoffenheim", nationality: "Czech Republic", position: "Forward", rating: 80, goals: 14, assists: 6, age: 23, score: 290080 },
  { id: "106", name: "Ladislav Krejčí", team: "Wolverhampton", nationality: "Czech Republic", position: "Defender", rating: 78, goals: 1, assists: 2, age: 25, score: 290075 },
  { id: "107", name: "Vladimír Darida", team: "Hradec Králové", nationality: "Czech Republic", position: "Midfielder", rating: 76, goals: 3, assists: 4, age: 33, score: 290070 },
  { id: "108", name: "Lukáš Provod", team: "Slavia Prague", nationality: "Czech Republic", position: "Midfielder", rating: 78, goals: 5, assists: 6, age: 26, score: 290065 },

  // --- Mexico ---
  { id: "111", name: "Guillermo Ochoa", team: "AEL Limassol", nationality: "Mexico", position: "Goalkeeper", rating: 80, goals: 0, assists: 0, age: 40, score: 290060 },
  { id: "112", name: "Edson Álvarez", team: "Fenerbahce", nationality: "Mexico", position: "Midfielder", rating: 84, goals: 4, assists: 6, age: 27, score: 290055 },
  { id: "113", name: "Raúl Jiménez", team: "Fulham", nationality: "Mexico", position: "Striker", rating: 82, goals: 9, assists: 3, age: 34, score: 290050 },
  { id: "114", name: "Santiago Giménez", team: "AC Milan", nationality: "Mexico", position: "Striker", rating: 84, goals: 21, assists: 4, age: 24, score: 290045 },
  { id: "115", name: "César Montes", team: "Lokomotiv Moscow", nationality: "Mexico", position: "Defender", rating: 79, goals: 2, assists: 1, age: 27, score: 290040 },
  { id: "116", name: "Obed Vargas", team: "Atletico Madrid", nationality: "Mexico", position: "Midfielder", rating: 78, goals: 2, assists: 4, age: 20, score: 290035 },
  { id: "117", name: "Alexis Vega", team: "Toluca", nationality: "Mexico", position: "Forward", rating: 78, goals: 10, assists: 5, age: 27, score: 290030 },
  { id: "118", name: "Roberto Alvarado", team: "Chivas", nationality: "Mexico", position: "Midfielder", rating: 77, goals: 7, assists: 5, age: 25, score: 290025 },

  // --- South Africa ---
  { id: "121", name: "Ronwen Williams", team: "Mamelodi Sundowns", nationality: "South Africa", position: "Goalkeeper", rating: 78, goals: 0, assists: 0, age: 32, score: 290020 },
  { id: "122", name: "Lyle Foster", team: "Burnley", nationality: "South Africa", position: "Forward", rating: 77, goals: 10, assists: 3, age: 24, score: 290015 },
  { id: "123", name: "Evidence Makgopa", team: "Orlando Pirates", nationality: "South Africa", position: "Forward", rating: 75, goals: 12, assists: 2, age: 24, score: 290010 },
  { id: "124", name: "Teboho Mokoena", team: "Mamelodi Sundowns", nationality: "South Africa", position: "Midfielder", rating: 76, goals: 5, assists: 7, age: 27, score: 290005 },
  { id: "125", name: "Oswin Appollis", team: "Orlando Pirates", nationality: "South Africa", position: "Forward", rating: 75, goals: 9, assists: 4, age: 23, score: 290000 },
  { id: "126", name: "Relebohile Mofokeng", team: "Orlando Pirates", nationality: "South Africa", position: "Forward", rating: 76, goals: 8, assists: 5, age: 20, score: 289995 },

  // --- South Korea ---
  { id: "131", name: "Son Heung-min", team: "LAFC", nationality: "South Korea", position: "Forward", rating: 89, goals: 17, assists: 8, age: 34, score: 289990 },
  { id: "132", name: "Kim Min-jae", team: "Bayern Munich", nationality: "South Korea", position: "Defender", rating: 87, goals: 3, assists: 1, age: 28, score: 289985 },
  { id: "133", name: "Lee Kang-in", team: "Paris Saint-Germain", nationality: "South Korea", position: "Midfielder", rating: 84, goals: 9, assists: 10, age: 24, score: 289980 },
  { id: "134", name: "Hwang Hee-chan", team: "Wolverhampton", nationality: "South Korea", position: "Forward", rating: 80, goals: 13, assists: 4, age: 28, score: 289975 },
  { id: "135", name: "Hwang In-beom", team: "Feyenoord", nationality: "South Korea", position: "Midfielder", rating: 79, goals: 5, assists: 7, age: 28, score: 289970 },
  { id: "136", name: "Jo Hyeon-woo", team: "Ulsan HD", nationality: "South Korea", position: "Goalkeeper", rating: 78, goals: 0, assists: 0, age: 33, score: 289965 },

  // ═══════════════════════════════════════════════════════
  // GROUP B — Bosnia-Herzegovina, Canada, Qatar, Switzerland
  // ═══════════════════════════════════════════════════════

  // --- Bosnia-Herzegovina ---
  { id: "201", name: "Edin Džeko", team: "Schalke 04", nationality: "Bosnia and Herzegovina", position: "Striker", rating: 80, goals: 15, assists: 5, age: 40, score: 289960 },
  { id: "202", name: "Ermedin Demirović", team: "VfB Stuttgart", nationality: "Bosnia and Herzegovina", position: "Forward", rating: 82, goals: 18, assists: 4, age: 27, score: 289955 },
  { id: "203", name: "Nikola Vasilj", team: "FC St. Pauli", nationality: "Bosnia and Herzegovina", position: "Goalkeeper", rating: 79, goals: 0, assists: 0, age: 27, score: 289950 },
  { id: "204", name: "Sead Kolašinac", team: "Atalanta BC", nationality: "Bosnia and Herzegovina", position: "Defender", rating: 79, goals: 2, assists: 3, age: 31, score: 289945 },
  { id: "205", name: "Benjamin Tahirović", team: "Bröndby IF", nationality: "Bosnia and Herzegovina", position: "Midfielder", rating: 78, goals: 4, assists: 5, age: 21, score: 289940 },

  // --- Canada ---
  { id: "211", name: "Alphonso Davies", team: "Barcelona", nationality: "Canada", position: "Defender", rating: 87, goals: 5, assists: 12, age: 26, score: 289935 },
  { id: "212", name: "Jonathan David", team: "unknown", nationality: "Canada", position: "Striker", rating: 86, goals: 30, assists: 6, age: 25, score: 289930 },
  { id: "213", name: "Cyle Larin", team: "unknown", nationality: "Canada", position: "Forward", rating: 79, goals: 15, assists: 4, age: 30, score: 289925 },
  { id: "214", name: "Stephen Eustaquio", team: "unknown", nationality: "Canada", position: "Midfielder", rating: 80, goals: 4, assists: 7, age: 27, score: 289920 },
  { id: "215", name: "Tajon Buchanan", team: "unknown", nationality: "Canada", position: "Winger", rating: 79, goals: 6, assists: 8, age: 26, score: 289915 },
  { id: "216", name: "Dayne St Clair", team: "unknown", nationality: "Canada", position: "Goalkeeper", rating: 79, goals: 0, assists: 0, age: 27, score: 289910 },
  { id: "217", name: "Ismael Koné", team: "unknown", nationality: "Canada", position: "Midfielder", rating: 78, goals: 3, assists: 5, age: 23, score: 289905 },

  // --- Qatar ---
  { id: "221", name: "Akram Afif", team: "Al Sadd", nationality: "Qatar", position: "Forward", rating: 79, goals: 12, assists: 7, age: 28, score: 289900 },
  { id: "222", name: "Almoez Ali", team: "Al Duhail", nationality: "Qatar", position: "Forward", rating: 76, goals: 10, assists: 3, age: 28, score: 289895 },
  { id: "223", name: "Hassan Al-Haydos", team: "Al Sadd", nationality: "Qatar", position: "Midfielder", rating: 75, goals: 7, assists: 8, age: 33, score: 289890 },

  // --- Switzerland ---
  { id: "231", name: "Granit Xhaka", team: "Sunderland", nationality: "Switzerland", position: "Midfielder", rating: 84, goals: 6, assists: 9, age: 34, score: 289885 },
  { id: "232", name: "Manuel Akanji", team: "Inter Milan", nationality: "Switzerland", position: "Defender", rating: 85, goals: 3, assists: 2, age: 30, score: 289880 },
  { id: "233", name: "Gregor Kobel", team: "Borussia Dortmund", nationality: "Switzerland", position: "Goalkeeper", rating: 83, goals: 0, assists: 0, age: 28, score: 289875 },
  { id: "234", name: "Breel Embolo", team: "Rennes", nationality: "Switzerland", position: "Forward", rating: 80, goals: 11, assists: 4, age: 28, score: 289870 },
  { id: "235", name: "Noah Okafor", team: "Leeds", nationality: "Switzerland", position: "Forward", rating: 79, goals: 9, assists: 5, age: 25, score: 289865 },
  { id: "236", name: "Remo Freuler", team: "Bologna", nationality: "Switzerland", position: "Midfielder", rating: 81, goals: 4, assists: 6, age: 32, score: 289860 },
  { id: "237", name: "Dan Ndoye", team: "Nottingham Forest", nationality: "Switzerland", position: "Winger", rating: 79, goals: 8, assists: 7, age: 24, score: 289855 },

  // ═══════════════════════════════════════════════════════
  // GROUP C — Brazil, Haiti, Morocco, Scotland
  // ═══════════════════════════════════════════════════════

  // --- Brazil ---
  { id: "301", name: "Alisson Becker", team: "Liverpool", nationality: "Brazil", position: "Goalkeeper", rating: 90, goals: 0, assists: 1, age: 34, score: 289850 },
  { id: "302", name: "Ederson", team: "Fenerbahçe", nationality: "Brazil", position: "Goalkeeper", rating: 88, goals: 0, assists: 0, age: 33, score: 289845 },
  { id: "303", name: "Marquinhos", team: "Paris Saint-Germain", nationality: "Brazil", position: "Defender", rating: 87, goals: 3, assists: 2, age: 32, score: 289840 },
  { id: "304", name: "Vinícius Júnior", team: "Real Madrid", nationality: "Brazil", position: "Forward", rating: 92, goals: 26, assists: 13, age: 26, score: 289835 },
  { id: "305", name: "Raphinha", team: "Barcelona", nationality: "Brazil", position: "Winger", rating: 86, goals: 22, assists: 11, age: 29, score: 289830 },
  { id: "306", name: "Neymar", team: "Santos", nationality: "Brazil", position: "Forward", rating: 88, goals: 14, assists: 11, age: 34, score: 289825 },
  { id: "307", name: "Casemiro", team: "Manchester United", nationality: "Brazil", position: "Midfielder", rating: 85, goals: 5, assists: 4, age: 34, score: 289820 },
  { id: "308", name: "Bruno Guimarães", team: "Newcastle", nationality: "Brazil", position: "Midfielder", rating: 87, goals: 8, assists: 10, age: 27, score: 289815 },
  { id: "309", name: "Gabriel Martinelli", team: "Arsenal", nationality: "Brazil", position: "Forward", rating: 86, goals: 18, assists: 9, age: 24, score: 289810 },
  { id: "310", name: "Endrick", team: "Lyon", nationality: "Brazil", position: "Forward", rating: 81, goals: 15, assists: 4, age: 18, score: 289805 },
  { id: "311", name: "Lucas Paquetá", team: "Flamengo", nationality: "Brazil", position: "Midfielder", rating: 85, goals: 9, assists: 11, age: 28, score: 289800 },
  { id: "312", name: "Matheus Cunha", team: "Manchester United", nationality: "Brazil", position: "Forward", rating: 83, goals: 16, assists: 8, age: 26, score: 289795 },
  { id: "313", name: "Gabriel Magalhães", team: "Arsenal", nationality: "Brazil", position: "Defender", rating: 85, goals: 5, assists: 2, age: 27, score: 289790 },

  // --- Haiti ---
  { id: "321", name: "Jean-Ricner Bellegarde", team: "Wolves", nationality: "Haiti", position: "Midfielder", rating: 77, goals: 4, assists: 5, age: 26, score: 289785 },
  { id: "322", name: "Wilson Isidor", team: "Sunderland", nationality: "Haiti", position: "Forward", rating: 75, goals: 10, assists: 3, age: 24, score: 289780 },

  // --- Morocco ---
  { id: "331", name: "Achraf Hakimi", team: "Paris Saint-Germain", nationality: "Morocco", position: "Defender", rating: 88, goals: 7, assists: 10, age: 28, score: 289775 },
  { id: "332", name: "Brahim Díaz", team: "Real Madrid", nationality: "Morocco", position: "Midfielder", rating: 83, goals: 12, assists: 9, age: 26, score: 289770 },
  { id: "333", name: "Sofyan Amrabat", team: "Real Betis", nationality: "Morocco", position: "Midfielder", rating: 82, goals: 2, assists: 4, age: 28, score: 289765 },
  { id: "334", name: "Ayoub El Kaabi", team: "Olympiacos", nationality: "Morocco", position: "Forward", rating: 81, goals: 22, assists: 4, age: 28, score: 289760 },
  { id: "335", name: "Nayef Aguerd", team: "Marseille", nationality: "Morocco", position: "Defender", rating: 82, goals: 3, assists: 1, age: 28, score: 289755 },
  { id: "336", name: "Yassine Bounou", team: "Al-Hilal", nationality: "Morocco", position: "Goalkeeper", rating: 84, goals: 0, assists: 0, age: 33, score: 289750 },
  { id: "337", name: "Bilal El Khannouss", team: "Stuttgart", nationality: "Morocco", position: "Midfielder", rating: 80, goals: 6, assists: 8, age: 21, score: 289745 },
  { id: "338", name: "Noussair Mazraoui", team: "Manchester United", nationality: "Morocco", position: "Defender", rating: 81, goals: 3, assists: 5, age: 28, score: 289740 },

  // --- Scotland ---
  { id: "341", name: "Scott McTominay", team: "Napoli", nationality: "Scotland", position: "Midfielder", rating: 83, goals: 11, assists: 5, age: 29, score: 289735 },
  { id: "342", name: "Andy Robertson", team: "Liverpool", nationality: "Scotland", position: "Defender", rating: 86, goals: 2, assists: 11, age: 32, score: 289730 },
  { id: "343", name: "John McGinn", team: "Aston Villa", nationality: "Scotland", position: "Midfielder", rating: 82, goals: 7, assists: 6, age: 30, score: 289725 },
  { id: "344", name: "Kieran Tierney", team: "Celtic", nationality: "Scotland", position: "Defender", rating: 80, goals: 2, assists: 4, age: 28, score: 289720 },
  { id: "345", name: "Lawrence Shankland", team: "Heart of Midlothian", nationality: "Scotland", position: "Striker", rating: 78, goals: 20, assists: 3, age: 29, score: 289715 },
  { id: "346", name: "Angus Gunn", team: "Nottingham Forest", nationality: "Scotland", position: "Goalkeeper", rating: 78, goals: 0, assists: 0, age: 29, score: 289710 },
  { id: "347", name: "Lewis Ferguson", team: "Bologna", nationality: "Scotland", position: "Midfielder", rating: 79, goals: 8, assists: 7, age: 25, score: 289705 },

  // ═══════════════════════════════════════════════════════
  // GROUP D — Australia, Paraguay, Türkiye, United States
  // ═══════════════════════════════════════════════════════

  // --- Australia ---
  { id: "401", name: "Mathew Ryan", team: "unknown", nationality: "Australia", position: "Goalkeeper", rating: 79, goals: 0, assists: 0, age: 33, score: 289700 },
  { id: "402", name: "Mathew Leckie", team: "unknown", nationality: "Australia", position: "Winger", rating: 77, goals: 7, assists: 5, age: 35, score: 289695 },
  { id: "403", name: "Jackson Irvine", team: "unknown", nationality: "Australia", position: "Midfielder", rating: 77, goals: 4, assists: 5, age: 31, score: 289690 },
  { id: "404", name: "Harry Souttar", team: "unknown", nationality: "Australia", position: "Defender", rating: 78, goals: 2, assists: 1, age: 26, score: 289685 },
  { id: "405", name: "Nestory Irankunda", team: "unknown", nationality: "Australia", position: "Forward", rating: 75, goals: 6, assists: 4, age: 18, score: 289680 },

  // --- Paraguay ---
  { id: "411", name: "Miguel Almirón", team: "Atlanta United", nationality: "Paraguay", position: "Midfielder", rating: 80, goals: 9, assists: 8, age: 32, score: 289675 },
  { id: "412", name: "Julio Enciso", team: "Strasbourg", nationality: "Paraguay", position: "Forward", rating: 78, goals: 10, assists: 5, age: 21, score: 289670 },
  { id: "413", name: "Gustavo Gómez", team: "Palmeiras", nationality: "Paraguay", position: "Defender", rating: 79, goals: 3, assists: 1, age: 31, score: 289665 },
  { id: "414", name: "Diego Gómez", team: "Brighton & Hove Albion", nationality: "Paraguay", position: "Midfielder", rating: 77, goals: 3, assists: 6, age: 22, score: 289660 },

  // --- Türkiye ---
  { id: "421", name: "Hakan Çalhanoğlu", team: "Internazionale", nationality: "Turkey", position: "Midfielder", rating: 87, goals: 11, assists: 13, age: 32, score: 289655 },
  { id: "422", name: "Arda Güler", team: "Real Madrid", nationality: "Turkey", position: "Midfielder", rating: 82, goals: 14, assists: 8, age: 20, score: 289650 },
  { id: "423", name: "Kenan Yıldız", team: "Juventus", nationality: "Turkey", position: "Forward", rating: 80, goals: 12, assists: 7, age: 20, score: 289645 },
  { id: "424", name: "Merih Demiral", team: "Al-Ahli", nationality: "Turkey", position: "Defender", rating: 82, goals: 3, assists: 1, age: 27, score: 289640 },
  { id: "425", name: "Ferdi Kadıoğlu", team: "Brighton & Hove Albion", nationality: "Turkey", position: "Defender", rating: 81, goals: 2, assists: 7, age: 25, score: 289635 },
  { id: "426", name: "Mert Günok", team: "Fenerbahçe", nationality: "Turkey", position: "Goalkeeper", rating: 80, goals: 0, assists: 0, age: 36, score: 289630 },
  { id: "427", name: "Kerem Aktürkoğlu", team: "Fenerbahçe", nationality: "Turkey", position: "Forward", rating: 80, goals: 14, assists: 7, age: 26, score: 289625 },

  // --- United States ---
  { id: "431", name: "Christian Pulisic", team: "AC Milan", nationality: "USA", position: "Winger", rating: 84, goals: 16, assists: 9, age: 27, score: 289620 },
  { id: "432", name: "Tyler Adams", team: "Bournemouth", nationality: "USA", position: "Midfielder", rating: 79, goals: 2, assists: 4, age: 26, score: 289615 },
  { id: "433", name: "Weston McKennie", team: "Juventus", nationality: "USA", position: "Midfielder", rating: 80, goals: 7, assists: 5, age: 27, score: 289610 },
  { id: "434", name: "Gio Reyna", team: "Borussia Dortmund", nationality: "USA", position: "Midfielder", rating: 80, goals: 8, assists: 9, age: 22, score: 289605 },
  { id: "435", name: "Ricardo Pepi", team: "unknown", nationality: "USA", position: "Striker", rating: 78, goals: 14, assists: 3, age: 22, score: 289600 },
  { id: "436", name: "Brenden Aaronson", team: "unknown", nationality: "USA", position: "Midfielder", rating: 78, goals: 6, assists: 7, age: 25, score: 289595 },
  { id: "437", name: "Matt Turner", team: "New England", nationality: "USA", position: "Goalkeeper", rating: 78, goals: 0, assists: 0, age: 31, score: 289590 },
  { id: "438", name: "Folarin Balogun", team: "unknown", nationality: "USA", position: "Forward", rating: 79, goals: 12, assists: 4, age: 24, score: 289585 },
  { id: "439", name: "Tim Weah", team: "unknown", nationality: "USA", position: "Winger", rating: 77, goals: 6, assists: 5, age: 24, score: 289580 },
  { id: "440", name: "Antonee Robinson", team: "Fulham", nationality: "USA", position: "Defender", rating: 79, goals: 2, assists: 5, age: 27, score: 289575 },

  // ═══════════════════════════════════════════════════════
  // GROUP E — Curaçao, Ecuador, Germany, Ivory Coast
  // ═══════════════════════════════════════════════════════

  // --- Ecuador ---
  { id: "501", name: "Moisés Caicedo", team: "Chelsea", nationality: "Ecuador", position: "Midfielder", rating: 85, goals: 3, assists: 5, age: 24, score: 289570 },
  { id: "502", name: "Enner Valencia", team: "unknown", nationality: "Ecuador", position: "Forward", rating: 78, goals: 12, assists: 4, age: 36, score: 289565 },
  { id: "503", name: "Piero Hincapié", team: "Bayer Leverkusen", nationality: "Ecuador", position: "Defender", rating: 82, goals: 2, assists: 3, age: 23, score: 289560 },
  { id: "504", name: "Kendry Páez", team: "unknown", nationality: "Ecuador", position: "Midfielder", rating: 78, goals: 5, assists: 7, age: 17, score: 289555 },
  { id: "505", name: "Willian Pacho", team: "Paris Saint-Germain", nationality: "Ecuador", position: "Defender", rating: 82, goals: 2, assists: 1, age: 23, score: 289550 },
  { id: "506", name: "Pervis Estupinan", team: "AC Milan", nationality: "Ecuador", position: "Defender", rating: 82, goals: 2, assists: 6, age: 27, score: 289545 },

  // --- Germany ---
  { id: "511", name: "Manuel Neuer", team: "Bayern Munich", nationality: "Germany", position: "Goalkeeper", rating: 87, goals: 0, assists: 0, age: 40, score: 289540 },
  { id: "512", name: "Joshua Kimmich", team: "Bayern Munich", nationality: "Germany", position: "Midfielder", rating: 88, goals: 6, assists: 13, age: 31, score: 289535 },
  { id: "513", name: "Jamal Musiala", team: "Bayern Munich", nationality: "Germany", position: "Midfielder", rating: 89, goals: 15, assists: 12, age: 23, score: 289530 },
  { id: "514", name: "Florian Wirtz", team: "Bayer Leverkusen", nationality: "Germany", position: "Midfielder", rating: 89, goals: 18, assists: 15, age: 22, score: 289525 },
  { id: "515", name: "Kai Havertz", team: "Arsenal", nationality: "Germany", position: "Forward", rating: 84, goals: 14, assists: 7, age: 27, score: 289520 },
  { id: "516", name: "Leroy Sané", team: "Bayern Munich", nationality: "Germany", position: "Winger", rating: 85, goals: 12, assists: 10, age: 30, score: 289515 },
  { id: "517", name: "Antonio Rüdiger", team: "Real Madrid", nationality: "Germany", position: "Defender", rating: 85, goals: 4, assists: 2, age: 33, score: 289510 },
  { id: "518", name: "Leon Goretzka", team: "Bayern Munich", nationality: "Germany", position: "Midfielder", rating: 83, goals: 7, assists: 8, age: 31, score: 289505 },

  // --- Ivory Coast ---
  { id: "521", name: "Franck Kessié", team: "unknown", nationality: "Ivory Coast", position: "Midfielder", rating: 83, goals: 6, assists: 5, age: 30, score: 289500 },
  { id: "522", name: "Amad Diallo", team: "Manchester United", nationality: "Ivory Coast", position: "Winger", rating: 80, goals: 14, assists: 7, age: 23, score: 289495 },
  { id: "523", name: "Simon Adingra", team: "Brighton & Hove Albion", nationality: "Ivory Coast", position: "Winger", rating: 79, goals: 10, assists: 6, age: 23, score: 289490 },
  { id: "524", name: "Seko Fofana", team: "unknown", nationality: "Ivory Coast", position: "Midfielder", rating: 82, goals: 5, assists: 7, age: 29, score: 289485 },

  // ═══════════════════════════════════════════════════════
  // GROUP F — Japan, Netherlands, Sweden, Tunisia
  // ═══════════════════════════════════════════════════════

  // --- Japan ---
  { id: "601", name: "Takefusa Kubo", team: "Real Sociedad", nationality: "Japan", position: "Winger", rating: 82, goals: 12, assists: 9, age: 23, score: 289480 },
  { id: "602", name: "Wataru Endo", team: "Liverpool", nationality: "Japan", position: "Midfielder", rating: 81, goals: 3, assists: 5, age: 31, score: 289475 },
  { id: "603", name: "Ritsu Doan", team: "Freiburg", nationality: "Japan", position: "Winger", rating: 79, goals: 10, assists: 7, age: 27, score: 289470 },
  { id: "604", name: "Ayase Ueda", team: "unknown", nationality: "Japan", position: "Forward", rating: 78, goals: 18, assists: 4, age: 26, score: 289465 },
  { id: "605", name: "Daichi Kamada", team: "unknown", nationality: "Japan", position: "Midfielder", rating: 80, goals: 8, assists: 9, age: 29, score: 289460 },
  { id: "606", name: "Zion Suzuki", team: "unknown", nationality: "Japan", position: "Goalkeeper", rating: 76, goals: 0, assists: 0, age: 22, score: 289455 },
  { id: "607", name: "Takehiro Tomiyasu", team: "Arsenal", nationality: "Japan", position: "Defender", rating: 80, goals: 1, assists: 3, age: 27, score: 289450 },

  // --- Netherlands ---
  { id: "611", name: "Virgil van Dijk", team: "Liverpool", nationality: "Netherlands", position: "Defender", rating: 89, goals: 5, assists: 2, age: 35, score: 289445 },
  { id: "612", name: "Frenkie de Jong", team: "Barcelona", nationality: "Netherlands", position: "Midfielder", rating: 88, goals: 6, assists: 9, age: 29, score: 289440 },
  { id: "613", name: "Memphis Depay", team: "unknown", nationality: "Netherlands", position: "Forward", rating: 83, goals: 18, assists: 7, age: 32, score: 289435 },
  { id: "614", name: "Ryan Gravenberch", team: "Liverpool", nationality: "Netherlands", position: "Midfielder", rating: 83, goals: 5, assists: 7, age: 23, score: 289430 },
  { id: "615", name: "Cody Gakpo", team: "Liverpool", nationality: "Netherlands", position: "Winger", rating: 83, goals: 16, assists: 8, age: 26, score: 289425 },
  { id: "616", name: "Tijjani Reijnders", team: "AC Milan", nationality: "Netherlands", position: "Midfielder", rating: 84, goals: 9, assists: 10, age: 27, score: 289420 },
  { id: "617", name: "Donyell Malen", team: "unknown", nationality: "Netherlands", position: "Winger", rating: 81, goals: 13, assists: 7, age: 27, score: 289415 },
  { id: "618", name: "Mark Flekken", team: "Brentford", nationality: "Netherlands", position: "Goalkeeper", rating: 80, goals: 0, assists: 0, age: 32, score: 289410 },
  { id: "619", name: "Denzel Dumfries", team: "Inter Milan", nationality: "Netherlands", position: "Defender", rating: 82, goals: 4, assists: 8, age: 29, score: 289405 },
  { id: "620", name: "Micky van de Ven", team: "Tottenham", nationality: "Netherlands", position: "Defender", rating: 82, goals: 2, assists: 3, age: 24, score: 289400 },

  // --- Sweden ---
  { id: "631", name: "Alexander Isak", team: "Newcastle", nationality: "Sweden", position: "Striker", rating: 87, goals: 28, assists: 7, age: 26, score: 289395 },
  { id: "632", name: "Viktor Gyökeres", team: "Arsenal", nationality: "Sweden", position: "Striker", rating: 87, goals: 35, assists: 6, age: 27, score: 289390 },
  { id: "633", name: "Dejan Kulusevski", team: "Tottenham", nationality: "Sweden", position: "Winger", rating: 82, goals: 10, assists: 12, age: 25, score: 289385 },
  { id: "634", name: "Victor Lindelöf", team: "Manchester United", nationality: "Sweden", position: "Defender", rating: 79, goals: 2, assists: 1, age: 30, score: 289380 },
  { id: "635", name: "Lucas Bergvall", team: "Tottenham", nationality: "Sweden", position: "Midfielder", rating: 78, goals: 4, assists: 6, age: 19, score: 289375 },
  { id: "636", name: "Anthony Elanga", team: "Nottingham Forest", nationality: "Sweden", position: "Winger", rating: 79, goals: 11, assists: 7, age: 23, score: 289370 },

  // ═══════════════════════════════════════════════════════
  // GROUP G — Belgium, Egypt, Iran, New Zealand
  // ═══════════════════════════════════════════════════════

  // --- Belgium ---
  { id: "701", name: "Thibaut Courtois", team: "Real Madrid", nationality: "Belgium", position: "Goalkeeper", rating: 90, goals: 0, assists: 0, age: 34, score: 289365 },
  { id: "702", name: "Kevin De Bruyne", team: "unknown", nationality: "Belgium", position: "Midfielder", rating: 90, goals: 10, assists: 18, age: 35, score: 289360 },
  { id: "703", name: "Romelu Lukaku", team: "Napoli", nationality: "Belgium", position: "Striker", rating: 84, goals: 21, assists: 4, age: 33, score: 289355 },
  { id: "704", name: "Jeremy Doku", team: "Manchester City", nationality: "Belgium", position: "Winger", rating: 82, goals: 9, assists: 10, age: 23, score: 289350 },
  { id: "705", name: "Leandro Trossard", team: "Arsenal", nationality: "Belgium", position: "Winger", rating: 81, goals: 11, assists: 8, age: 30, score: 289345 },
  { id: "706", name: "Amadou Onana", team: "Aston Villa", nationality: "Belgium", position: "Midfielder", rating: 82, goals: 5, assists: 4, age: 24, score: 289340 },
  { id: "707", name: "Charles De Ketelaere", team: "Atalanta BC", nationality: "Belgium", position: "Midfielder", rating: 81, goals: 14, assists: 9, age: 24, score: 289335 },

  // --- Egypt ---
  { id: "711", name: "Mohamed Salah", team: "Liverpool", nationality: "Egypt", position: "Forward", rating: 91, goals: 30, assists: 14, age: 33, score: 289330 },
  { id: "712", name: "Omar Marmoush", team: "Manchester City", nationality: "Egypt", position: "Forward", rating: 83, goals: 22, assists: 9, age: 26, score: 289325 },
  { id: "713", name: "Mohamed El Shenawy", team: "unknown", nationality: "Egypt", position: "Goalkeeper", rating: 78, goals: 0, assists: 0, age: 36, score: 289320 },
  { id: "714", name: "Trezeguet", team: "unknown", nationality: "Egypt", position: "Winger", rating: 77, goals: 8, assists: 5, age: 30, score: 289315 },

  // ═══════════════════════════════════════════════════════
  // GROUP H — Cape Verde, Saudi Arabia, Spain, Uruguay
  // ═══════════════════════════════════════════════════════

  // --- Spain ---
  { id: "801", name: "Lamine Yamal", team: "Barcelona", nationality: "Spain", position: "Winger", rating: 89, goals: 19, assists: 17, age: 19, score: 289310 },
  { id: "802", name: "Rodri", team: "Manchester City", nationality: "Spain", position: "Midfielder", rating: 91, goals: 9, assists: 10, age: 30, score: 289305 },
  { id: "803", name: "Pedri", team: "Barcelona", nationality: "Spain", position: "Midfielder", rating: 88, goals: 8, assists: 11, age: 24, score: 289300 },
  { id: "804", name: "Gavi", team: "Barcelona", nationality: "Spain", position: "Midfielder", rating: 86, goals: 5, assists: 7, age: 22, score: 289295 },
  { id: "805", name: "Nico Williams", team: "Athletic Bilbao", nationality: "Spain", position: "Winger", rating: 86, goals: 14, assists: 12, age: 22, score: 289290 },
  { id: "806", name: "Dani Olmo", team: "Barcelona", nationality: "Spain", position: "Midfielder", rating: 85, goals: 11, assists: 9, age: 27, score: 289285 },
  { id: "807", name: "Unai Simón", team: "Athletic Bilbao", nationality: "Spain", position: "Goalkeeper", rating: 84, goals: 0, assists: 0, age: 28, score: 289280 },
  { id: "808", name: "Mikel Merino", team: "Arsenal", nationality: "Spain", position: "Midfielder", rating: 83, goals: 7, assists: 7, age: 29, score: 289275 },
  { id: "809", name: "Pau Cubarsí", team: "Barcelona", nationality: "Spain", position: "Defender", rating: 83, goals: 2, assists: 2, age: 18, score: 289270 },
  { id: "810", name: "Martin Zubimendi", team: "Arsenal", nationality: "Spain", position: "Midfielder", rating: 84, goals: 3, assists: 5, age: 26, score: 289265 },
  { id: "811", name: "Fabián Ruiz", team: "Paris Saint-Germain", nationality: "Spain", position: "Midfielder", rating: 83, goals: 7, assists: 8, age: 29, score: 289260 },

  // --- Uruguay ---
  { id: "821", name: "Darwin Núñez", team: "Liverpool", nationality: "Uruguay", position: "Forward", rating: 84, goals: 20, assists: 8, age: 27, score: 289255 },
  { id: "822", name: "Federico Valverde", team: "Real Madrid", nationality: "Uruguay", position: "Midfielder", rating: 89, goals: 11, assists: 7, age: 28, score: 289250 },
  { id: "823", name: "Ronald Araújo", team: "Barcelona", nationality: "Uruguay", position: "Defender", rating: 87, goals: 4, assists: 2, age: 27, score: 289245 },
  { id: "824", name: "Rodrigo Bentancur", team: "Tottenham", nationality: "Uruguay", position: "Midfielder", rating: 82, goals: 4, assists: 6, age: 27, score: 289240 },
  { id: "825", name: "Fernando Muslera", team: "Galatasaray", nationality: "Uruguay", position: "Goalkeeper", rating: 78, goals: 0, assists: 0, age: 38, score: 289235 },

  // ═══════════════════════════════════════════════════════
  // GROUP I — France, Iraq, Norway, Senegal
  // ═══════════════════════════════════════════════════════

  // --- France ---
  { id: "901", name: "Kylian Mbappé", team: "Real Madrid", nationality: "France", position: "Forward", rating: 95, goals: 41, assists: 12, age: 27, score: 301297 },
  { id: "902", name: "Mike Maignan", team: "AC Milan", nationality: "France", position: "Goalkeeper", rating: 88, goals: 0, assists: 0, age: 29, score: 289230 },
  { id: "903", name: "William Saliba", team: "Arsenal", nationality: "France", position: "Defender", rating: 87, goals: 4, assists: 2, age: 25, score: 289225 },
  { id: "904", name: "Jules Koundé", team: "Barcelona", nationality: "France", position: "Defender", rating: 86, goals: 3, assists: 4, age: 27, score: 289220 },
  { id: "905", name: "Aurélien Tchouaméni", team: "Real Madrid", nationality: "France", position: "Midfielder", rating: 86, goals: 5, assists: 5, age: 26, score: 289215 },
  { id: "906", name: "Ousmane Dembélé", team: "Paris Saint-Germain", nationality: "France", position: "Winger", rating: 85, goals: 15, assists: 13, age: 28, score: 289210 },
  { id: "907", name: "Marcus Thuram", team: "Inter Milan", nationality: "France", position: "Forward", rating: 85, goals: 20, assists: 9, age: 27, score: 289205 },
  { id: "908", name: "Bradley Barcola", team: "Paris Saint-Germain", nationality: "France", position: "Winger", rating: 82, goals: 18, assists: 10, age: 23, score: 289200 },
  { id: "909", name: "Warren Zaïre-Emery", team: "Paris Saint-Germain", nationality: "France", position: "Midfielder", rating: 82, goals: 6, assists: 7, age: 19, score: 289195 },
  { id: "910", name: "Ibrahima Konaté", team: "Liverpool", nationality: "France", position: "Defender", rating: 85, goals: 3, assists: 1, age: 26, score: 289190 },
  { id: "911", name: "Théo Hernández", team: "Al-Hilal", nationality: "France", position: "Defender", rating: 84, goals: 5, assists: 8, age: 28, score: 289185 },
  { id: "912", name: "N'Golo Kanté", team: "Fenerbahçe", nationality: "France", position: "Midfielder", rating: 85, goals: 3, assists: 5, age: 35, score: 289180 },
  { id: "913", name: "Michael Olise", team: "Bayern Munich", nationality: "France", position: "Winger", rating: 84, goals: 16, assists: 11, age: 24, score: 289175 },
  { id: "914", name: "Adrien Rabiot", team: "AC Milan", nationality: "France", position: "Midfielder", rating: 84, goals: 8, assists: 5, age: 31, score: 289170 },
  { id: "915", name: "Rayan Cherki", team: "Manchester City", nationality: "France", position: "Midfielder", rating: 81, goals: 10, assists: 9, age: 22, score: 289165 },
  { id: "916", name: "Dayot Upamecano", team: "Bayern Munich", nationality: "France", position: "Defender", rating: 84, goals: 2, assists: 1, age: 27, score: 289160 },
  { id: "917", name: "Désire Doué", team: "Paris Saint-Germain", nationality: "France", position: "Winger", rating: 81, goals: 12, assists: 8, age: 20, score: 289155 },

  // --- Norway ---
  { id: "921", name: "Erling Haaland", team: "Manchester City", nationality: "Norway", position: "Striker", rating: 94, goals: 44, assists: 7, age: 26, score: 301250 },
  { id: "922", name: "Martin Ødegaard", team: "Arsenal", nationality: "Norway", position: "Midfielder", rating: 89, goals: 14, assists: 12, age: 27, score: 289150 },
  { id: "923", name: "Alexander Sørloth", team: "Atlético Madrid", nationality: "Norway", position: "Striker", rating: 82, goals: 20, assists: 5, age: 29, score: 289145 },
  { id: "924", name: "Antonio Nusa", team: "Bayer Leverkusen", nationality: "Norway", position: "Winger", rating: 79, goals: 8, assists: 7, age: 19, score: 289140 },
  { id: "925", name: "Sander Berge", team: "Fulham", nationality: "Norway", position: "Midfielder", rating: 80, goals: 5, assists: 6, age: 27, score: 289135 },

  // --- Senegal ---
  { id: "931", name: "Sadio Mané", team: "Al Nassr", nationality: "Senegal", position: "Forward", rating: 86, goals: 20, assists: 8, age: 34, score: 289130 },
  { id: "932", name: "Edouard Mendy", team: "unknown", nationality: "Senegal", position: "Goalkeeper", rating: 82, goals: 0, assists: 0, age: 34, score: 289125 },
  { id: "933", name: "Kalidou Koulibaly", team: "unknown", nationality: "Senegal", position: "Defender", rating: 83, goals: 4, assists: 2, age: 35, score: 289120 },
  { id: "934", name: "Ismaila Sarr", team: "unknown", nationality: "Senegal", position: "Winger", rating: 81, goals: 12, assists: 8, age: 27, score: 289115 },
  { id: "935", name: "Pape Matar Sarr", team: "Tottenham", nationality: "Senegal", position: "Midfielder", rating: 80, goals: 5, assists: 7, age: 23, score: 289110 },
  { id: "936", name: "Nicolas Jackson", team: "Chelsea", nationality: "Senegal", position: "Striker", rating: 82, goals: 20, assists: 6, age: 24, score: 289105 },
  { id: "937", name: "Iliman Ndiaye", team: "Everton", nationality: "Senegal", position: "Winger", rating: 80, goals: 13, assists: 7, age: 25, score: 289100 },

  // ═══════════════════════════════════════════════════════
  // GROUP J — Algeria, Argentina, Austria, Jordan
  // ═══════════════════════════════════════════════════════

  // --- Argentina ---
  { id: "1001", name: "Lionel Messi", team: "Inter Miami", nationality: "Argentina", position: "Forward", rating: 93, goals: 28, assists: 18, age: 39, score: 301220 },
  { id: "1002", name: "Emiliano Martínez", team: "Aston Villa", nationality: "Argentina", position: "Goalkeeper", rating: 88, goals: 0, assists: 0, age: 33, score: 289095 },
  { id: "1003", name: "Julián Álvarez", team: "Atletico Madrid", nationality: "Argentina", position: "Forward", rating: 87, goals: 25, assists: 8, age: 25, score: 289090 },
  { id: "1004", name: "Lautaro Martínez", team: "Inter Milan", nationality: "Argentina", position: "Striker", rating: 89, goals: 29, assists: 6, age: 28, score: 289085 },
  { id: "1005", name: "Enzo Fernández", team: "Chelsea", nationality: "Argentina", position: "Midfielder", rating: 85, goals: 5, assists: 10, age: 25, score: 289080 },
  { id: "1006", name: "Alexis Mac Allister", team: "Liverpool", nationality: "Argentina", position: "Midfielder", rating: 85, goals: 7, assists: 9, age: 26, score: 289075 },
  { id: "1007", name: "Rodrigo De Paul", team: "Atletico Madrid", nationality: "Argentina", position: "Midfielder", rating: 84, goals: 5, assists: 9, age: 31, score: 289070 },
  { id: "1008", name: "Cristian Romero", team: "Tottenham", nationality: "Argentina", position: "Defender", rating: 85, goals: 3, assists: 2, age: 27, score: 289065 },
  { id: "1009", name: "Nicolás Otamendi", team: "Benfica", nationality: "Argentina", position: "Defender", rating: 82, goals: 3, assists: 1, age: 38, score: 289060 },
  { id: "1010", name: "Lisandro Martínez", team: "Manchester United", nationality: "Argentina", position: "Defender", rating: 84, goals: 2, assists: 2, age: 27, score: 289055 },
  { id: "1011", name: "Giovani Lo Celso", team: "Villarreal", nationality: "Argentina", position: "Midfielder", rating: 82, goals: 6, assists: 8, age: 29, score: 289050 },

  // --- Algeria ---
  { id: "1021", name: "Riyad Mahrez", team: "unknown", nationality: "Algeria", position: "Winger", rating: 84, goals: 14, assists: 10, age: 35, score: 289045 },
  { id: "1022", name: "Mohamed Amoura", team: "Wolfsburg", nationality: "Algeria", position: "Forward", rating: 80, goals: 18, assists: 6, age: 25, score: 289040 },
  { id: "1023", name: "Amine Gouiri", team: "unknown", nationality: "Algeria", position: "Forward", rating: 79, goals: 12, assists: 7, age: 25, score: 289035 },

  // --- Austria ---
  { id: "1031", name: "Marcel Sabitzer", team: "unknown", nationality: "Austria", position: "Midfielder", rating: 82, goals: 9, assists: 10, age: 31, score: 289030 },
  { id: "1032", name: "David Alaba", team: "Real Madrid", nationality: "Austria", position: "Defender", rating: 84, goals: 3, assists: 4, age: 33, score: 289025 },
  { id: "1033", name: "Marko Arnautović", team: "Inter Milan", nationality: "Austria", position: "Striker", rating: 79, goals: 12, assists: 4, age: 37, score: 289020 },
  { id: "1034", name: "Konrad Laimer", team: "Bayern Munich", nationality: "Austria", position: "Midfielder", rating: 81, goals: 4, assists: 6, age: 27, score: 289015 },
  { id: "1035", name: "Kevin Danso", team: "Lens", nationality: "Austria", position: "Defender", rating: 81, goals: 2, assists: 1, age: 26, score: 289010 },

  // ═══════════════════════════════════════════════════════
  // GROUP K — Colombia, Congo DR, Portugal, Uzbekistan
  // ═══════════════════════════════════════════════════════

  // --- Portugal ---
  { id: "1101", name: "Cristiano Ronaldo", team: "Al Nassr", nationality: "Portugal", position: "Forward", rating: 91, goals: 40, assists: 6, age: 41, score: 301075 },
  { id: "1102", name: "Bruno Fernandes", team: "Manchester United", nationality: "Portugal", position: "Midfielder", rating: 88, goals: 15, assists: 13, age: 32, score: 289005 },
  { id: "1103", name: "Bernardo Silva", team: "Manchester City", nationality: "Portugal", position: "Midfielder", rating: 89, goals: 10, assists: 14, age: 32, score: 289000 },
  { id: "1104", name: "Diogo Costa", team: "Porto", nationality: "Portugal", position: "Goalkeeper", rating: 85, goals: 0, assists: 0, age: 25, score: 288995 },
  { id: "1105", name: "Rúben Dias", team: "Manchester City", nationality: "Portugal", position: "Defender", rating: 89, goals: 4, assists: 2, age: 28, score: 288990 },
  { id: "1106", name: "Rafael Leão", team: "AC Milan", nationality: "Portugal", position: "Winger", rating: 87, goals: 17, assists: 10, age: 27, score: 288985 },
  { id: "1107", name: "João Félix", team: "Barcelona", nationality: "Portugal", position: "Forward", rating: 84, goals: 11, assists: 6, age: 26, score: 288980 },
  { id: "1108", name: "Pedro Neto", team: "Chelsea", nationality: "Portugal", position: "Winger", rating: 84, goals: 11, assists: 10, age: 25, score: 288975 },
  { id: "1109", name: "Vitinha", team: "Paris Saint-Germain", nationality: "Portugal", position: "Midfielder", rating: 84, goals: 6, assists: 9, age: 25, score: 288970 },
  { id: "1110", name: "Gonçalo Ramos", team: "Paris Saint-Germain", nationality: "Portugal", position: "Striker", rating: 83, goals: 22, assists: 4, age: 24, score: 288965 },
  { id: "1111", name: "João Cancelo", team: "Barcelona", nationality: "Portugal", position: "Defender", rating: 84, goals: 3, assists: 8, age: 31, score: 288960 },
  { id: "1112", name: "Francisco Conceiçao", team: "Juventus", nationality: "Portugal", position: "Winger", rating: 82, goals: 12, assists: 8, age: 22, score: 288955 },

  // --- Colombia ---
  { id: "1121", name: "James Rodríguez", team: "unknown", nationality: "Colombia", position: "Midfielder", rating: 82, goals: 8, assists: 12, age: 34, score: 288950 },
  { id: "1122", name: "Luis Díaz", team: "Liverpool", nationality: "Colombia", position: "Winger", rating: 85, goals: 17, assists: 9, age: 29, score: 288945 },
  { id: "1123", name: "Cucho Hernández", team: "Columbus Crew", nationality: "Colombia", position: "Forward", rating: 80, goals: 16, assists: 5, age: 26, score: 288940 },
  { id: "1124", name: "David Ospina", team: "unknown", nationality: "Colombia", position: "Goalkeeper", rating: 79, goals: 0, assists: 0, age: 37, score: 288935 },
  { id: "1125", name: "Davinson Sánchez", team: "Galatasaray", nationality: "Colombia", position: "Defender", rating: 81, goals: 2, assists: 1, age: 28, score: 288930 },

  // ═══════════════════════════════════════════════════════
  // GROUP L — Croatia, England, Ghana, Panama
  // ═══════════════════════════════════════════════════════

  // --- Croatia ---
  { id: "1201", name: "Luka Modrić", team: "Real Madrid", nationality: "Croatia", position: "Midfielder", rating: 87, goals: 4, assists: 10, age: 41, score: 301010 },
  { id: "1202", name: "Dominik Livaković", team: "unknown", nationality: "Croatia", position: "Goalkeeper", rating: 83, goals: 0, assists: 0, age: 30, score: 288925 },
  { id: "1203", name: "Joško Gvardiol", team: "Manchester City", nationality: "Croatia", position: "Defender", rating: 86, goals: 5, assists: 4, age: 23, score: 288920 },
  { id: "1204", name: "Marcelo Brozović", team: "unknown", nationality: "Croatia", position: "Midfielder", rating: 82, goals: 4, assists: 7, age: 32, score: 288915 },
  { id: "1205", name: "Ivan Perišić", team: "unknown", nationality: "Croatia", position: "Winger", rating: 81, goals: 8, assists: 7, age: 36, score: 288910 },
  { id: "1206", name: "Ante Budimir", team: "Osasuna", nationality: "Croatia", position: "Striker", rating: 78, goals: 14, assists: 3, age: 33, score: 288905 },
  { id: "1207", name: "Andrej Kramarić", team: "Hoffenheim", nationality: "Croatia", position: "Forward", rating: 81, goals: 18, assists: 7, age: 34, score: 288900 },
  { id: "1208", name: "Mateo Kovačić", team: "Manchester City", nationality: "Croatia", position: "Midfielder", rating: 83, goals: 4, assists: 8, age: 32, score: 288895 },
  { id: "1209", name: "Josip Stanišić", team: "Bayern Munich", nationality: "Croatia", position: "Defender", rating: 80, goals: 2, assists: 3, age: 25, score: 288890 },

  // --- England ---
  { id: "1211", name: "Harry Kane", team: "Bayern Munich", nationality: "England", position: "Striker", rating: 92, goals: 58, assists: 10, age: 33, score: 288885 },
  { id: "1212", name: "Jude Bellingham", team: "Real Madrid", nationality: "England", position: "Midfielder", rating: 91, goals: 18, assists: 10, age: 23, score: 288880 },
  { id: "1213", name: "Bukayo Saka", team: "Arsenal", nationality: "England", position: "Winger", rating: 89, goals: 19, assists: 13, age: 25, score: 288875 },
  { id: "1214", name: "Declan Rice", team: "Arsenal", nationality: "England", position: "Midfielder", rating: 88, goals: 7, assists: 8, age: 27, score: 288870 },
  { id: "1215", name: "Jordan Pickford", team: "Everton", nationality: "England", position: "Goalkeeper", rating: 83, goals: 0, assists: 0, age: 32, score: 288865 },
  { id: "1216", name: "Marcus Rashford", team: "Barcelona", nationality: "England", position: "Forward", rating: 87, goals: 18, assists: 8, age: 29, score: 288860 },
  { id: "1217", name: "John Stones", team: "Manchester City", nationality: "England", position: "Defender", rating: 84, goals: 3, assists: 3, age: 32, score: 288855 },
  { id: "1218", name: "Reece James", team: "Chelsea", nationality: "England", position: "Defender", rating: 84, goals: 4, assists: 9, age: 26, score: 288850 },
  { id: "1219", name: "Kobbie Mainoo", team: "Manchester United", nationality: "England", position: "Midfielder", rating: 81, goals: 5, assists: 6, age: 21, score: 288845 },
  { id: "1220", name: "Ivan Toney", team: "Al-Ahli", nationality: "England", position: "Striker", rating: 82, goals: 16, assists: 4, age: 30, score: 288840 },
  { id: "1221", name: "Ollie Watkins", team: "Aston Villa", nationality: "England", position: "Striker", rating: 83, goals: 20, assists: 7, age: 35, score: 288835 },
  { id: "1222", name: "Eberechi Eze", team: "Arsenal", nationality: "England", position: "Midfielder", rating: 82, goals: 9, assists: 8, age: 27, score: 288830 },
  { id: "1223", name: "Noni Madueke", team: "Arsenal", nationality: "England", position: "Winger", rating: 80, goals: 11, assists: 8, age: 24, score: 288825 },

  // --- Ghana (Preliminary) ---
  { id: "1231", name: "Inaki Williams", team: "Athletic Bilbao", nationality: "Ghana", position: "Forward", rating: 80, goals: 14, assists: 5, age: 30, score: 288820 },
  { id: "1232", name: "Antoine Semenyo", team: "Bournemouth", nationality: "Ghana", position: "Winger", rating: 78, goals: 10, assists: 5, age: 25, score: 288815 },
  { id: "1233", name: "Jordan Ayew", team: "unknown", nationality: "Ghana", position: "Forward", rating: 76, goals: 7, assists: 4, age: 33, score: 288810 },
  { id: "1234", name: "Thomas Partey", team: "Arsenal", nationality: "Ghana", position: "Midfielder", rating: 82, goals: 4, assists: 5, age: 32, score: 288805 },

  // --- Panama ---
  { id: "1241", name: "Ismael Díaz", team: "unknown", nationality: "Panama", position: "Forward", rating: 74, goals: 8, assists: 4, age: 24, score: 288800 },
  { id: "1242", name: "Alberto Quintero", team: "unknown", nationality: "Panama", position: "Winger", rating: 73, goals: 5, assists: 4, age: 34, score: 288795 },

];



const shuffledPlayers = [...dummyPlayers].sort(
  () => Math.random() - 0.5
);

export default shuffledPlayers;