"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class space extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      space.hasMany(models.story);
    }
  }
  space.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      description: DataTypes.TEXT,
      backgroundColor: { type: DataTypes.STRING, defaultValue: "#ffffff" }, //white
      color: { type: DataTypes.STRING, defaultValue: "#000000" }, //black
    },
    {
      sequelize,
      modelName: "space",
    }
  );
  return space;
};
