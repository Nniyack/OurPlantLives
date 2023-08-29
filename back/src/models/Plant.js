module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Plant', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    label: {
      type: DataTypes.STRING,
      unique: {
        msg: 'Le nom est déjà pris.'
      },
      $validate: {
        notEmpty: { msg: 'Le nom ne peut pas être vide.' },
        notNull: { msg: 'Le nom est une propriété requise.'}
      }
    },
    family: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    watering: {
      type: DataTypes.STRING
    },
    ground: {
      type: DataTypes.STRING
    },
    exposure: {
      type: DataTypes.STRING
    },
    flowering: {
      type: DataTypes.STRING
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: { msg: 'Utilisez uniquement une URL valide pour l\'image.' },
        notNull: { msg: 'L\'image est une propriété requise.'}
      }
    },
  },
  {
    timestamps: true,
    createdAt: 'created',
    updatedAt: false
  })
}