"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("events", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      company_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      action: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: Sequelize.DATE
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("events");
  }
};
