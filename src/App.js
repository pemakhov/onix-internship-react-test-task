import "./App.css";

function App() {
  /*
   * Header
   */
  const logo = "react.";
  const navGit = "git";
  const navNodejs = "nodejs";
  const navHtml = "html";
  const navCss = "css";
  const navLinks = "ссылки";
  const pageMainHeader = "Учим React";
  const pageSecondaryHeader = "на интернатуре в ONIX";
  const headerButtonCaption = "в дизайне была кнопка";

  /*
   * Project Information
   */
  const stages = [
    {
      topic: "тестовое задание",
      goal: "продемонстрировать знания и умения, необходимые для интернатуры",
      task: (
        <>
          <p>Выбрать шаблон и сверстать веб-страницу.</p>
          <p>
            Наполнить страницу содержимым: описанием базовых понятий,
            знания которых необходимы для прохождения интернатуры.
          </p>
        </>
      ),
    },
    {
      topic: "основы создания проектов на react",
      goal:
        "ознакомится с node и npm, получить базовые понятия о том что такое react," +
        " развернуть первый проект с помощью react cli",
      task: (
        <>
          <p>1. Установить node.js и npm</p>
          <p>2. Создать новый проект с помощью утилиты create react app</p>
          <p>3. Перенести сверстанную страницу в react компоненту</p>
        </>
      ),
    },
    {
      topic: "основы js, переменные, операторы, условия",
      goal: "ознакомится с понятием переменной",
      task: (
        <p>
          Выделить потенциально динамический контент на странице (имена, даты,
          тексты) и перенести его в переменные. Переменные должны быть
          константами в компоненте или в state.
        </p>
      ),
    },
    {
      topic: "основы js, массивы",
      goal: "научиться работать с массивами",
      task: (
        <>
          <p>
            На странице создать таблицу с биографией по годам. Данные записать в
            массив. Сделать сортировку данных по клику (без помощи и с помощью
            функций сортировки). Добавить две кнопки, по клику на первую
            добавить новый элемент массива, и удалить его по клику на вторую.
            Результаты выводить в консоль с помощью console.log.
          </p>
        </>
      ),
    },
  ];

  const projectInfoHeader = "информация о текущем этапе";
  const currentDay = new Date().getDay();
  const meetingDayNumber = 6;
  const daysToMeeting = meetingDayNumber - currentDay;
  let daysWordWithProperEnding = "";

  if (daysToMeeting > 4) {
    daysWordWithProperEnding = "дней";
  } else if (daysToMeeting > 1) {
    daysWordWithProperEnding = "дня";
  } else {
    daysWordWithProperEnding = "день";
  }

  let projectInfoQuote = `До встречи ${daysToMeeting} ${daysWordWithProperEnding}`;

  const meetingToday = daysToMeeting === 0;

  if (meetingToday) {
    projectInfoQuote = "Встреча сегодня";
  }

  const currentStageNumber = 2;
  const currentStage = stages[currentStageNumber];

  const projectInfoArticleHeader = (
    <>
      этап <strong>№{currentStageNumber}</strong>
    </>
  );

  const projectInfoArticle = (
    <>
      <h4>Тема:</h4>
      <p>{currentStage.topic}</p>
      <h4>Задание:</h4>
      {currentStage.task}
    </>
  );

  /*
   * project description
   */
  const projectDescriptionHeader = "краткое описание проекта";
  const projectDescriptionQuote = "главное - основы";
  const projectDescriptionArticleHeader = (
    <>
      база <strong>для изучения React</strong>
    </>
  );
  const projectDescriptionArticle = (
    <>
      <p>
        Эта страничка была сверстана в рамках тестового задания на интернатуру.
      </p>
      <p>
        Затем, она была перенесена на React. А в дальнейшем будет преобразована
        в полноценное react-приложение.
      </p>
      <p>
        Для изучения React необходимы базовые знания верстки, стилей, nodejs,
        менеджера пакетов npm, системы управления версий git. В данном проекте
        приведены определения данных понятий и/или примеры их использования.
      </p>
    </>
  );

  /*
   * version control block
   */
  const versionControlBlockHeader = "системы контроля версий и git";
  const versionControlQuote = "управляй";
  const versionControlArticleHeader = (
    <>
      что
      <strong>такое система контроля версий и зачем она нужна</strong>
    </>
  );
  const versionControlArticle = (
    <>
      <p>
        Система контроля версий - достаточно самоописывающее понятие. Это таки
        система, предназначенная для управления версиями чего либо. Она
        позволяет зафиксировать множество состояний проекта, а затем по желанию
        возвращаться к любому из них. Либо же в отдельных ветках развивать
        одновременно несколько вариантов проекта. Также система контроля версий
        важна для групповой работы над одним проектом нескольких или даже многих
        разработчиков.
      </p>
    </>
  );

  // git
  const gitQuote = "GIT";
  const gitArticleHeader = "git";
  const gitArticle = (
    <>
      <p>
        Git - это общепринятая в среде разработчиков программного обеспечения
        система контроля версий.
      </p>
    </>
  );

  // git commands
  const gitCommandsQuote = "$ git add .";
  const gitCommandsArticleHeader = (
    <>
      команды <strong>checkout, add, commit, pull, push</strong>
    </>
  );
  const gitCommandsArticle = (
    <>
      <p>
        <code>$ git checkout -b [branch]</code> - сделать активной ветку
        репозитория
      </p>
      <p>
        <code>$ git checkout [revision]</code> - перейти к ревизии
      </p>
      <p>
        <code>$ git add filename1.ts filename2.ts</code> - добавить 2 файла с
        изменениями к списку фиксируемых файлов
      </p>
      <p>
        <code>$ git commit -m "miningful message"</code> - закомитить изменения
        с комментарием
      </p>
      <p>
        <code>$ git pull repository.link</code> - скачать репозиторий
      </p>
      <p>
        <code>$ git push origin</code> - запушить локальные комиты в удаленное
        хранилище, например на гитхаб
      </p>
    </>
  );

  // branching
  const branchingQuote = "-b";
  const branchingArticleHeader = (
    <>
      основы <strong>ветвления и слияния</strong>
    </>
  );
  const branchingArticle = (
    <>
      <p>
        <code>$ git checkout -b test</code> - создать ветку test и переключиться
        на нее
      </p>
      <p>
        <code>$ git add .</code> - добавить все измененные файлы в список на
        фиксацию
      </p>
      <p>
        <code>$ git commit -m "test commit" </code> - закомитить изменения
      </p>
      <p>
        <code>$ git checkout master</code> - перейти в ветку master
      </p>
      <p>
        <code>$ git merge test</code> - слить изменения из ветки test в текущую
        ветку
      </p>
    </>
  );

  /*
   * Nodejs block
   */
  const nodejsBlockHeader =
    "что такое nodejs, зачем он нужен и как устанавливать";

  // nodejs
  const nodejsQuote = "Node.js";
  const nodejsArticleHeader = (
    <>
      node<strong>js</strong>
    </>
  );
  const nodejsArticle = (
    <>
      <p>
        Node.js - это платформа для запуска джаваскрипта за пределами браузера,
        написанная на движке V8 браузера Chrome
      </p>
      <p>
        Нода нужна для того, чтобы можно было писать на языке JavaScript (или
        других языках, транспилируемых в js) бэк-энды и другие приложения,
        которые должны выполняться не в браузере.
      </p>
      <p>
        Установить можно командой <code>$ sudo apt install nodejs</code>
      </p>
      <p>
        Также можно установить менеджер версий ноды nvm, позволяющий
        устанавливать разные версии ноды и переключаться между ними.
      </p>
    </>
  );

  // npm
  const npmQuote = "$ npm i";
  const npmArticleHeader = (
    <>
      что <strong>такое менеджер пакетов, установка npm</strong>
    </>
  );
  const npmArticle = (
    <>
      <p>
        Менеджер пакетов - это программа, предоставляющая интерфейс (зачастую
        интерфейс командной строки) для получения, обновления и удаления
        программного обеспечения (и не только). У Node.js таким менеджером
        является npm (не единственным кажется). Устанавливается на компьютер
        вместе с нодой. В наличии в системе npm можно убедиться, введя в консоли
        команду
        <code>$ npm --v</code>
      </p>
    </>
  );

  /*
   * html block
   */
  const htmlBlockHeader = "все про html";

  // html tags
  const tagsArticleHeader = "теги";
  const tagsArticle = (
    <>
      <p>
        html-теги - это специальные слова или комбинации букв и цифр,
        заключенные в треугольные скобки, по которым браузер понимает каким
        образом форматировать определенную чать контента.
      </p>
    </>
  );

  // html structure
  const htmlStructureArticleHeader = "структура html страницы";
  const htmlStructureArticle = (
    <>
      <p>Структура может быть очень разной.</p>
      <p>Вариант структуры:</p>
      <p>
        html
        <br />
        --head
        <br />
        --body
        <br />
        ----header
        <br />
        ------logo
        <br />
        ------nav
        <br />
        ----main
        <br />
        ------blocks
        <br />
        ------of
        <br />
        ------content
        <br />
        ----footer
        <br />
      </p>
    </>
  );

  // block and inline elements
  const blockAndInlineElementsArticleHeader = "блочные и строчные элементы";
  const blockAndInlineElementsArticle = (
    <>
      <p>
        Блочные элементы предназначены для формирования структуры документа, а
        строчные - для форматирования текста.
      </p>
    </>
  );

  // html lists
  const htmlListsArticleHeader = "списки";
  const htmlListsArticle = (
    <>
      <p>
        Списки предназначены для построения списков: списки ссылок, навигация,
        какие-то перечисления. В html есть две их разновидности: нумерованные
        (ol) и нерумерованные (ul). Списки содержат элементы (li).
      </p>
    </>
  );

  // html tables
  const htmlTablesArticleHeader = "таблицы";
  const htmlTablesArticle = (
    <>
      <p>структура таблицы 2х2:</p>
      <p>
        table
        <br />
        --tr
        <br />
        ----td
        <br />
        ----td
        <br />
        --tr
        <br />
        ----td
        <br />
        ----td
        <br />
      </p>
    </>
  );

  // html attributes
  const htmlAttributesArticleHeader = "атрибуты";
  const htmlAttributesArticle = (
    <>
      <p>
        У html-тегов могут быть атрибуты, существенно расширяющие возможности
        данных тегов. Без некоторых атрибутов так и вовсе использовать
        определенные теги не получится. Например, в коде ссылки{" "}
        <code>&lt;a href="https://google.com"&gt;google&lt;/a&gt;</code> href -
        атрибут, позволяющий задать адрес ссылки.
      </p>
    </>
  );

  // text in html
  const textInHtmlArticleHeader = "текст";
  const textInHtmlArticle = (
    <>
      <p>
        Текст на html-странице - это просто текст. Различные теги и стили
        позволяют данный текст форматировать.
      </p>
    </>
  );

  // anchors
  const anchorsArticleHeader = "якоря";
  const anchorsArticle = (
    <>
      <p>Определенные метки на странице, к которым можно перейти по ссылке.</p>
      <code>
        &lt;a name="here"&gt;&lt;/a&gt;
        <br />
        &lt;a href="#here"&gt;Go there&lt;/a&gt;
      </code>
    </>
  );

  // links
  const linksArticleHeader = "ссылки";
  const linksArticle = (
    <>
      <p>
        Ссылки позволяют переходить на другие веб-страницы. Текст ссылки
        помещается между открывающим и закрывающим тегами ссылки.
      </p>
      <p>
        <code> &lt;a href="https://google.com"&gt;google&lt;/a&gt; </code>
      </p>
    </>
  );

  // w3c validation
  const validationArticleHeader = "w3c валидация";
  const validationArticle = (
    <>
      <p>
        w3c валидация позволяет удостовериться, что html-код имеет правильную
        структуру и соответствует стандартам. Валидный код не только будет
        правильно отображаться браузером, но и позволит поисковым машинам
        правильно обработать страничку.
      </p>
    </>
  );

  /*
   * css block
   */
  const cssBlockHeader = "про css";
  const cssQuote = "css";
  const cssArticleHeader = (
    <>
      пример <strong>css стилей</strong>
    </>
  );
  const cssArticle = (
    <>
      <p>
        <code>
          #top .odd p:before &#123;
          <br />
          &nbsp;&nbsp;content: "-|-";
          <br />
          &#125;
          <br />
          <br />
          nav.side-nav a:active &#123;
          <br />
          &nbsp;&nbsp;color: red;
          <br />
          &#125;
        </code>
      </p>
      <p>
        В приведенных выше стилях классы - side-nav и odd, идентификатор - #top,
        селекторы - nav и a, псевдокласс - active, псевдоэлемент - before
      </p>
    </>
  );

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
                <a href="#git">{navGit}</a>
              </li>
              <li>
                <a href="#nodejs">{navNodejs}</a>
              </li>
              <li>
                <a href="#html">{navHtml}</a>
              </li>
              <li>
                <a href="#css">{navCss}</a>
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
        <section>
          <h2>{projectInfoHeader}</h2>
          <div className="article">
            <div className="article__image">
              <p>{projectInfoQuote}</p>
            </div>
            <div className="article__content">
              <h3>{projectInfoArticleHeader}</h3>
              <div className="divider"></div>
              {projectInfoArticle}
            </div>
          </div>
        </section>
        <section>
          <h2>{projectDescriptionHeader}</h2>
          <div className="article">
            <div className="article__image">
              <p>{projectDescriptionQuote}</p>
            </div>
            <div className="article__content">
              <h3>{projectDescriptionArticleHeader}</h3>
              <div className="divider"></div>
              {projectDescriptionArticle}
            </div>
          </div>
        </section>
        <a id="git" href="git" className="hidden-anchor">
          {anchorText}
        </a>
        <h2>{versionControlBlockHeader}</h2>
        <section>
          <div className="article">
            <div className="article__image">
              <p>{versionControlQuote}</p>
            </div>
            <div className="article__content">
              <h3>{versionControlArticleHeader}</h3>
              <div className="divider"></div>
              {versionControlArticle}
            </div>
          </div>
        </section>
        <section>
          <div className="article">
            <div className="article__image">
              <p>{gitQuote}</p>
            </div>
            <div className="article__content">
              <h3>{gitArticleHeader}</h3>
              <div className="divider"></div>
              {gitArticle}
            </div>
          </div>
        </section>
        <section>
          <div className="article">
            <div className="article__image">
              <p>{gitCommandsQuote}</p>
            </div>
            <div className="article__content">
              <h3>{gitCommandsArticleHeader}</h3>
              <div className="divider"></div>
              {gitCommandsArticle}
            </div>
          </div>
        </section>
        <section>
          <div className="article">
            <div className="article__image">
              <p>{branchingQuote}</p>
            </div>
            <div className="article__content">
              <h3>{branchingArticleHeader}</h3>
              <div className="divider"></div>
              {branchingArticle}
            </div>
          </div>
        </section>
        <a id="nodejs" href="nodejs" className="hidden-anchor">
          {anchorText}
        </a>
        <h2>{nodejsBlockHeader}</h2>
        <section>
          <div className="article">
            <div className="article__image">
              <p>{nodejsQuote}</p>
            </div>

            <div className="article__content">
              <h3>{nodejsArticleHeader}</h3>
              <div className="divider"></div>
              {nodejsArticle}
            </div>
          </div>
        </section>
        <section>
          <div className="article">
            <div className="article__image">
              <p>{npmQuote}</p>
            </div>
            <div className="article__content">
              <h3>{npmArticleHeader}</h3>
              <div className="divider"></div>
              {npmArticle}
            </div>
          </div>
        </section>
        <a id="html" href="html" className="hidden-anchor">
          {anchorText}
        </a>
        <h2>{htmlBlockHeader}</h2>
        <section>
          <div className="article-block">
            <div className="article-block__post">
              <h3>{tagsArticleHeader}</h3>
              <div className="divider"></div>
              {tagsArticle}
            </div>
            <div className="article-block__post">
              <h3>{htmlStructureArticleHeader}</h3>
              <div className="divider"></div>
              {htmlStructureArticle}
            </div>
            <div className="article-block__post">
              <h3>{blockAndInlineElementsArticleHeader}</h3>
              <div className="divider"></div>
              {blockAndInlineElementsArticle}
            </div>
            <div className="article-block__post">
              <h3>{htmlListsArticleHeader}</h3>
              <div className="divider"></div>
              {htmlListsArticle}
            </div>
            <div className="article-block__post">
              <h3>{htmlTablesArticleHeader}</h3>
              <div className="divider"></div>
              {htmlTablesArticle}
            </div>
            <div className="article-block__post">
              <h3>{htmlAttributesArticleHeader}</h3>
              <div className="divider"></div>
              {htmlAttributesArticle}
            </div>
            <div className="article-block__post">
              <h3>{textInHtmlArticleHeader}</h3>
              <div className="divider"></div>
              {textInHtmlArticle}
            </div>
            <div className="article-block__post">
              <h3>{anchorsArticleHeader}</h3>
              <div className="divider"></div>
              {anchorsArticle}
            </div>
            <div className="article-block__post">
              <h3>{linksArticleHeader}</h3>
              <div className="divider"></div>
              {linksArticle}
            </div>
            <div className="article-block__post">
              <h3>{validationArticleHeader}</h3>
              <div className="divider"></div>
              {validationArticle}
            </div>
          </div>
        </section>
        <a id="css" href="css" className="hidden-anchor">
          {anchorText}
        </a>
        <h2>{cssBlockHeader}</h2>
        <section>
          <div className="article">
            <div className="article__image">
              <p>{cssQuote}</p>
            </div>
            <div className="article__content">
              <h3>{cssArticleHeader}</h3>
              <div className="divider"></div>
              {cssArticle}
            </div>
          </div>
        </section>
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
