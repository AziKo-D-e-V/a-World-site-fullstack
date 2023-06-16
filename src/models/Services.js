const {v4: uuid} = require("uuid");

class Service {
  constructor(image, btn) {
      this.id = uuid();
      this.image = image;
      this.btn = btn;
  }
}

module.exports = Service;
