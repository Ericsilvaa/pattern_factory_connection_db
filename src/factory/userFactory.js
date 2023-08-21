const Database = require("../util/database");
const UserRepository = require("../repository/userRepository.js");
const UserService = require("../service/userService.js");

class UserFactory {
  static async createInstance() {
    // pegando a instancia
    const db = new Database({ connectionString: "mongodb://localhost" });
    // instanciando a fn connect
    const dbConnection = await db.connect();
    // instanciando repository
    const userRepository = new UserRepository({ dbConnection });
    // instanciando service
    const userService = new UserService({ userRepository });

    // return userRepository

    return userService;
  }
}

module.exports = UserFactory;

/* 
  TODO: Factory
  * Abstrair a complexidade da criação de um objeto e evitar a replicação de dependencias!
  * Criar um lugar centralizado onde as dependencias são importadas e por fim, expor somente o que o cliente final vai usar.
  
    ? Responsável por linkar e geralmente é [static]
      * Movito static: Não precisamos utilizar nada do contexto da classe.
      No nosso caso, está linkando: 
        Service que depende da Repository.
        Repository que depende do Database.
        [Service -> Repository -> Database]
  UserFactory depende das classes concretas, realmente da execução
*/
