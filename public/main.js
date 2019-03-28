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
import './main.css';


const root = document.getElementById('application');

import runtime from 'serviceworker-webpack-plugin/lib/runtime';

if ('serviceWorker' in navigator) {
  const registration = runtime.register();
  console.log(registration);
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
