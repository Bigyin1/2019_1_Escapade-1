import signUpTemplate from './SignUp.pug';
import {validateEmail, validatePass} from '../../utils/validation.js';
import {User} from '../../utils/user.js';
import {Net} from '../../utils/net.js';
import {createProfile} from '../../main.js';
/** */
export class SignUpComponent {
  /**
   *
   * @param {HTMLElement} parent
   */
  constructor({
    el = document.body,
  } = {}) {
    this.parent = el;
    this.template = signUpTemplate;
  }

  /**
   * @param {Object} data
  */
  set data(data = []) {
    this._data = data;
  }

  /**
   * Отрисовка формы регистрации и добавление лисенеров
  */
  render() {
    this.parent.innerHTML = this.template({data: this._data});

    this._warnings = {};
    this._warnings.email = this.parent.querySelector('.js-warning-email');
    this._warnings.login = this.parent.querySelector('.js-warning-login');
    this._warnings.pass = this.parent.querySelector('.js-warning-password');
    this._warnings.repass = this.parent.querySelector('.js-warning-repassword');
    this._form = this.parent.querySelector('.signup__form');

    this._submitButton = this.parent.querySelector('.signup__submit');

    this._submitButton.addEventListener('click', this._onSubmit.bind(this));
  }

  /**
   * Действие при сабмите формы логина
   * @param {Event} event
   */
  _onSubmit(event) {
    console.log('event');
    event.preventDefault();
    const data = {};
    data.email = this._form.elements['email'].value;
    data.name = this._form.elements['login'].value;
    data.password = this._form.elements['password'].value;
    data.repass = this._form.elements['password-repeat'].value;
    if (this._validateInput(data)) {
      console.log(data);
      this._auth(data);
    }
  }

  /**
   * Валидация формы авторизации
   * @param  {...any} data
   * @return {boolean}
   */
  _validateInput({email, name, password, repass}) {
    let isValid = true;
    let message = '';
    this._hideWarning(this._warnings.email);
    message = validateEmail(email);
    if (message.length !== 0 ) {
      this._showWarning(this._warnings.email, message);
      isValid = false;
    }


    this._hideWarning(this._warnings.login);
    if (validatePass(name) !== true) {
      let message = 'Invalid login format. Login must be at least 3 letters';
      if (name.length === 0) {
        message = 'Fill login field please';
      }
      this._showWarning(this._warnings.login, message);
      isValid = false;
    }

    this._hideWarning(this._warnings.pass);
    if (validatePass(password) !== true) {
      let message = `Invalid password format.
       Password must be at least 3 letters`;
      if (password.length === 0) {
        message = 'Fill password field please';
      }
      this._showWarning(this._warnings.pass, message);
      isValid = false;
    }

    this._hideWarning(this._warnings.repass);
    if (repass !== password) {
      let message = 'Passwords dont match';
      if (repass.length === 0) {
        message = 'Repeat password please';
      }
      this._showWarning(this._warnings.repass, message);
      isValid = false;
    }
    return isValid;
  }

  /**
   * Показать предупреждение валидации
   * @param {HTMLElement} warning
   * @param {String} message
   */
  _showWarning(warning, message) {
    warning.classList.remove('hidden');
    warning.innerHTML = '';
    warning.innerHTML += message;
  }

  /**
   * Скрыть предупреждение валидации
   * @param {*} warning
   */
  _hideWarning(warning) {
    warning.classList.add('hidden');
    warning.innerHTML = '';
  }


  /**
   * Отправка запроса авторизации и заполнение объекта User
   * @param {object} data
   */
  _auth(data) {
    console.log(data);
    Net.post({url: '/user', body: data})
        .then((resp) => {
          if (resp.status === 201) {
            User.setUser({...data});
            createProfile();
          } else {
            return resp.json();
          }
        })
        .then((error) => {
          this._showWarning(this._warnings.email, error.message);
        })
        .catch((error) => {
          console.log('SignUp failed', error);
        });
  }
}
