module.exports = (sequelize, DataTypes) => {
    return sequelize.define('journal', {
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true,
        }, 
        userCode: {
            type: DataTypes.STRING
        },
        text: {
            type: DataTypes.TEXT('long')
        },
        date: {
            type: DataTypes.DATE
        },
    })
}