'use strict';

module.exports = {

  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Professores', [{
      nome: 'Bob',
      sobrenome: 'Rob',
      email: 'brob@email.com',
      materia: 'Programação em Baixo Nível',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Professores', null, {});
  }

};
