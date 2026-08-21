import { useLanguage } from "../../hooks/useLanguage";
export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 text-white text-base tracking-wide">
      <button
        onClick={() => setLanguage("bg")}
        className={`transition-opacity ${language === "bg" ? "opacity-100 font-medium" : "opacity-60 hoover:opacity-100"}`}
      >
        BG
      </button>
      <span>|</span>
      <button
        onClick={() => setLanguage("en")}
        className={`transition-opacity ${
          language === "en"
            ? "opacity-100 font-medium"
            : "opacity-60 hover:opacity-100"
        }`}
      >
        EN
      </button>
    </div>
  );
}
