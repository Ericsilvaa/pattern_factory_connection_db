// Os outros testes já foram explicados ... Devo aprender ...
// Para testar a Factory é um pouco 'mais complicado.'

const rewiremock = require("rewiremock/node");
const { deepStrictEqual } = require("assert");


// obj q precisa interceptar para evitar q vá para internet ou algo assim ...
// precisamos mockar o conteudo dele.
// <poderia estar em outro arquivo> mock
  const dbData = [{ name: "Zézin", name: "Antoin", name: "Waston" }];
  // inside - criando mais ou menos a assinatura que essa classe database já faz
  class MockDatabase {
    connect = () => this;
    find = async (query) => dbData;
  }
// <poderia estar em outro arquivo> mock



rewiremock(() => require("./../src/util/database")).with(MockDatabase);
(async () => {
  // criando contexto
  {
    const expected = [{ name: "ZÉZIN", name: "ANTOIN", name: "WASTON" }];

    rewiremock.enable();
    const UserFactory = require("../src/factory/userFactory");
    const userFactory = await UserFactory.createInstance();
    const result = await userFactory.find();

    deepStrictEqual(result, expected);
    rewiremock.disable();
  }


  // sem mock
  {
    const expected = [{ name: "ERIC OLIVEIRA"}];
    const UserFactory = require("../src/factory/userFactory");

    const userFactory = await UserFactory.createInstance();
    const result = await userFactory.find();
    deepStrictEqual(result, expected);
  }


})();



/* 
  Quando algum der um require neste arquivo <./../src/util/database>
  a gente vai usar nossa classe do MockDatabase
*/
