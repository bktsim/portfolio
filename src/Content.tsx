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
          {strings.github}
        </a>
        ・
        <a href="/files/resume.pdf" target="_blank" rel="noopener noreferrer">
          {strings.resume}
        </a>
        ・<a href="mailto:contact@brendontsim.com">{strings.email}</a>
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
