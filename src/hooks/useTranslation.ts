import { useLanguage } from "../context/LanguageContext";
import { bg } from "../i18n/bg";
import { en } from "../i18n/en";

export function useTranslation() {
  const { language } = useLanguage();

  const t = language === "bg" ? bg : en;

  return { t };
}
