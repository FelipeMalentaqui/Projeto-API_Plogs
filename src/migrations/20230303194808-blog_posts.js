'use strict';

// const  { Sequelize: { DataTypes }} = require('sequelize'); 

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blog_posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      userId : {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        OnDelete: 'CASCADE',
        field: 'user_id',
        references: {
          model: 'users', // referente a tabela users
          key: 'id', // Referencia o id da tabela primary de users
        }
      },
      published: {
        type: Sequelize.DATE,
      },
      updated: {
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.dropTable('blog_posts');
  }
};
