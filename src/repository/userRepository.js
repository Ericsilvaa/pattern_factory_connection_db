class UserRepository {
  // para a class começar a trabalhar ela tem que receber dbConnection
  constructor({ dbConnection }) {
    this.dbConnection = dbConnection;
  }

  async find(query) {
    return this.dbConnection.find(query);
  }
}

module.exports = UserRepository;

/* 
  [Repository]
    * Tem a responsabilidade de trabalhar com o DB

  # Sem require, apenas com injeção de depência 
    TODO: Injeção de depêndencia -> [ Ela permite que os módulos ou objetos de um aplicativo (dependam de outros módulos ou objetos) [sem ter] que criar [uma conexão direta] entre eles. ]

*/
