import { useState } from "react";
import Content from "./Content";
import LanguageBar from "./LanguageBar";
import strings from "./Messages";

const App = () => {
  const [lang, setLang] = useState<string>("en");

  strings.setLanguage(lang);

  return (
    <div className="app">
      <LanguageBar setLang={setLang} />
      <Content lang={lang} />
    </div>
  );
};

export default App;
