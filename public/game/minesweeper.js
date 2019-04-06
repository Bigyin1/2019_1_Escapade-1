/** */
export class MineSweeper {
  /**
   *
   */
  constructor(NumbersX = 20, NumbersY = 20, bombsCount = 10) {
    this.cellNumbersX = NumbersX;
    this.cellNumbersY = NumbersY;
    this.bombsCount = bombsCount;
    this.map = this.
        _createMap(this.cellNumbersX, this.cellNumbersY, this.bombsCount);
    this.mapLabel = new Array(this.cellNumbersY);
    for (let i = 0; i < this.cellNumbersY; i++) {
      this.mapLabel[i] = new Array(this.cellNumbersX).fill(0);
    }
  }

  /** */
  openCels(x, y, xLen, yLen) {
    x = parseInt(x);
    y = parseInt(y);
    xLen = parseInt(xLen);
    yLen = parseInt(yLen);

    if (x < 0 || x >= xLen || y < 0 || y >= yLen) {
      return {cellArr: [], points: 0, openCells: 0};
    }
    if (this.mapLabel[x][y] != 0) {
      return {cellArr: [], points: 0, openCells: 0};
    }
    this.mapLabel[x][y] = 1;
    const pointsAndNumOpenCells = {cellArr: [], points: 0, openCells: 0};
    let res;
    if ( this.map[x][y] === 0 ) {
      res = this.openCels(x - 1, y - 1, xLen, yLen);
      pointsAndNumOpenCells.points += res.points;
      pointsAndNumOpenCells.openCells += res.openCells;
      pointsAndNumOpenCells.cellArr =
        pointsAndNumOpenCells.cellArr.concat(res.cellArr);
      res = this.openCels(x - 1, y + 1, xLen, yLen);
      pointsAndNumOpenCells.points += res.points;
      pointsAndNumOpenCells.openCells += res.openCells;
      pointsAndNumOpenCells.cellArr =
        pointsAndNumOpenCells.cellArr.concat(res.cellArr);
      res = this.openCels(x - 1, y, xLen, yLen);
      pointsAndNumOpenCells.points += res.points;
      pointsAndNumOpenCells.openCells += res.openCells;
      pointsAndNumOpenCells.cellArr =
        pointsAndNumOpenCells.cellArr.concat(res.cellArr);
      res = this.openCels(x, y - 1, xLen, yLen);
      pointsAndNumOpenCells.points += res.points;
      pointsAndNumOpenCells.openCells += res.openCells;
      pointsAndNumOpenCells.cellArr =
        pointsAndNumOpenCells.cellArr.concat(res.cellArr);
      res = this.openCels(x, y + 1, xLen, yLen);
      pointsAndNumOpenCells.points += res.points;
      pointsAndNumOpenCells.openCells += res.openCells;
      pointsAndNumOpenCells.cellArr =
        pointsAndNumOpenCells.cellArr.concat(res.cellArr);
      res = this.openCels(x + 1, y - 1, xLen, yLen);
      pointsAndNumOpenCells.points += res.points;
      pointsAndNumOpenCells.openCells += res.openCells;
      pointsAndNumOpenCells.cellArr =
        pointsAndNumOpenCells.cellArr.concat(res.cellArr);
      res = this.openCels(x + 1, y + 1, xLen, yLen);
      pointsAndNumOpenCells.points += res.points;
      pointsAndNumOpenCells.openCells += res.openCells;
      pointsAndNumOpenCells.cellArr =
        pointsAndNumOpenCells.cellArr.concat(res.cellArr);
      res = this.openCels(x + 1, y, xLen, yLen);
      pointsAndNumOpenCells.points += res.points;
      pointsAndNumOpenCells.openCells += res.openCells;
      pointsAndNumOpenCells.cellArr =
        pointsAndNumOpenCells.cellArr.concat(res.cellArr);
    } else {
      if (this.map[x][y] < 9) {
        pointsAndNumOpenCells.points += this.map[x][y];
      }
    }
    pointsAndNumOpenCells.cellArr = pointsAndNumOpenCells.cellArr.concat([[x, y]]);
    pointsAndNumOpenCells.openCells += 1;
    return pointsAndNumOpenCells;
  }

  /** */
  count3BV() {
    let BBBVCount = 0;
    this.mapLabel3BV = new Array(this.cellNumbersY);
    for (let i = 0; i < this.cellNumbersY; i++) {
      this.mapLabel3BV[i] = new Array(this.cellNumbersX).fill(0);
    }
    for (let y = 0; y < this.cellNumbersY; y++) {
      for (let x = 0; x < this.cellNumbersX; x++) {
        if (this.map[x][y] != 0) {
          if (this.map[x][y] == 9) {
            this.mapLabel3BV[x][y] = 1;
          }
          continue;
        }
        if (this.mapLabel3BV[x][y] != 0) {
          continue;
        }
        this._markNeighbor(x, y, this.cellNumbersX, this.cellNumbersY);
        BBBVCount += 1;
      }
    }
    for (let y = 0; y < this.cellNumbersY; y++) {
      for (let x = 0; x < this.cellNumbersX; x++) {
        if (this.mapLabel3BV[x][y] == 0) {
          BBBVCount += 1;
        }
      }
    }

    return BBBVCount;
  }

  /** */
  _markNeighbor(x, y, xLen, yLen) {
    x = parseInt(x);
    y = parseInt(y);
    xLen = parseInt(xLen);
    yLen = parseInt(yLen);
    // console.log(x, ' ', y, ' ', xLen, ' ', yLen, ' ', mapLabel3BV);
    if (x < 0 || x >= xLen || y < 0 || y >= yLen ||
        this.mapLabel3BV[x][y] != 0) {
      return;
    }
    this.mapLabel3BV[x][y] = 1;
    if ( this.map[x][y] === 0 ) {
      this._markNeighbor(x - 1, y - 1, xLen, yLen);
      this._markNeighbor(x - 1, y + 1, xLen, yLen);
      this._markNeighbor(x - 1, y, xLen, yLen);
      this._markNeighbor(x, y - 1, xLen, yLen);
      this._markNeighbor(x, y + 1, xLen, yLen);
      this._markNeighbor(x + 1, y - 1, xLen, yLen);
      this._markNeighbor(x + 1, y + 1, xLen, yLen);
      this._markNeighbor(x + 1, y, xLen, yLen);
    }
    return;
  }

  /** */
  _createMap(xLen, yLen, bombNumber) {
    const map = new Array(yLen);

    for (let i = 0; i < yLen; i++) {
      map[i] = new Array(xLen).fill(0);
    }

    for (let i = 0; i < bombNumber; i++) {
      let xBomb = 0;
      let yBomb = 0;
      do {
        xBomb = this.randomInteger(0, xLen - 1);
        yBomb = this.randomInteger(0, yLen - 1);
      } while (map[xBomb][yBomb] === 9);
      map[xBomb][yBomb] = 9;
      this._fillCellsAroundBomb(map, xBomb, yBomb, xLen, yLen);
    }
    return map;
  }

  /** */
  _fillCellsAroundBomb(map, xBomb, yBomb, xLen, yLen) {
    if (xBomb - 1 >= 0 && yBomb - 1 >= 0 && map[xBomb - 1][yBomb - 1] < 9) {
      map[xBomb - 1][yBomb - 1] += 1;
    }
    if (xBomb - 1 >= 0 && yBomb >= 0 && map[xBomb - 1][yBomb] < 9) {
      map[xBomb - 1][yBomb] += 1;
    }
    if (xBomb - 1 >= 0 && yBomb + 1 < yLen && map[xBomb - 1][yBomb + 1] < 9) {
      map[xBomb - 1][yBomb + 1] += 1;
    }
    if (xBomb >= 0 && yBomb - 1 >= 0 && map[xBomb][yBomb - 1] < 9) {
      map[xBomb][yBomb - 1] += 1;
    }
    if (xBomb >= 0 && yBomb + 1 < yLen && map[xBomb][yBomb + 1] < 9) {
      map[xBomb][yBomb + 1] += 1;
    }
    if (xBomb + 1 < xLen && yBomb - 1 >= 0 && map[xBomb + 1][yBomb - 1] < 9) {
      map[xBomb + 1][yBomb - 1] += 1;
    }
    if (xBomb + 1 < xLen && yBomb >= 0 && map[xBomb + 1][yBomb] < 9) {
      map[xBomb + 1][yBomb] += 1;
    }
    if (xBomb + 1 < xLen && yBomb + 1 < yLen && map[xBomb + 1][yBomb + 1] < 9) {
      map[xBomb + 1][yBomb + 1] += 1;
    }
    return;
  }

  /** */
  randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }
}
