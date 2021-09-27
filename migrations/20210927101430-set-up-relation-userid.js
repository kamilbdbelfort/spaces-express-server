"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("spaces", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE", // what to do if user.id changes
      onDelete: "SET NULL", // what to do if the user is deleted
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("spaces", "userId");
  },
};
