import "./App.css";
import { CurrentStage } from "./components/current-stage/CurrentStage";
import { Biography } from "./components/biography/Biography";
import { Summary } from "./components/summary/Summary";

function App() {
  /*
   * Header
   */
  const logo = "react.";
  const navInfo = "info";
  const navLinks = "ссылки";
  const pageMainHeader = "Учим React";
  const pageSecondaryHeader = "на интернатуре в ONIX";
  const headerButtonCaption = "в дизайне была кнопка";

  /*
   * Footer
   */
  const footerHeader = "Автор и ссылки";
  const authorName = "Сергей Пемахов";
  const authorGithubLink = "https://github.com/pemakhov";
  const authorGithubLinkCaption = "Мой гитхаб аккаунт";
  const templateLink = "https://dribbble.com/shots/3263006-Clemo-PSD-Template";
  const templateLinkCaption = "Оригинал дизайна";
  const copyrightYear = "2021";
  const copyrightInfo = "права никем не защищены";

  /*
   * helpers
   */
  const anchorText = "Anchor";

  return (
    <>
      <header>
        <div className="container">
          <div id="logo">{logo}</div>
          <nav>
            <ul>
              <li>
                <a href="#info">{navInfo}</a>
              </li>
              <li>
                <a href="#links">{navLinks}</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-content">
          <h2>{pageMainHeader}</h2>
          <div className="divider"></div>
          <h3>{pageSecondaryHeader}</h3>
          <button>{headerButtonCaption}</button>
        </div>
      </header>
      <main>
        <a id="info" href="info" className="hidden-anchor">
          {anchorText}
        </a>

        <CurrentStage />
        <Biography />
        <Summary />
      </main>

      <footer>
        <a id="links" href="links" className="hidden-anchor">
          {anchorText}
        </a>
        <div className="info">
          <h2>{footerHeader}</h2>
          <div className="info__container">
            <div>{authorName}</div>
            <div>
              <a href={authorGithubLink}>{authorGithubLinkCaption}</a>
            </div>
            <div>
              <a href={templateLink}>{templateLinkCaption}</a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>
            <strong>{copyrightYear}</strong>
          </p>
          <p>{copyrightInfo}</p>
        </div>
      </footer>
    </>
  );
}

export default App;
