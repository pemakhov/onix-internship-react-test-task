import React, { useContext } from 'react';
import ThemeContext from '../../contexts/theme';

const Footer = () => {
  const footerHeader = 'Автор та посилання';
  const authorName = 'Сергій Пемахов';
  const authorGithubLink = 'https://github.com/pemakhov';
  const authorGithubLinkCaption = 'Мій гітхаб аккаунт';
  const templateLink = 'https://dribbble.com/shots/3263006-Clemo-PSD-Template';
  const templateLinkCaption = 'Оригінал дизайну';
  const copyrightYear = '2021';
  const copyrightInfo = 'права ніким не захищені';
  const anchorText = 'Anchor';
  const { theme } = useContext(ThemeContext);

  return (
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
      <div className={`copyright ${theme}`}>
        <p>
          <strong>{copyrightYear}</strong>
        </p>
        <p>{copyrightInfo}</p>
      </div>
    </footer>
  );
};

export default Footer;
