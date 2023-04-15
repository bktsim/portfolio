import strings from "./Messages";

interface ContentProps {
  lang: string;
}

const Content = ({ lang }: ContentProps) => (
  <div className="content">
    <div className={`title ${lang}`}>
      <h1> {strings.name} </h1>
      <h2> {strings.subline} </h2>
    </div>

    <hr />

    <div className="links">
      <h4>
        <a
          href="https://github.com/bktsim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/svgs/github.svg" alt="github" />
          <b>{strings.github}</b>
        </a>
        <a href="/files/resume.pdf" target="_blank" rel="noopener noreferrer">
          <img src="/svgs/resume.svg" alt="resume" />
          <b>{strings.resume}</b>
        </a>

        {lang === "jp" && (
          <a
            href="/files/resume_jp.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/svgs/resume.svg" alt="resume" />
            <b>アルバイト履歴書 (日本語) </b>
          </a>
        )}

        <a href="mailto:contact@brendontsim.com">
          <img src="/svgs/gmail.svg" alt="gmail" />
          <b>{strings.email}</b>
        </a>
        <a
          href="https://www.linkedin.com/in/brendontsim/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/svgs/linkedin.svg" alt="linkedin" />
          <b>{strings.linkedin}</b>
        </a>
      </h4>
    </div>

    <hr />

    <div className="intro">
      <div>
        <h2> (´• ω •`)ﾉ </h2>
        <p>{strings.intro_first}</p>
        <p>{strings.intro_second}</p>
        <p>{strings.intro_third}</p>
        <p>{strings.intro_fourth}</p>
        <p>{strings.intro_fifth}</p>
      </div>
    </div>

    <hr />

    <div className="footer">
      <p>{strings.footer}</p>
    </div>
  </div>
);

export default Content;
