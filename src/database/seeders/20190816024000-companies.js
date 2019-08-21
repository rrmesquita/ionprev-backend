"use strict";

const faker = require("faker");

module.exports = {
  up: queryInterface => {
    let queryData = [];

    for (let i = 0; i < 5; i++) {
      const seed = {
        name: faker.company.companyName(),
        created_at: new Date(),
        updated_at: new Date()
      };

      queryData.push(seed);
    }

    return queryInterface.bulkInsert("companies", queryData);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete("companies", null, {});
  }
};
