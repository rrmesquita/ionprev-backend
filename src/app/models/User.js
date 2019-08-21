module.exports = (sequelize, DataTypes) => {
  return sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    companyId: {
      field: "company_id",
      type: DataTypes.STRING
    }
  });
};
