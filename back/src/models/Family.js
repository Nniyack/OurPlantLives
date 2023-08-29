module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Family', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    label: {
      type: DataTypes.STRING,
      unique: {
        msg: 'Le nom est déjà pris.'
      }
    },
    latinName: {
      type: DataTypes.STRING,
      unique: {
        msg: 'Le nom latin est déjà pris.'
      }
    }
  })
}