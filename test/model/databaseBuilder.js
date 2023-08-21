const User = require("../../src/entities/user");


class databaseBuilder {
  constructor() {
    // default, os dados corretos
    this.database = [
      { id: 2, name: "ZEZIN", email: "zezin@dev.com", years: 26 },
    ];
  }

  // retorna a instancia principal
  static aDatabase() {
    return new databaseBuilder();
  }

  build() {
    const data = new User(this.database)
    return data
  }
}


module.exports = databaseBuilder