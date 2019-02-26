'use strict';

const way = '';
// Для локалхоста ''
// Для деплоя 'static/'

const application = document.getElementById('application');

/**
 * Create a menu link in html
 * @return {HTMLAnchorElement} element-link
 */
function createMenuLink() {
  const menuLink = document.createElement('a');
  menuLink.href = menuLink.dataset.href = 'menu';

  menuLink.textContent = 'Назад в меню';

  return menuLink;
}

/**
 * create header in html
 * @param {Array} styles array of strings
 */
function createHead(styles) {
  document.getElementsByTagName('head')[0].innerHTML = '';
  let meta = document.createElement('meta');
  meta['httpEquiv'] = 'Content-Type';
  meta['content'] = 'text/html; charset=utf-8';
  document.getElementsByTagName('head')[0].appendChild(meta);

  styles.forEach( (style) => {
    const link = document.createElement('link');
    link.id = 'styleLinkMenu';
    link.rel = 'stylesheet';
    link.href = style;
    document.head.appendChild(link);
  });
}

/**
 * create menu in html
 */
function createMenu() {
  const styles = [way + 'css/menu_style.css'];
  createHead(styles);


  const menuSection = document.createElement('section');
  menuSection.dataset.sectionName = 'menu';

  const header = document.createElement('header');
  header.id = 'header';
  header.classList.add('menu-header');
  const textHeader = document.createElement('h1');
  textHeader.textContent = 'Logic game';
  const navHeader = document.createElement('nav');

  const titlesHeader = {
    sign_in: 'Войти',
    sign_up: 'Зарегистрироваться',
  };


  Object.entries(titlesHeader).forEach( (entry) => {
    const href = entry[0];
    const title = entry[1];

    const a = document.createElement('a');
    a.href = href;
    a.dataset.href = href;
    a.textContent = title;
    a.classList.add('menu-button');

    navHeader.appendChild(a);
  });

  header.appendChild(textHeader);
  header.appendChild(navHeader);


  const main = document.createElement('div');
  main.id = 'main';
  main.classList.add('menu-wrapper');

  const menu = document.createElement('div');
  menu.id = 'menu';
  menu.classList.add('menu-wrapper__menu');


  main.appendChild(menu);

  const titles = {
    sign_in: 'Играть вдвоем',
    sign_up: 'Играть одному',
    leaders: 'Таблица лидеров',
    about: 'О нас',
  };


  Object.entries(titles).forEach((entry) => {
    const href = entry[0];
    const title = entry[1];

    const a = document.createElement('a');
    a.href = href;
    a.dataset.href = href;
    a.textContent = title;
    a.classList.add('menu__link');

    const br = document.createElement('br');

    menu.appendChild(a);
    menu.appendChild(br);
  });


  menuSection.appendChild(header);
  menuSection.appendChild(main);

  application.appendChild(menuSection);
}

/**
 * Create page 'sign in'
 */
function createSignIn() {
  const styles = ['https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css',
    way + 'css/sign_in.css'];
  createHead(styles);


  const signInSection = document.createElement('section');
  signInSection.dataset.sectionName = 'sign_in';


  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  const form = document.createElement('form');
  form.classList.add('form-signin');

  const formHeading = document.createElement('h2');
  formHeading.classList.add('form-signin-heading');
  formHeading.textContent = 'Вход';

  // email input
  const inputEmail = document.createElement('input');
  inputEmail.name = 'email';
  inputEmail.type = 'email';
  inputEmail.placeholder = 'email';
  inputEmail.classList.add('form-control');

  // password input
  const divPass = document.createElement('div');
  divPass.classList.add('form-group');
  divPass.classList.add('has-feedback');

  const inputPass = document.createElement('input');
  inputPass.name = 'password';
  inputPass.type = 'password';
  inputPass.placeholder = 'Password';
  inputPass.classList.add('form-control');

  const eyePass = document.createElement('i');
  eyePass.classList.add('glyphicon');
  eyePass.classList.add('glyphicon-eye-open');
  eyePass.classList.add('form-control-feedback');

  const divHint = document.createElement('div');
  divHint.textContent = 'Введите пароль';
  divHint.classList.add('hint');

  const submit = document.createElement('input');
  submit.name = 'submit';
  submit.type = 'submit';
  submit.textContent = 'Войти';
  submit.classList.add('btn');
  submit.classList.add('btn-lg');
  submit.classList.add('btn-primary');
  submit.classList.add('btn-block');
  submit.classList.add('btn_enter');

  divPass.appendChild(inputPass);
  divPass.appendChild(eyePass);
  divPass.appendChild(divHint);

  form.appendChild(formHeading);
  form.appendChild(inputEmail);
  form.appendChild(divPass);
  form.appendChild(submit);
  form.appendChild(createMenuLink());

  wrapper.appendChild(form);
  signInSection.appendChild(wrapper);
  signInSection.appendChild(createMenuLink());

  /* form.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = form.elements[ 'email' ].value;
    const password = form.elements[ 'password' ].value;
  });*/

  application.appendChild(signInSection);
}

/**
 * Create page 'sign up'
 */
function createSignUp() {
  const styles = ['https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css',
    way + 'css/sign_up.css'];
  createHead(styles);


  const signInSection = document.createElement('section');
  signInSection.dataset.sectionName = 'sign_up';


  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  const form = document.createElement('form');
  form.classList.add('form-signin');

  const formHeading = document.createElement('h2');
  formHeading.classList.add('form-signin-heading');
  formHeading.textContent = 'Регистрация';

  // email input
  const inputEmail = document.createElement('input');
  inputEmail.name = 'email';
  inputEmail.type = 'email';
  inputEmail.placeholder = 'email';
  inputEmail.classList.add('form-control');


  form.appendChild(formHeading);
  form.appendChild(inputEmail);

  const inputs = [
    {
      name: 'password',
      type: 'password',
      placeholder: 'Пароль',
    },
    {
      name: 'password_repeat',
      type: 'password',
      placeholder: 'Повторите пароль',
    },
  ];

  inputs.forEach( (item) => {
    const divPass = document.createElement('div');
    divPass.classList.add('form-group');
    divPass.classList.add('has-feedback');

    const inputPass = document.createElement('input');
    inputPass.name = item.name;
    inputPass.type = item.type;
    inputPass.placeholder = item.placeholder;
    inputPass.classList.add('form-control');

    const eyePass = document.createElement('i');
    eyePass.classList.add('glyphicon');
    eyePass.classList.add('glyphicon-eye-open');
    eyePass.classList.add('form-control-feedback');

    const divHint = document.createElement('div');
    divHint.textContent = 'Введите пароль';
    divHint.classList.add('hint');

    divPass.appendChild(inputPass);
    divPass.appendChild(eyePass);
    divPass.appendChild(divHint);
    form.appendChild(divPass);
  });


  const submit = document.createElement('input');
  submit.name = 'submit';
  submit.type = 'submit';
  submit.textContent = 'Войти';
  submit.classList.add('btn');
  submit.classList.add('btn-lg');
  submit.classList.add('btn-primary');
  submit.classList.add('btn-block');
  submit.classList.add('btn_enter');
  form.appendChild(submit);
  form.appendChild(createMenuLink());

  wrapper.appendChild(form);
  signInSection.appendChild(wrapper);
  signInSection.appendChild(createMenuLink());

  /* form.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = form.elements[ 'email' ].value;
    const password = form.elements[ 'password' ].value;
  });*/

  application.appendChild(signInSection);
}

/**
 * Create page 'leaderboard'
 */
function createLeaderboard() {
  const styles = [
    way + 'css/leaderboard.css'];
  createHead(styles);
  const leaderboardSection = document.createElement('section');
  leaderboardSection.dataset.sectionName = 'leaderboard';

  const header = document.createElement('h1');
  header.classList.add('leaderboard__header');
  header.textContent = 'Таблица лидеров';

  const wrapper = document.createElement('div');
  wrapper.classList.add('leaderboard');
  const innerWrapper = document.createElement('div');
  innerWrapper.classList.add('leaderboard__wrapper');

  leaderboardSection.appendChild(header);
  leaderboardSection.appendChild(document.createElement('br'));
  leaderboardSection.appendChild(wrapper);
  wrapper.appendChild(innerWrapper);
  const users = [new Map([
    ['num', '1'],
    ['name', 'ser'],
    ['score', '120000'],
    ['games', '99'],
  ]),
  new Map([
    ['num', '2'],
    ['name', 'Dog'],
    ['score', '545454'],
    ['games', '3'],
  ]),
  new Map([
    ['num', '3'],
    ['name', 'Dog'],
    ['score', '545454'],
    ['games', '3'],
  ]),
  new Map([
    ['num', '4'],
    ['name', 'Dog'],
    ['score', '545454'],
    ['games', '3'],
  ]),
  new Map([
    ['num', '5'],
    ['name', 'Dog'],
    ['score', '545454'],
    ['games', '3'],
  ]),
  ];

  const table = document.createElement('table');
  innerWrapper.appendChild(table);
  const thead = document.createElement('thead');
  thead.innerHTML = `
    <tr>
      <th></th>
      <th>User</th>
      <th>Score</th>
      <th>Games played</th>
    </tr>
    `;
  const tbody = document.createElement('tbody');

  table.appendChild(thead);
  table.appendChild(tbody);

  users.forEach(function(user, i) {
    const tr = document.createElement('tr');
    user.forEach(function(val) {
      const td = document.createElement('td');
      td.textContent = val;
      tr.appendChild(td);
    });
    const background = i % 2 ? 'white' : '#f2f2f2';
    tr.style.background = background;
    tbody.appendChild(tr);
  });
  innerWrapper.appendChild(createMenuLink());
  application.appendChild(leaderboardSection);
}

/**
 * Create page 'authors'
 */
function createAuthors() {
  const styles = [
    way + 'css/about.css'];
  createHead(styles);
  const aboutSection = document.createElement('section');
  aboutSection.dataset.sectionName = 'about';

  const header = document.createElement('h1');
  header.classList.add('about__header');
  header.textContent = 'О нас';

  const wrapper = document.createElement('div');
  wrapper.classList.add('about');
  const innerWrapper = document.createElement('div');
  innerWrapper.classList.add('about__wrapper');

  wrapper.appendChild(innerWrapper);
  aboutSection.appendChild(header);
  aboutSection.appendChild(document.createElement('br'));
  aboutSection.appendChild(wrapper);

  const team = document.createElement('div');
  team.classList.add('team');
  innerWrapper.appendChild(team);

  const members = [{
    name: 'Дмитрий Липко',
    role: 'Лучший ментор',
    github: 'https://github.com/dlipko',
  },
  {
    name: 'Артём Доктор',
    role: 'Fullstack',
    github: 'https://github.com/SmartPhoneJava',
  },
  {
    name: 'Иван Спасенов',
    role: 'Fullstack',
    github: 'https://github.com/slevinsps',
  },
  {
    name: 'Сергей Апарин',
    role: 'Fullstack',
    github: 'https://github.com/Bigyin1',
  },
  ];

  members.forEach((member) => {
    const {
      name,
      role,
      github,
    } = member;

    const n = document.createElement('div');
    n.classList.add('team__name');
    team.appendChild(n);

    const a = document.createElement('a');
    a.classList.add('team__a');
    a.textContent = name;
    a.href = github;
    n.appendChild(a);

    const r = document.createElement('div');
    r.classList.add('team__role');
    r.textContent = role;
    team.appendChild(r);
  });


  innerWrapper.appendChild(createMenuLink());
  application.appendChild(aboutSection);
}

const pages = {
  menu: createMenu,
  sign_in: createSignIn,
  sign_up: createSignUp,
  leaders: createLeaderboard,
  about: createAuthors,
};

createMenu();

application.addEventListener('click', function(event) {
  if (!(event.target instanceof HTMLAnchorElement)) {
    return;
  }

  event.preventDefault();
  const link = event.target;

  console.log({
    href: link.href,
    dataHref: link.dataset.href,
  });

  application.innerHTML = '';

  pages[link.dataset.href]();
});
