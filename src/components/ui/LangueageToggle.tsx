import { useLanguage } from "../../context/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <button onClick={() => setLanguage("bg")}>BG</button>
      <span>|</span>
      <button onClick={() => setLanguage("en")}>EN</button>
    </div>
  );
}
