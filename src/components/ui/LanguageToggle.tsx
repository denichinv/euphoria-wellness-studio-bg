import { useLanguage } from "../../hooks/useLanguage";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const groupLabel = language === "bg" ? "Избор на език" : "Language selection";

  return (
    <div
      role="group"
      aria-label={groupLabel}
      className="flex items-center gap-2 text-base tracking-wide text-white"
    >
      <button
        type="button"
        aria-pressed={language === "bg"}
        onClick={() => setLanguage("bg")}
        className={`rounded-sm transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
          language === "bg"
            ? "font-medium opacity-100"
            : "opacity-60 hover:opacity-100"
        }`}
      >
        BG
      </button>

      <span aria-hidden="true">|</span>

      <button
        type="button"
        aria-pressed={language === "en"}
        onClick={() => setLanguage("en")}
        className={`rounded-sm transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
          language === "en"
            ? "font-medium opacity-100"
            : "opacity-60 hover:opacity-100"
        }`}
      >
        EN
      </button>
    </div>
  );
}
