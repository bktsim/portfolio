import React from "react";

interface LanguageBarProps {
  setLang: React.Dispatch<React.SetStateAction<string>>;
}

const LanguageBar = ({ setLang }: LanguageBarProps) => (
  <div className="language-bar">
    <select
      onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
        setLang(event.target.value);
      }}
    >
      <option value="en">English</option>
      <option value="zh">中文</option>
      <option value="jp">日本語</option>
    </select>
  </div>
);

export default LanguageBar;
