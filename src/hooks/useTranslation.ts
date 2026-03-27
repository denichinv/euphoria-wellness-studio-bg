import { useLanguage } from "../context/LanguageContext";
import { bg } from "../i18n/bg";
import { en } from "../i18n/en";
import type { Translations } from "../i18n/types";

export function useTranslation() {
  const { language } = useLanguage();

  const t: Translations = language === "bg" ? bg : en;

  return { t };
}
