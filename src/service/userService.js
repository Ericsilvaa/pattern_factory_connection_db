class userService {
  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }

  async find(query) {
    // diferença desse find para os outros, é que esse é responsavel por implementar a regra de negócio
    const users = await this.userRepository.find(query);

    return users.map((item) => ({ ...item, name: item.name.toUpperCase() }));
  }
}

module.exports = userService;

/* 
  Service
    * Responsavel por mapear dados, regras de negócios e tomadas de decisões.

    # Também usando injeção de dependencia
      # constructor
        ** A responsabilidade dele, quem for usar vai receber
        direto no contrutor
          * Dessa forma não temos dependência de implementação.
          * Somente dependência de abstração dessa classe

        $ Nesse caso, nossa Service tem a responsabilidade de ir até o DB
        pegar o nome dos clientes e deixar em maiusculo.$



*/
