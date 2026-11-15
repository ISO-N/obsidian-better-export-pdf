import { getLanguage } from "obsidian";
import merge from "deepmerge";
import en from "./en";
import zh from "./zh";

export type Lang = typeof en;

let preferred: string | null = null;

export function setLanguage(lang: string | null) {
  preferred = lang;
}

// Obsidian >= 1.8.7 exposes the resolved app language (including "follow system").
// Older versions fall back to Obsidian's own resolution: localStorage first, then system locale.
function getAppLanguage(): string {
  if (typeof getLanguage === "function") {
    const lang = getLanguage();
    if (lang) return lang;
  }
  return window.localStorage.getItem("language") || window.navigator.language || "en";
}

function resolveLang(): "en" | "zh" {
  const raw = (preferred && preferred !== "system" ? preferred : getAppLanguage()).toLowerCase();
  // Only en/zh dictionaries exist; treat any zh* locale (zh, zh-cn, zh-tw) as zh.
  return raw.startsWith("zh") ? "zh" : "en";
}

export default {
  i18n: {
    en,
    zh,
  },
  // Reads fresh on every access so plain modules always see the latest language.
  get current() {
    return merge(this.i18n.en, this.i18n[resolveLang()] ?? {}) as Lang;
  },
};
