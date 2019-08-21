"use strict";

const faker = require("faker");

module.exports = {
  up: queryInterface => {
    let queryData = [];

    for (let i = 0; i < 15; i++) {
      const seed = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        company_id: faker.random.number({ min: 1, max: 5 }),
        created_at: new Date(),
        updated_at: new Date()
      };

      queryData.push(seed);
    }

    return queryInterface.bulkInsert("users", queryData);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
