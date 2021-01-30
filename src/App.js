import "./App.css";

function App() {
  return (
    <div className="root">
      <header>
        <div className="container">
          <div id="logo">шаблон.</div>
          <nav>
            <ul>
              <li>
                <a href="#git">git</a>
              </li>
              <li>
                <a href="#nodejs">nodejs</a>
              </li>
              <li>
                <a href="#html">html</a>
              </li>
              <li>
                <a href="#css">css</a>
              </li>
              <li>
                <a href="#links">ссылки</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-content">
          <h2>это шаблон.</h2>
          <div className="divider"></div>
          <h3>он простой, как и требовалось в задании</h3>
          <button>ничего не случится</button>
        </div>
      </header>

      <main>
        <section>
          <h2>краткое описание проекта</h2>
          <div className="article">
            <div className="article__image">
              <p>главное - не переборщить с простотой</p>
            </div>
            <div className="article__content">
              <h3>
                это <strong>мое тестовое задание</strong>
              </h3>
              <div className="divider"></div>
              <p>Во-первых, нужно было сверстать простой шаблон. Это он.</p>
              <p>
                Дальше идут блоки с обсуждаемым материалом этого задания. Мои
                определения обсуждаемых понятий, или короткие примеры.
              </p>
              <p>
                В основном я писал все своими словами, поэтому многие
                определения наверняка слишком вольные или неточные. Зато
                более-менее отражают мои знания на данном этапе.
              </p>
            </div>
          </div>
        </section>
        {/* <a id="git"></a> */}
        <h2>системы контроля версий и git</h2>
        <section>
          <div className="article">
            <div className="article__image">
              <p>управляй</p>
            </div>
            <div className="article__content">
              <h3>
                что
                <strong>такое система контроля версий и зачем она нужна</strong>
              </h3>
              <div className="divider"></div>
              <p>
                Система контроля версий - достаточно самоописывающее понятие.
                Это таки система, предназначенная для управления версиями чего
                либо. Она позволяет зафиксировать множество состояний проекта, а
                затем по желанию возвращаться к любому из них. Либо же в
                отдельных ветках развивать одновременно несколько вариантов
                проекта. Также система контроля версий важна для групповой
                работы над одним проектом нескольких или даже многих
                разработчиков.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="article">
            <div className="article__image">
              <p>GIT</p>
            </div>
            <div className="article__content">
              <h3>git</h3>
              <div className="divider"></div>
              <p>
                Git - это общепринятая в среде разработчиков программного
                обеспечения система контроля версий.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="article">
            <div className="article__image">
              <p>$ git add .</p>
            </div>
            <div className="article__content">
              <h3>
                команды <strong>checkout, add, commit, pull, push</strong>
              </h3>
              <div className="divider"></div>
              <p>
                <code>$ git checkout -b [branch]</code> - сделать активной ветку
                репозитория
              </p>
              <p>
                <code>$ git checkout [revision]</code> - перейти к ревизии
              </p>
              <p>
                <code>$ git add filename1.ts filename2.ts</code> - добавить 2
                файла с изменениями к списку фиксируемых файлов
              </p>
              <p>
                <code>$ git commit -m "miningful message"</code> - закомитить
                изменения с комментарием
              </p>
              <p>
                <code>$ git pull repository.link</code> - скачать репозиторий
              </p>
              <p>
                <code>$ git push origin</code> - запушить локальные комиты в
                удаленное хранилище, например на гитхаб
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="article">
            <div className="article__image">
              <p>-b</p>
            </div>
            <div className="article__content">
              <h3>
                основы <strong>ветвления и слияния</strong>
              </h3>
              <div className="divider"></div>
              <p>
                <code>$ git checkout -b test</code> - создать ветку test и
                переключиться на нее
              </p>
              <p>
                <code>$ git add .</code> - добавить все измененные файлы в
                список на фиксацию
              </p>
              <p>
                <code>$ git commit -m "test commit" </code> - закомитить
                изменения
              </p>
              <p>
                <code>$ git checkout master</code> - перейти в ветку master
              </p>
              <p>
                <code>$ git merge test</code> - слить изменения из ветки test в
                текущую ветку
              </p>
            </div>
          </div>
        </section>
        <a id="nodejs" href="/#" className="hidden-anchor">Anchor</a>
        <h2>что такое nodejs, зачем он нужен и как устанавливать</h2>
        <section>
          <div className="article">
            <div className="article__image">
              <p>Node.js</p>
            </div>

            <div className="article__content">
              <h3>
                node<strong>js</strong>
              </h3>
              <div className="divider"></div>
              <p>
                Node.js - это платформа для запуска джаваскрипта за пределами
                браузера, написанная на движке V8 браузера Chrome
              </p>
              <p>
                Нода нужна для того, чтобы можно было писать на языке JavaScript
                (или других языках, транспилируемых в js) бэк-энды и другие
                приложения, которые должны выполняться не в браузере.
              </p>
              <p>
                Установить можно командой <code>$ sudo apt install nodejs</code>
              </p>
              <p>
                Также можно установить менеджер версий ноды nvm, позволяющий
                устанавливать разные версии ноды и переключаться между ними.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="article">
            <div className="article__image">
              <p>$ npm i</p>
            </div>
            <div className="article__content">
              <h3>
                что <strong>такое менеджер пакетов, установка npm</strong>
              </h3>
              <div className="divider"></div>
              <p>
                Менеджер пакетов - это программа, предоставляющая интерфейс
                (зачастую интерфейс командной строки) для получения, обновления
                и удаления программного обеспечения (и не только). У Node.js
                таким менеджером является npm (не единственным кажется).
                Устанавливается на компьютер вместе с нодой. В наличии в системе
                npm можно убедиться, введя в консоли команду
                <code>$ npm --v</code>
              </p>
            </div>
          </div>
        </section>
        <h2>все про html</h2>
        <section>
          <a id="html" href="/#" className="hidden-anchor">Anchor</a>
          <div className="article-block">
            <div className="article-block__post">
              <h3>теги</h3>
              <div className="divider"></div>
              <p>
                html-теги - это специальные слова или комбинации букв и цифр,
                заключенные в треугольные скобки, по которым браузер понимает
                каким образом форматировать определенную чать контента.
              </p>
            </div>
            <div className="article-block__post">
              <h3>структура html страницы</h3>
              <div className="divider"></div>
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
            </div>
            <div className="article-block__post">
              <h3>блочные и строчные элементы</h3>
              <div className="divider"></div>
              <p>
                Блочные элементы предназначены для формирования структуры
                документа, а строчные - для форматирования текста.
              </p>
            </div>
            <div className="article-block__post">
              <h3>списки</h3>
              <div className="divider"></div>
              <p>
                Списки предназначены для построения списков: списки ссылок,
                навигация, какие-то перечисления. В html есть две их
                разновидности: нумерованные (ol) и нерумерованные (ul). Списки
                содержат элементы (li).
              </p>
            </div>
            <div className="article-block__post">
              <h3>таблицы</h3>
              <div className="divider"></div>
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
            </div>
            <div className="article-block__post">
              <h3>атрибуты</h3>
              <div className="divider"></div>
              <p>
                У html-тегов могут быть атрибуты, существенно расширяющие
                возможности данных тегов. Без некоторых атрибутов так и вовсе
                использовать определенные теги не получится. Например, в коде
                ссылки &lt;a href="https://google.com"&gt;google&lt;/a&gt; href
                - атрибут, позволяющий задать адрес ссылки.
              </p>
            </div>
            <div className="article-block__post">
              <h3>текст</h3>
              <div className="divider"></div>
              <p>
                Текст на html-странице - это просто текст. Различные теги и
                стили позволяют данный текст форматировать.
              </p>
            </div>
            <div className="article-block__post">
              <h3>якоря</h3>
              <div className="divider"></div>
              <p>
                Определенные метки на странице, к которым можно перейти по
                ссылке.
              </p>
              <code>
                &lt;a name="here"&gt;&lt;/a&gt;
                <br />
                &lt;a href="#here"&gt;Go there&lt;/a&gt;
              </code>
            </div>
            <div className="article-block__post">
              <h3>ссылки</h3>
              <div className="divider"></div>
              <p>
                Ссылки позволяют переходить на другие веб-страницы. Текст ссылки
                помещается между открывающим и закрывающим тегами ссылки.
              </p>
              <p>
                <code>
                  {" "}
                  &lt;a href="https://google.com"&gt;google&lt;/a&gt;{" "}
                </code>
              </p>
            </div>
            <div className="article-block__post">
              <h3>w3c валидация</h3>
              <div className="divider"></div>
              <p>
                w3c валидация позволяет удостовериться, что html-код имеет
                правильную структуру и соответствует стандартам. Валидный код не
                только будет правильно отображаться браузером, но и позволит
                поисковым машинам правильно обработать страничку.
              </p>
            </div>
          </div>
        </section>
        <a id="css" href="/#" className="hidden-anchor">Anchor</a>
        <h2>про css</h2>
        <section>
          <div className="article">
            <div className="article__image">
              <p>css</p>
            </div>
            <div className="article__content">
              <h3>
                пример <strong>css стилей</strong>
              </h3>
              <div className="divider"></div>
              <p>
                <code>
                  ... тут был код, который в jsx выдавал ошибку - мы потом с
                  этим разберемся
                </code>
              </p>
              <p>
                В приведенных выше стилях классы - side-nav и odd, идентификатор
                - #top, селекторы - nav и a, псевдокласс - active, псевдоэлемент
                - before
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <a id="links" href="/#" className="hidden-anchor">Anchor</a>
        <div className="info">
          <h2>Автор и ссылки</h2>
          <div className="info__container">
            <div>Сергей Пемахов</div>
            <div>
              <a href="https://github.com/pemakhov">Мой гитхаб аккаунт</a>
            </div>
            <div>
              <a href="https://dribbble.com/shots/3263006-Clemo-PSD-Template">
                Оригинал дизайна
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>
            <strong>2021</strong>
          </p>
          <p>права никем не защищены</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
