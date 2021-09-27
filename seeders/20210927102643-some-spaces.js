"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "spaces",
      [
        {
          title: "testing space",
          description: "view the space of test user",
          backgroundColor: "",
          color: "",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "dummy space",
          description: "view the space of a dummy",
          backgroundColor: "",
          color: "",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "testing space 2",
          description: "additional space of a test user",
          backgroundColor: "",
          color: "",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("spaces", null, {});
  },
};
