module.exports = (sequelize, DataTypes, User) =>
  sequelize.define("Journal", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userCode: {
      type: DataTypes.CHAR,
      references: {
        model: User,
        key: "userId",
      },
    },
    text: {
      type: DataTypes.TEXT("long"),
    },
    date: {
      type: DataTypes.DATE,
    },
  });
