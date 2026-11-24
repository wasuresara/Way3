const SUFFIX = { en: "EN", uk: "UK", ru: "RU", pl: "PL" };

export function t(language, messages) {
  return messages[language] ?? messages.de;
}

export function pick(item, key, language) {
  const suffix = SUFFIX[language];
  if (!suffix) return item[key];
  return item[`${key}${suffix}`] ?? item[key];
}
