/* eslint-disable require-jsdoc */
import singlePlayerTemplate from './SinglePlayer.pug';
import BaseView from '../BaseView';
import {User} from '../../utils/user.js';
import {MineSweeper} from '../../game/minesweeper.js';
import {Timer} from '../../game/timer.js';
/** */
export class SinglePlayerView extends BaseView {
  /**
   *
   * @param {*} parent
   */
  constructor(parent) {
    super(parent, singlePlayerTemplate);
    this.cellCloseStringName = 'cell_close';
    this.cellOpenStringName = 'cell_open';
    this.cellStringName = 'cell';
    this.cellFlagStringName = 'cell_flag';
    this.mapStringName = 'single_player__map';
    this.timerFieldStringName = 'single_player__timer';

    this.pointsFieldStringName = 'single_player__statistics_row_points';
    this.minesFieldStringName = 'single_player__statistics_row_mines';
    this.leftClicksFieldStringName = 'single_player__statistics_row_left_click';
    this.rightClicksFieldStringName = 'single_player__statistics_row_right_click';
    this.restartFieldStringName = 'single_player__restart_button';
    this.percentOpenFieldStringName = 'single_player__percent';
    this.loadbarFieldStringName = 'single_player__loadbar';
    this.babyFieldStringName = 'single_player__submenu_baby';
    this.normalFieldStringName = 'single_player__submenu_normal';
    this.hardFieldStringName = 'single_player__submenu_hard';
    this.godFieldStringName = 'single_player__submenu_god';
    this.itemListFieldStringName = 'single_player__submenu_item';
    this.infoModeFieldStringName = 'single_player__settings_info_mode';
    this.infoWidthFieldStringName = 'single_player__settings_info_width';
    this.infoHeightFieldStringName = 'single_player__settings_info_height';
    this.infoMinesFieldStringName = 'single_player__settings_info_mines';


    this.cellsize = 50;
    this.cellNumbersX = 15;
    this.cellNumbersY = 15;
    this.minesCount = 20;
    this.start = false;

    document.addEventListener('click', this._clickOnBody.bind(this));
    

    document.addEventListener('contextmenu', this._rightСlickOnCell.bind(this));
    document.body.oncontextmenu = function(e) {
      return false;
    };
  }

  /**
   *
  */
  render() {
    this.data = User;
    super.render();
    this.pointsDocElement = document.getElementsByClassName(this.pointsFieldStringName)[0];
    this.minesDocElement = document.getElementsByClassName(this.minesFieldStringName)[0];
    this.leftClicksDocElement = document.getElementsByClassName(this.leftClicksFieldStringName)[0];
    this.rightClicksDocElement = document.getElementsByClassName(this.rightClicksFieldStringName)[0];
    this.restartDocElement = document.getElementsByClassName(this.restartFieldStringName)[0];
    this.percentOpenDocElement = document.getElementsByClassName(this.percentOpenFieldStringName)[0];
    this.loadbarDocElement = document.getElementsByClassName(this.loadbarFieldStringName)[0];

    this.infoModeDocElement = document.getElementsByClassName(this.infoModeFieldStringName)[0];
    this.infoWidthDocElement = document.getElementsByClassName(this.infoWidthFieldStringName)[0];
    this.infoHeightDocElement = document.getElementsByClassName(this.infoHeightFieldStringName)[0];
    this.infoMinesDocElement = document.getElementsByClassName(this.infoMinesFieldStringName)[0];

    this.timer = new Timer(document.getElementById(this.timerFieldStringName));

    this.restartDocElement.addEventListener('click', this._restart.bind(this));
    this.restartDocElement.innerHTML = 'Start';
    this.infoModeDocElement.innerHTML = 'Normal mode';
    this.minesCount = 20;
    this.infoMinesDocElement.innerHTML = this.minesCount + ' mines';
    this.infoWidthDocElement.innerHTML = this.cellNumbersX + ' width';
    this.infoHeightDocElement.innerHTML = this.cellNumbersY + ' height';

    this._showMap();
  }

  /** */
  _clickOnBody(e) {
    if (e.target.classList.contains(this.itemListFieldStringName)) {
      this._changeHard(e);
    } else if (e.target.classList.contains(this.cellStringName)) {
      this._clickOnCell(e);
    }
  }

  /** */
  _showMap() {
    this.openCellsCount = 0;
    this.pointsCount = 0;
    this.leftClicksCount = 0;
    this.rightClicksCount = 0;
    this.prcentOpen = 0;
    this.minesRemainedCount = this.minesCount;

    this.mineSweeper = new MineSweeper(this.cellNumbersX, this.cellNumbersY, this.minesCount);
    this.BBBVCount = this.mineSweeper.count3BV();
    console.log('3BV = ' + this.BBBVCount);
    this.pointsDocElement.innerHTML = this.pointsCount + ' points';
    this.minesDocElement.innerHTML = this.minesRemainedCount + ' mines left';
    this.leftClicksDocElement.innerHTML = this.leftClicksCount + ' left clicks';
    this.rightClicksDocElement.innerHTML = this.rightClicksCount + ' right clicks';
    this.percentOpenDocElement.innerHTML = this.prcentOpen + ' %';
    this.loadbarDocElement.style.width = 0 + 'px';

    if (this.start) {
      this.timer.router();
    }
    
    const field = document.getElementsByClassName(this.mapStringName)[0];
    if (!field) {
      console.log('error field cannot find ' + this.mapStringName);
    }
    field.innerHTML = '';
    field.setAttribute('class', this.mapStringName);
    field.setAttribute('style', 'width: ' + this.cellNumbersX * this.cellsize + 'px; ' + 'height: ' + this.cellNumbersY * this.cellsize + 'px;');
    for (let y = 0; y < this.cellNumbersY; y++) {
      for (let x = 0; x < this.cellNumbersX; x++) {
        const cell = document.createElement('div');
        const strClassClose = this.cellCloseStringName + '_' + this.mineSweeper.randomInteger(1, 3);
        cell.setAttribute('class', this.cellStringName + ' ' + this.cellCloseStringName + ' ' + strClassClose);

        cell.setAttribute('id', this.cellStringName + '_' + x + '_' +y);
        cell.setAttribute('style', 'top: ' + y * this.cellsize + 'px;' + 'left: ' + x * this.cellsize + 'px;'
        + 'width: ' + this.cellsize + 'px;' + 'height: ' + this.cellsize + 'px;');
        field.appendChild(cell);
      }
    }
    return;
  }

  /** */
  _restart() {
    if (!this.start) {
      this.restartDocElement.innerHTML = 'Restart';
      this.start = true;
    } else {
      if (this.timer.running) {
        this.timer.stop();
      }
    }
    
    this._showMap();
  }



  /** */
  _changeHard(e) {
    if (e.target.classList.contains(this.babyFieldStringName)) {
      this.infoModeDocElement.innerHTML = 'Baby mode';
      this.minesCount = 10;
      this.infoMinesDocElement.innerHTML = this.minesCount + ' mines';
    } else if (e.target.classList.contains(this.normalFieldStringName)) {
      this.infoModeDocElement.innerHTML = 'Normal mode';
      this.minesCount = 20;
      this.infoMinesDocElement.innerHTML = this.minesCount + ' mines';
    } else if (e.target.classList.contains(this.hardFieldStringName)) {
      this.infoModeDocElement.innerHTML = 'Hard mode';
      this.minesCount = 30;
      this.infoMinesDocElement.innerHTML = this.minesCount + ' mines';
    } else if (e.target.classList.contains(this.godFieldStringName)) {
      this.infoModeDocElement.innerHTML = 'God mode';
      this.minesCount = 40;
      this.infoMinesDocElement.innerHTML = this.minesCount + ' mines';
    }
    if (this.timer.running) {
      this.timer.stop();
    }

    if (!this.start) {
      this.restartDocElement.innerHTML = 'Restart';
      this.start = true;
    }

    this._showMap();

  }

  /** */
  _clickOnCell(e) {
    if (!this.start) 
      if (!e.target.classList.contains(this.cellStringName) ||
        e.target.classList.contains(this.cellFlagStringName) ||
        !this.start) {
        return;
      }
    const idArr = e.target.id.split('_');
    const x = parseInt(idArr[1]);
    const y = parseInt(idArr[2]);
    let res;
    this.leftClicksDocElement.innerHTML = (++this.leftClicksCount) + ' left clicks';
    if (this.mineSweeper.map[x][y] === 9) {
      this._openAllCels(x, y, this.cellNumbersX, this.cellNumbersY);
      if (this.timer.running) {
        this.timer.stop();
      }
      this.start = false;
      alert('You lose!');
      return;
    } else {
      res = this.mineSweeper.
          openCels(x, y, this.cellNumbersX, this.cellNumbersY);
      this._openCels(res.cellArr);
      this.openCellsCount += res.openCells;
      this.prcentOpen = Math.round((this.openCellsCount / (this.cellNumbersX * this.cellNumbersY - this.minesCount)) * 100);
      this.percentOpenDocElement.innerHTML = this.prcentOpen + ' %';
      this.loadbarDocElement.style.width = (this.prcentOpen / 100) * (this.cellsize * this.cellNumbersX - 55) + 'px';
    }

    // eslint-disable-next-line max-len
    console.log(this.openCellsCount, ' ', this.cellNumbersX * this.cellNumbersY - this.minesCount);
    this.pointsDocElement.innerHTML = (this.pointsCount += res.points) + ' points';
    if (this.openCellsCount === this.cellNumbersX * this.cellNumbersY - this.minesCount) {
      this._openAllCels(x, y, this.cellNumbersX, this.cellNumbersY);
      if (this.timer.running) {
        this.timer.stop();
      }
      this.start = false;
      alert('You win!');
    }
    return;
  }

  /** */
  _rightСlickOnCell(e) {
    if (!e.target.classList.contains(this.cellStringName) || !this.start ||
      (!e.target.classList.contains(this.cellCloseStringName) &&
      !e.target.classList.contains(this.cellFlagStringName))) {
      return;
    }
    this.rightClicksDocElement.innerHTML = (++this.rightClicksCount) + ' right clicks';
    const idArr = e.target.id.split('_');
    const x = parseInt(idArr[1]);
    const y = parseInt(idArr[2]);
    const typeOfCell = this.mineSweeper.putRemoveFlag(x, y);

    if (typeOfCell == 0) {
      if (this.minesRemainedCount < this.minesCount) {
        this.minesDocElement.innerHTML = (++this.minesRemainedCount) + ' mines left';
      }
      if (e.target.classList.length < 3) {
        console.log('error e.target.classList.length < 3');
        return;
      }
      const classElems = e.target.classList[2].split('_');
      const numClassElem = parseInt(classElems[2]);
      e.target.className = this.cellStringName + ' ' +
                          this.cellCloseStringName + ' ' +
                          this.cellCloseStringName + '_' + numClassElem;
      return;
    }

    if (typeOfCell == 2) {
      if (this.minesRemainedCount > 0) {
        this.minesDocElement.innerHTML = (--this.minesRemainedCount) + ' mines left';
      }
      if (e.target.classList.length < 3) {
        console.log('error e.target.classList.length < 3');
        return;
      }
      const classElems = e.target.classList[2].split('_');
      const numClassElem = parseInt(classElems[2]);
      e.target.className = this.cellStringName + ' ' +
                          this.cellFlagStringName + ' ' +
                          this.cellFlagStringName + '_' + numClassElem;
    }
    return;
  }

  /** */
  _openCels(arrCells) {
    for (let i = 0; i < arrCells.length; i++) {
      const x = arrCells[i][0];
      const y = arrCells[i][1];
      const cell = document.
          getElementById(this.cellStringName+ '_' + x + '_' +y);
      if (!cell) {
        console.log('error _openCels cannot find ' +
           this.cellStringName + '_' + x + '_' +y);
      }
      cell.className = this.cellStringName + ' ' +
                       this.cellOpenStringName + ' ' +
                       this.cellOpenStringName + this.mineSweeper.map[x][y].toString();
    }
  }

  /** */
  _openAllCels() {
    for (let y = 0; y < this.cellNumbersY; y++) {
      for (let x = 0; x < this.cellNumbersX; x++) {
        const cell = document.getElementById(this.cellStringName + '_' + x + '_' +y);
        if (!cell) {
          console.log('error _openAllCels cannot find ' + this.cellStringName + '_' + x + '_' +y);
        }
        cell.className = this.cellStringName + ' ' +
                         this.cellOpenStringName + ' ' +
                         this.cellOpenStringName + this.mineSweeper.map[x][y].toString();
      }
    }
    this.prcentOpen = 100;
    this.percentOpenDocElement.innerHTML = this.prcentOpen + ' %';
    this.loadbarDocElement.style.width = (this.prcentOpen / 100) * (this.cellsize * this.cellNumbersX - 55) + 'px';
    return;
  }
}
