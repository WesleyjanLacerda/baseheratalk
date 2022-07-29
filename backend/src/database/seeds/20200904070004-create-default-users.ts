import { QueryInterface } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "HeraTalk",
          email: "admin@heratalk.com.br",
          passwordHash: "$2a$08$TyusqU6f/uTqOa3L.qW/RuFRiXuyW/CjT6213Dc1ddKzKZn7VIVRO",
          profile: "admin",
          tokenVersion: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete("Users", {});
  }
};
