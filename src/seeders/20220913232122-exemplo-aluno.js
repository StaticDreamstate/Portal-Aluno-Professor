'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Alunos', [{
      nome: 'John',
      sobrenome: 'Doe',
      email: 'jd@email.com',
      curso: 'Ciência da Computação',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Alunos', null, {});
  }

};
