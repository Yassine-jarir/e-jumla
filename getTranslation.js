const dictionaries = {
  en: () => import("./dictionary/en/translation.json").then((r) => r.default),
  ar: () => import("./dictionary/ar/translation.json").then((r) => r.default),
};

export const getDictionary = (lang) => {
  return dictionaries[lang]();
};
