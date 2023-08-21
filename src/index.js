// Conhecimento unico -> Factory
const UserFactory = require("./factory/userFactory.js");

// porém é um promisse! Afins de teste, fazendo uma Cloure autoexecutavel IIFE
(async () => {
  // não preciso da [new] porque é um membro estatico.
  // não se executa, apenas acessa...
  // const userFactory = await UserFactory().createInstance()

  const userFactory = await UserFactory.createInstance();

  // caso passasse uma consulta(query)
  // const result = await userFactory.find({ name: 'Eric* '})
  const result = await userFactory.find();
  console.log({ result });
})();

/* 

  Na prática:
    Esse padrão serve para ajudar na dependencia, organização de codigo e principalmente
    a melhor forma de criar um codigo testavel.

    Esse padrão[factory] serve para outros paradigmas de programação.

    Cuidados:
      Com dependencias diretas, evite fazer importação de modulos dependentes
      em classes concretas, sempre use injeção de dependencias no lugar.

    Test:
      Use e abuse rewiremock para interceptar modulos que estão implicitamente
      acoplados. 
      Como nesse caso teste, o database.
    
      Factory and Abstract Factory
      
      Factory podem ser usadas para criar objetos de mesma familia.
      Abstract Factory são usadas para criar de familias de familias.

*/
