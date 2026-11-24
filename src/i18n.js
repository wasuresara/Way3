const SUFFIX = { en: "EN", fr: "FR", es: "ES" };

export function t(language, messages) {
  return messages[language] ?? messages.de;
}

export function pick(item, key, language) {
  const suffix = SUFFIX[language];
  if (!suffix) return item[key];
  return item[`${key}${suffix}`] ?? item[key];
}
