'use strict';

import {MainMenuView} from './views/MainMenuView/MainMenu.js';
import {AuthorsView} from './views/AuthorsView/Authors.js';
import signOut from './views/SignOut/SignOut';
import {checkAuth} from './utils/user.js';
import Router from './utils/router';
import bus from './utils/bus.js';
import LeaderBoardMV from './ModelView/LeaderBoardMV';
import SignInMV from './ModelView/SignInMV';
import SignUpMV from './ModelView/SignUpMV.js';
import ProfileMV from './ModelView/ProfileMV.js';
import './img/arrow-left.png';
import './img/arrow-right.png';
import './img/qrosh.png';
import './main.css';

const root = document.getElementById('application');

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js', {scope: '/'})
      .then((reg) => {
        console.log('sw reg success:', reg);
      })
      .catch((err) => {
        console.error('sw reg err:', err);
      });
}
const router = new Router(root);

router
    .register('/', MainMenuView)
    .register('/sign_in', SignInMV.view)
    .register('/sign_up', SignUpMV.view)
    .register('/leaders', LeaderBoardMV.view)
    .register('/about', AuthorsView)
    .register('/profile', ProfileMV.view);

bus.on('logout', signOut);
checkAuth(router.start.bind(router));

export default router;
