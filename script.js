const monthNames = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER"
];

const ufcSource = {
  name: "UFC / 2026 event listings",
  url: "https://www.ufc.com/events",
  checkedAt: "2026-05-31"
};

const footballCsvSources = [
  {
    code: "E0",
    type: "Premier League",
    country: "England",
    url: "https://www.football-data.co.uk/mmz4281/2526/E0.csv",
    officialLink: "https://www.premierleague.com/fixtures"
  },
  {
    code: "SP1",
    type: "La Liga",
    country: "Spain",
    url: "https://www.football-data.co.uk/mmz4281/2526/SP1.csv",
    officialLink: "https://www.laliga.com/subhome/calendar"
  }
];

const footballFixtures2026 = [
  {
    id: "pl-fallback-2026-05-03",
    date: "2026-05-03",
    time: "15:30 local",
    type: "Premier League",
    sportGroup: "Football",
    leagueCode: "E0",
    title: "Man United vs Liverpool",
    homeTeam: "Man United",
    awayTeam: "Liverpool",
    venue: "Premier League",
    city: "England",
    country: "United Kingdom",
    status: "FINISHED",
    link: "https://www.premierleague.com/fixtures"
  },
  {
    id: "pl-fallback-2026-05-09",
    date: "2026-05-09",
    time: "12:30 local",
    type: "Premier League",
    sportGroup: "Football",
    leagueCode: "E0",
    title: "Liverpool vs Chelsea",
    homeTeam: "Liverpool",
    awayTeam: "Chelsea",
    venue: "Premier League",
    city: "England",
    country: "United Kingdom",
    status: "FINISHED",
    link: "https://www.premierleague.com/fixtures"
  },
  {
    id: "pl-fallback-2026-05-24",
    date: "2026-05-24",
    time: "16:00 local",
    type: "Premier League",
    sportGroup: "Football",
    leagueCode: "E0",
    title: "Final day fixtures",
    homeTeam: "Premier League",
    awayTeam: "Final day",
    venue: "Premier League",
    city: "England",
    country: "United Kingdom",
    status: "FINISHED",
    link: "https://www.premierleague.com/fixtures"
  },
  {
    id: "laliga-fallback-2026-05-24",
    date: "2026-05-24",
    time: "TBD",
    type: "La Liga",
    sportGroup: "Football",
    leagueCode: "SP1",
    title: "La Liga final matchday",
    homeTeam: "La Liga",
    awayTeam: "Final matchday",
    venue: "LALIGA",
    city: "Spain",
    country: "Spain",
    status: "FINISHED",
    link: "https://www.laliga.com/subhome/calendar"
  },
  {
    id: "pl-2026-27-release-window",
    date: "2026-08-15",
    time: "TBD",
    type: "Premier League",
    sportGroup: "Football",
    leagueCode: "E0",
    title: "Premier League 2026/27 opening weekend",
    homeTeam: "Home TBA",
    awayTeam: "Away TBA",
    venue: "Premier League",
    city: "England",
    country: "United Kingdom",
    status: "TIMED",
    link: "https://www.premierleague.com/fixtures"
  },
  {
    id: "laliga-2026-27-release-window",
    date: "2026-08-16",
    time: "TBD",
    type: "La Liga",
    sportGroup: "Football",
    leagueCode: "SP1",
    title: "La Liga 2026/27 opening weekend",
    homeTeam: "Home TBA",
    awayTeam: "Away TBA",
    venue: "LALIGA",
    city: "Spain",
    country: "Spain",
    status: "SCHEDULED",
    link: "https://www.laliga.com/subhome/calendar"
  }
];

const ufcEvents2026 = [
  {
    id: "ufc-324",
    date: "2026-01-24",
    time: "TBD",
    type: "UFC",
    series: "Numbered",
    seriesNumber: 324,
    title: "UFC 324: Gaethje vs. Pimblett",
    venue: "T-Mobile Arena",
    city: "Las Vegas, Nevada",
    country: "United States",
    link: "https://www.ufc.com/events"
  },
  {
    id: "ufc-325",
    date: "2026-02-01",
    time: "TBD",
    type: "UFC",
    series: "Numbered",
    seriesNumber: 325,
    title: "UFC 325: Volkanovski vs. Lopes 2",
    venue: "Qudos Bank Arena",
    city: "Sydney",
    country: "Australia",
    link: "https://www.ufc.com/events"
  },
  {
    id: "ufc-fn-266",
    date: "2026-02-07",
    time: "TBD",
    type: "UFC",
    series: "Fight Night",
    title: "UFC Fight Night: Bautista vs. Oliveira",
    venue: "UFC Apex",
    city: "Las Vegas, Nevada",
    country: "United States",
    link: "https://www.ufc.com/events"
  },
  {
    id: "ufc-fn-267",
    date: "2026-02-21",
    time: "TBD",
    type: "UFC",
    series: "Fight Night",
    title: "UFC Fight Night: Strickland vs. Hernandez",
    venue: "Toyota Center",
    city: "Houston, Texas",
    country: "United States",
    link: "https://www.ufc.com/events"
  },
  {
    id: "ufc-fn-268",
    date: "2026-02-28",
    time: "TBD",
    type: "UFC",
    series: "Fight Night",
    title: "UFC Fight Night: Moreno vs. Kavanagh",
    venue: "Arena CDMX",
    city: "Mexico City",
    country: "Mexico",
    link: "https://www.ufc.com/events"
  },
  {
    id: "ufc-326",
    date: "2026-03-07",
    time: "TBD",
    type: "UFC",
    series: "Numbered",
    seriesNumber: 326,
    title: "UFC 326: Holloway vs. Oliveira 2",
    venue: "T-Mobile Arena",
    city: "Las Vegas, Nevada",
    country: "United States",
    link: "https://www.ufc.com/events"
  },
  {
    id: "ufc-fn-269",
    date: "2026-03-14",
    time: "TBD",
    type: "UFC",
    series: "Fight Night",
    title: "UFC Fight Night: Emmett vs. Vallejos",
    venue: "UFC Apex",
    city: "Las Vegas, Nevada",
    country: "United States",
    link: "https://www.ufc.com/events"
  },
  {
    id: "ufc-fn-270",
    date: "2026-03-21",
    time: "TBD",
    type: "UFC",
    series: "Fight Night",
    title: "UFC Fight Night: Evloev vs. Murphy",
    venue: "The O2 Arena",
    city: "London",
    country: "United Kingdom",
    link: "https://www.ufc.com/events"
  },
  {
    id: "ufc-fn-271",
    date: "2026-03-28",
    time: "TBD",
    type: "UFC",
    series: "Fight Night",
    title: "UFC Fight Night: Adesanya vs. Pyfer",
    venue: "Climate Pledge Arena",
    city: "Seattle, Washington",
    country: "United States",
    link: "https://www.ufc.com/events"
  },
  {
    id: "ufc-fn-272",
    date: "2026-04-04",
    time: "TBD",
    type: "UFC",
    series: "Fight Night",
    title: "UFC Fight Night: Moicano vs. Duncan",
    venue: "UFC Apex",
    city: "Las Vegas, Nevada",
    country: "United States",
    link: "https://www.ufc.com/events"
  },
  {
    id: "ufc-327",
    date: "2026-04-11",
    time: "TBD",
    type: "UFC",
    series: "Numbered",
    seriesNumber: 327,
    title: "UFC 327: Prochazka vs. Ulberg",
    venue: "Kaseya Center",
    city: "Miami, Florida",
    country: "United States",
    link: "https://www.ufc.com/events"
  },
  {
    id: "ufc-fn-273",
    date: "2026-04-18",
    time: "TBD",
    type: "UFC",
    series: "Fight Night",
    title: "UFC Fight Night: Burns vs. Malott",
    venue: "Canada Life Centre",
    city: "Winnipeg, Manitoba",
    country: "Canada",
    link: "https://www.ufc.com/events"
  },
  {
    id: "ufc-fn-274",
    date: "2026-04-25",
    time: "TBD",
    type: "UFC",
    series: "Fight Night",
    title: "UFC Fight Night: Sterling vs. Zalal",
    venue: "UFC Apex",
    city: "Las Vegas, Nevada",
    country: "United States",
    link: "https://www.ufc.com/events"
  },
  {
    id: "ufc-fn-275",
    date: "2026-05-02",
    time: "TBD",
    type: "UFC",
    series: "Fight Night",
    title: "UFC Fight Night: Della Maddalena vs. Prates",
    venue: "RAC Arena",
    city: "Perth",
    country: "Australia",
    link: "https://www.ufc.com/events"
  },
  {
    id: "ufc-328",
    date: "2026-05-09",
    time: "TBD",
    type: "UFC",
    series: "Numbered",
    seriesNumber: 328,
    title: "UFC 328: Chimaev vs. Strickland",
    venue: "Prudential Center",
    city: "Newark, New Jersey",
    country: "United States",
    link: "https://www.ufc.com/events"
  },
  {
    id: "ufc-fn-276",
    date: "2026-05-16",
    time: "TBD",
    type: "UFC",
    series: "Fight Night",
    title: "UFC Fight Night: Allen vs. Costa",
    venue: "UFC Apex",
    city: "Las Vegas, Nevada",
    country: "United States",
    link: "https://www.ufc.com/events"
  },
  {
    id: "ufc-fn-277",
    date: "2026-05-30",
    time: "TBD",
    type: "UFC",
    series: "Fight Night",
    title: "UFC Fight Night: Song vs. Figueiredo",
    venue: "Galaxy Arena",
    city: "Macau",
    country: "China",
    link: "https://www.ufc.com/events"
  },
  {
    id: "ufc-fn-278",
    date: "2026-06-06",
    time: "TBD",
    type: "UFC",
    series: "Fight Night",
    title: "UFC Fight Night: Muhammad vs. Bonfim",
    venue: "UFC Apex",
    city: "Las Vegas, Nevada",
    country: "United States",
    link: "https://www.ufc.com/events"
  },
  {
    id: "ufc-freedom-250",
    date: "2026-06-14",
    time: "TBD",
    type: "UFC",
    series: "Special",
    title: "UFC Freedom 250",
    venue: "White House",
    city: "Washington, D.C.",
    country: "United States",
    link: "https://www.ufc.com/events"
  },
  {
    id: "ufc-fn-279",
    date: "2026-06-20",
    time: "TBD",
    type: "UFC",
    series: "Fight Night",
    title: "UFC Fight Night: Kape vs. Horiguchi",
    venue: "UFC Apex",
    city: "Las Vegas, Nevada",
    country: "United States",
    link: "https://www.ufc.com/events"
  },
  {
    id: "ufc-fn-280",
    date: "2026-06-27",
    time: "TBD",
    type: "UFC",
    series: "Fight Night",
    title: "UFC Fight Night: Fiziev vs. Torres",
    venue: "Baku Crystal Hall",
    city: "Baku",
    country: "Azerbaijan",
    link: "https://www.ufc.com/events"
  },
  {
    id: "ufc-329",
    date: "2026-07-11",
    time: "TBD",
    type: "UFC",
    series: "Numbered",
    seriesNumber: 329,
    title: "UFC 329: McGregor vs. Holloway 2",
    venue: "T-Mobile Arena",
    city: "Las Vegas, Nevada",
    country: "United States",
    link: "https://www.ufc.com/events"
  },
  {
    id: "ufc-fn-281",
    date: "2026-07-18",
    time: "TBD",
    type: "UFC",
    series: "Fight Night",
    title: "UFC Fight Night 281",
    venue: "Paycom Center",
    city: "Oklahoma City, Oklahoma",
    country: "United States",
    link: "https://www.ufc.com/events"
  },
  {
    id: "ufc-fn-282",
    date: "2026-07-25",
    time: "TBD",
    type: "UFC",
    series: "Fight Night",
    title: "UFC Fight Night 282",
    venue: "Etihad Arena",
    city: "Abu Dhabi",
    country: "United Arab Emirates",
    link: "https://www.ufc.com/events"
  },
  {
    id: "ufc-fn-283",
    date: "2026-08-01",
    time: "TBD",
    type: "UFC",
    series: "Fight Night",
    title: "UFC Fight Night: Medic vs. Rodriguez",
    venue: "Belgrade Arena",
    city: "Belgrade",
    country: "Serbia",
    link: "https://www.ufc.com/events"
  },
  {
    id: "ufc-fn-284",
    date: "2026-08-08",
    time: "TBD",
    type: "UFC",
    series: "Fight Night",
    title: "UFC Fight Night 284",
    venue: "UFC Apex",
    city: "Las Vegas, Nevada",
    country: "United States",
    link: "https://www.ufc.com/events"
  },
  {
    id: "ufc-330",
    date: "2026-08-15",
    time: "TBD",
    type: "UFC",
    series: "Numbered",
    seriesNumber: 330,
    title: "UFC 330",
    venue: "Xfinity Mobile Arena",
    city: "Philadelphia, Pennsylvania",
    country: "United States",
    link: "https://www.ufc.com/events"
  },
  {
    id: "ufc-fn-285",
    date: "2026-08-29",
    time: "TBD",
    type: "UFC",
    series: "Fight Night",
    title: "UFC Fight Night 285",
    venue: "Shanghai Indoor Stadium",
    city: "Shanghai",
    country: "China",
    link: "https://www.ufc.com/events"
  }
];

const otherSportsEvents = [
  {
    id: "fifa-2026-opening",
    date: "2026-06-12",
    time: "TBD",
    type: "World Cup",
    title: "FIFA World Cup 2026 Opening Match",
    venue: "Estadio Azteca",
    city: "Mexico City",
    country: "Mexico",
    link: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026"
  },
  {
    id: "fifa-2026-final",
    date: "2026-07-19",
    time: "TBD",
    type: "World Cup",
    title: "FIFA World Cup 2026 Final",
    venue: "MetLife Stadium",
    city: "New York New Jersey",
    country: "United States",
    link: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/schedule"
  }
];

let importedFootballFixtures = [];
const todayKey = toDateKey(new Date());
const events = [...ufcEvents2026, ...footballFixtures2026, ...otherSportsEvents].map(normalizeEvent);
const initialDate = new Date();
const initialMonth = initialDate.getFullYear() === 2026 ? initialDate.getMonth() : 0;
const initialDay = initialDate.getFullYear() === 2026 ? initialDate : new Date(2026, 0, 1);

const state = {
  year: 2026,
  month: initialMonth,
  selectedDate: toDateKey(initialDay),
  posterDate: null,
  filter: "all"
};

const grid = document.querySelector("#calendarGrid");
const eventList = document.querySelector("#eventList");
const monthNumber = document.querySelector("#monthNumber");
const monthName = document.querySelector("#monthName");
const yearLabel = document.querySelector("#yearLabel");
const selectedDate = document.querySelector("#selectedDate");
const fontScale = document.querySelector("#fontScale");
const dropZone = document.querySelector("#dropZone");
const heroImage = document.querySelector("#heroImage");

const savedFontScale = localStorage.getItem("sportsCalendarFontScale");
const savedImage = localStorage.getItem("sportsCalendarHeroImage");

if (savedFontScale) {
  fontScale.value = savedFontScale;
  setFontScale(savedFontScale);
}

if (savedImage) {
  setHeroImage(savedImage);
}

document.querySelector("#prevMonth").addEventListener("click", () => changeMonth(-1));
document.querySelector("#nextMonth").addEventListener("click", () => changeMonth(1));
document.querySelector("#todayMonth").addEventListener("click", () => {
  const today = new Date();
  state.month = today.getFullYear() === 2026 ? today.getMonth() : 0;
  state.selectedDate = toDateKey(new Date(2026, state.month, 1));
  render();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Home") {
    event.preventDefault();
    changeMonth(-1);
  }

  if (event.key === "End") {
    event.preventDefault();
    changeMonth(1);
  }
});

fontScale.addEventListener("input", (event) => {
  setFontScale(event.target.value);
  localStorage.setItem("sportsCalendarFontScale", event.target.value);
});

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    state.filter = button.dataset.filter;
    document.querySelectorAll(".filter").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    render();
  });
});

["dragenter", "dragover"].forEach((name) => {
  dropZone.addEventListener(name, (event) => {
    event.preventDefault();
    dropZone.classList.add("is-dragging");
  });
});

["dragleave", "drop"].forEach((name) => {
  dropZone.addEventListener(name, () => dropZone.classList.remove("is-dragging"));
});

dropZone.addEventListener("drop", (event) => {
  event.preventDefault();
  const file = event.dataTransfer.files[0];

  if (!file || !file.type.startsWith("image/")) {
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    setHeroImage(reader.result);
    localStorage.setItem("sportsCalendarHeroImage", reader.result);
  };
  reader.readAsDataURL(file);
});

function changeMonth(direction) {
  state.month += direction;

  if (state.month < 0) {
    state.month = 11;
  }

  if (state.month > 11) {
    state.month = 0;
  }

  state.selectedDate = toDateKey(new Date(2026, state.month, 1));
  render();
}

function setFontScale(value) {
  document.documentElement.style.setProperty("--font-scale", Number(value) / 100);
}

function setHeroImage(source) {
  heroImage.style.backgroundImage = `url("${source}")`;
  heroImage.classList.add("has-image");
}

async function loadFootballFixtures() {
  if (!window.fetch) {
    return;
  }

  try {
    const fixtures = await fetchPublicFootballCsvFixtures();
    if (fixtures.length) {
      importedFootballFixtures = fixtures.map(normalizeEvent);
      render();
    }
  } catch (error) {
    console.info("Using local football fixtures fallback.", error);
  }
}

async function fetchPublicFootballCsvFixtures() {
  const groups = await Promise.all(footballCsvSources.map(async (source) => {
    const response = await fetch(source.url);
    if (!response.ok) {
      throw new Error(`${source.type} CSV failed: ${response.status}`);
    }

    const rows = parseCsv(await response.text());
    return rows
      .map((row, index) => mapFootballCsvRow(row, source, index))
      .filter(Boolean);
  }));

  return groups.flat();
}

function mapFootballCsvRow(row, source, index) {
  const date = parseFootballCsvDate(row.Date);

  if (!date || !date.startsWith("2026-")) {
    return null;
  }

  const homeTeam = row.HomeTeam || "Home TBA";
  const awayTeam = row.AwayTeam || "Away TBA";
  const score = row.FTHG !== "" && row.FTAG !== "" ? `${row.FTHG}-${row.FTAG}` : "";
  const title = score ? `${homeTeam} ${score} ${awayTeam}` : `${homeTeam} vs ${awayTeam}`;

  return {
    id: `${source.code}-${date}-${index}`,
    date,
    time: row.Time ? `${row.Time} local` : "TBD",
    type: source.type,
    sportGroup: "Football",
    leagueCode: source.code,
    title,
    homeTeam,
    awayTeam,
    venue: source.type,
    city: source.country,
    country: source.country,
    status: score ? "FINISHED" : "SCHEDULED",
    link: source.officialLink
  };
}

function parseCsv(text) {
  const lines = text.replace(/^\uFEFF/, "").trim().split(/\r?\n/);
  const headers = splitCsvLine(lines.shift());

  return lines.map((line) => {
    const values = splitCsvLine(line);
    return headers.reduce((row, header, index) => {
      row[header] = values[index] || "";
      return row;
    }, {});
  });
}

function splitCsvLine(line) {
  const cells = [];
  let value = "";
  let quoted = false;

  for (const char of line) {
    if (char === "\"") {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      cells.push(value);
      value = "";
    } else {
      value += char;
    }
  }

  cells.push(value);
  return cells;
}

function parseFootballCsvDate(value) {
  const parts = value.split("/");

  if (parts.length !== 3) {
    return "";
  }

  const [day, month, year] = parts;
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}

function render() {
  monthNumber.textContent = String(state.month + 1).padStart(2, "0");
  monthName.textContent = monthNames[state.month];
  yearLabel.textContent = String(state.year);
  renderCalendar();
  renderEventsForSelectedDate();
}

function renderCalendar() {
  grid.innerHTML = "";

  const firstDay = new Date(state.year, state.month, 1);
  const daysInMonth = new Date(state.year, state.month + 1, 0).getDate();
  const leadingBlankDays = firstDay.getDay();
  const totalCells = Math.ceil((leadingBlankDays + daysInMonth) / 7) * 7;

  for (let index = 0; index < totalCells; index += 1) {
    const dayNumber = index - leadingBlankDays + 1;

    if (dayNumber < 1 || dayNumber > daysInMonth) {
      const blank = document.createElement("div");
      blank.className = "day day-blank";
      blank.setAttribute("aria-hidden", "true");
      grid.appendChild(blank);
      continue;
    }

    const cellDate = new Date(state.year, state.month, dayNumber);
    const dateKey = toDateKey(cellDate);
    const dayEvents = getEventsForDate(dateKey);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "day";
    button.setAttribute("aria-label", `${dateKey} events ${dayEvents.length}`);

    if (dateKey === state.selectedDate) {
      button.classList.add("is-selected");
    }

    const featuredEvent = dayEvents[0];
    const isPosterOpen = Boolean(featuredEvent && dateKey === state.posterDate);
    const columnIndex = index % 7;
    const rowIndex = Math.floor(index / 7);

    if (isPosterOpen) {
      button.classList.add("is-poster-open");
      button.classList.add(columnIndex >= 5 ? "is-poster-left" : "is-poster-right");
      button.classList.add(rowIndex >= 3 ? "is-poster-up" : "is-poster-down");
    }

    button.innerHTML = `
      <span class="day-number">${cellDate.getDate()}</span>
      <span class="day-events">
        ${dayEvents.slice(0, 3).map((item) => `
          <span class="event-chip" data-type="${item.type}">
            ${item.title}
            <small>${item.shortMeta}</small>
          </span>
        `).join("")}
      </span>
      ${isPosterOpen ? renderEventPoster(featuredEvent) : ""}
    `;

    button.addEventListener("click", () => {
      state.selectedDate = dateKey;
      state.posterDate = dayEvents.length ? dateKey : null;
      render();
    });

    grid.appendChild(button);
  }
}

function renderEventsForSelectedDate() {
  const items = getEventsForDate(state.selectedDate);
  selectedDate.textContent = formatDate(state.selectedDate);
  eventList.innerHTML = "";

  if (!items.length) {
    eventList.innerHTML = `<p class="empty-state">등록된 주요 경기가 없습니다. UFC 일정은 2026년 1월부터 8월까지 입력되어 있습니다.</p>`;
    return;
  }

  items.forEach((item) => {
    const article = document.createElement("article");
    article.className = "event-card";
    article.innerHTML = `
      <div class="event-card-head">
        <strong>${item.title}</strong>
        <span class="status-badge ${item.statusClass}">${item.statusLabel}</span>
      </div>
      <p>${item.time} / ${item.venueLine}</p>
      <p>${item.detailLine}</p>
      <a class="event-link" href="${item.link}" target="_blank" rel="noreferrer">공식 일정 보기</a>
    `;
    eventList.appendChild(article);
  });
}

function renderEventPoster(item) {
  return `
    <span class="event-poster" data-type="${item.type}" aria-hidden="true">
      <span class="event-poster-kicker">${item.type}</span>
      <strong>${item.title}</strong>
      <span class="event-poster-date">${formatDate(item.date)}</span>
      <span class="event-poster-meta">${item.time} / ${item.venueLine}</span>
    </span>
  `;
}

function normalizeEvent(event) {
  const source = event.type === "UFC" ? ufcSource : null;

  return {
    ...event,
    source,
    shortMeta: event.series ? `${event.series} / ${event.time}` : event.time,
    venueLine: [event.venue, event.city, event.country].filter(Boolean).join(", "),
    detailLine: getDetailLine(event),
    statusLabel: event.date < todayKey ? "지난 경기" : "예정",
    statusClass: event.date < todayKey ? "is-past" : "is-upcoming"
  };
}

function getDetailLine(event) {
  if (event.type === "UFC") {
    const numberLabel = event.seriesNumber ? `UFC ${event.seriesNumber}` : event.series;
    return `${numberLabel} / source checked ${ufcSource.checkedAt}`;
  }

  if (event.sportGroup === "Football") {
    const matchday = event.matchday ? `Matchday ${event.matchday}` : "2026 fixtures";
    return `${event.type} / ${matchday} / football-data.co.uk`;
  }

  return event.type;
}

function getEventsForDate(dateKey) {
  return getAllEvents()
    .filter((item) => item.date === dateKey)
    .filter((item) => {
      if (state.filter === "all") {
        return true;
      }

      if (state.filter === "Football") {
        return item.sportGroup === "Football" || item.type === "Football";
      }

      return item.type === state.filter;
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

function getAllEvents() {
  const footballFallbackIds = new Set(footballFixtures2026.map((event) => event.id));
  const baseEvents = importedFootballFixtures.length
    ? events.filter((event) => !footballFallbackIds.has(event.id))
    : events;

  return [...baseEvents, ...importedFootballFixtures];
}

function toDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDate(dateKey) {
  const date = new Date(`${dateKey}T00:00:00`);
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long"
  }).format(date);
}

render();
loadFootballFixtures();
