import React from "react";

interface LanguageBarProps {
  lang: string;
  setLang: React.Dispatch<React.SetStateAction<string>>;
}

interface LanguageButtonProps {
  buttonLanguage: string;
  buttonText: string;
}

const audio = new Audio("/sounds/key.wav");

const LanguageBar = ({ lang, setLang }: LanguageBarProps) => {
  const LanguageButton = ({
    buttonLanguage,
    buttonText,
  }: LanguageButtonProps) => (
    <button
      style={{
        borderStyle: lang !== buttonLanguage ? "groove" : undefined,
        backgroundColor:
          lang === buttonLanguage ? "rgba(210,210,210)" : undefined,
      }}
      onClick={() => {
        audio.currentTime = 0;
        audio.play();
        setLang(buttonLanguage);
      }}
    >
      {buttonText}
    </button>
  );

  return (
    <div className="language-bar">
      <LanguageButton buttonLanguage="en" buttonText="En" />
      <LanguageButton buttonLanguage="zh" buttonText="中" />
      <LanguageButton buttonLanguage="jp" buttonText="日" />
    </div>
  );
};

export default LanguageBar;
