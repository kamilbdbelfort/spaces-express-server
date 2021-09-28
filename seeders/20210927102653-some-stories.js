"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "life of a tester",
          content: "errors, debugging, compiling, seeding",
          imageUrl: "",
          spaceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "test 2",
          content: "this stories will be used to try findByPk",
          imageUrl: "",
          spaceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "test story with a spaceId 2",
          content: "for testing purposes",
          imageUrl: "",
          spaceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "test story continues",
          content: "for testing purposes 2",
          imageUrl: "",
          spaceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stories", null, {});
  },
};
