export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._nmae = name;
 }
  
  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = newCode;
  }

  get name() {
    return this.name;
  }

  set code(newName) {
    this._code = newName;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

