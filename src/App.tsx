import { useState } from "react";
import LanguageBar from "./shared/LanguageBar";
import RouteManager from "./RouteManager";
import strings from "./index/Messages";

const App = () => {
  const [lang, setLang] = useState<string>("en");
  strings.setLanguage(lang);

  return (
    <div className="app">
      <LanguageBar lang={lang} setLang={setLang} />
      <RouteManager lang={lang} />
    </div>
  );
};

export default App;
