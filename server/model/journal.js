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
    title: {
      type: DataTypes.TEXT("medium"),
    },
    entry: {
      type: DataTypes.TEXT("long"),
    },
    feelings: {
      type: DataTypes.CHAR,
    },
    date: {
      type: DataTypes.DATE,
    },
  });
