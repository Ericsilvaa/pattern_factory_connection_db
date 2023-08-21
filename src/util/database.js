const User = require("../entities/user");




// simulação de drive de dados
class Database {
  constructor({ connectionString }) {
    this.connectionString = connectionString;
  }

  // ms -> milisegundos -> simulando resposta db
  async sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  // retorna o [this] para poder utilizar o find
  async connect() {
    await this.sleep(100)
    return this;
  }

  async find(query) {
    await this.sleep(100)
    const user = new User({
      id: 1,
      name: "Eric Oliveira",
      email: "eric@dev.com",
      years: 24,
    });
    const newUser = [user]
    return newUser;
    // return [{ name: "Eric Oliveira" }];
  }
}

module.exports = Database;

