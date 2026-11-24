export const HIGHLIGHTS_SHEET_ID =
  "17eIz1we5NqIjmMknky4lelmViaqgZoF3q0Oz4W6muf8";

const HIGHLIGHTS_GID = "1141736897";
const CACHE_KEY = `way-highlights:v2:${HIGHLIGHTS_SHEET_ID}`;
const CACHE_MS = 5 * 60 * 1000;
const MAX_ITEMS = 6;

const PRIMARY_URL = `https://docs.google.com/spreadsheets/d/${HIGHLIGHTS_SHEET_ID}/gviz/tq?tqx=out:csv&sheet=Highlights`;
const FALLBACK_URL = `https://docs.google.com/spreadsheets/d/${HIGHLIGHTS_SHEET_ID}/export?format=csv&gid=${HIGHLIGHTS_GID}`;

export function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (inQuotes) {
      if (char === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i += 1;
        } else {
          inQuotes = false;
        }
      } else {
        field += char;
      }
      continue;
    }
    if (char === '"') {
      inQuotes = true;
    } else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n" || char === "\r") {
      if (char === "\r" && text[i + 1] === "\n") i += 1;
      row.push(field);
      field = "";
      if (row.some((cell) => cell.trim() !== "")) rows.push(row);
      row = [];
    } else {
      field += char;
    }
  }

  row.push(field);
  if (row.some((cell) => cell.trim() !== "")) rows.push(row);
  return rows;
}

function headerIndex(headers) {
  const index = {};
  headers.forEach((header, i) => {
    index[header.trim().toLowerCase()] = i;
  });
  return index;
}

function cell(row, index, name) {
  const at = index[name];
  if (at == null) return "";
  return (row[at] ?? "").trim();
}

function dateValue(value) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return Number.NEGATIVE_INFINITY;
  return Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
}

export function selectHighlights(csv) {
  const table = parseCsv(csv);
  if (table.length < 2) return [];
  const index = headerIndex(table[0]);
  if (index.title == null || index.date == null) return [];

  return table
    .slice(1)
    .map((row) => ({
      date: cell(row, index, "date"),
      title: cell(row, index, "title"),
      text: cell(row, index, "text"),
      titleDe: cell(row, index, "title_de"),
      textDe: cell(row, index, "text_de"),
      titleUk: cell(row, index, "title_uk"),
      textUk: cell(row, index, "text_uk"),
      titleRu: cell(row, index, "title_ru"),
      textRu: cell(row, index, "text_ru"),
      titlePl: cell(row, index, "title_pl"),
      textPl: cell(row, index, "text_pl"),
      imageUrl: cell(row, index, "image_url"),
      link: cell(row, index, "link"),
      show: cell(row, index, "show").toUpperCase() === "TRUE",
    }))
    .filter(
      (item) => item.show && item.title && !item.title.startsWith("[EXAMPLE]"),
    )
    .sort((a, b) => dateValue(b.date) - dateValue(a.date))
    .slice(0, MAX_ITEMS);
}

const LOCALIZED = {
  de: ["titleDe", "textDe"],
  uk: ["titleUk", "textUk"],
  ru: ["titleRu", "textRu"],
  pl: ["titlePl", "textPl"],
};

export function highlightCopy(item, language) {
  const [titleKey, textKey] = LOCALIZED[language] || [];
  return {
    title: (titleKey && item[titleKey]) || item.title,
    text: (textKey && item[textKey]) || item.text,
  };
}

function readCache() {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const cached = JSON.parse(raw);
    if (!cached || Date.now() - cached.at > CACHE_MS) return null;
    return Array.isArray(cached.items) ? cached.items : null;
  } catch {
    return null;
  }
}

function writeCache(items) {
  try {
    sessionStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ at: Date.now(), items }),
    );
  } catch {
    // Ignore private-mode and quota failures.
  }
}

async function fetchCsv(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(String(response.status));
  const text = await response.text();
  if (!/title/i.test(text.split(/\r?\n/, 1)[0] || "")) {
    throw new Error("not csv");
  }
  return text;
}

export async function loadHighlights() {
  const cached = readCache();
  if (cached) return cached;

  try {
    let csv;
    try {
      csv = await fetchCsv(PRIMARY_URL);
    } catch {
      csv = await fetchCsv(FALLBACK_URL);
    }
    const items = selectHighlights(csv);
    writeCache(items);
    return items;
  } catch {
    return [];
  }
}
