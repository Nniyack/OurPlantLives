const { Sequelize, DataTypes } = require('sequelize')
const PokemonModel = require('../models/Pokemon.js')
const UserModel = require('../models/User.js')
const PlantModel = require('../models/Plant.js')
const FamilyModel = require('../models/Family.js')
const pokemons = require('./mock-pokemon')

const sequelize = new Sequelize('ourplantlive', 'root', 'root', {
  host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
      timezone:'Etc/GMT-2',
  },
    logging: true
})

const Pokemon = PokemonModel(sequelize, DataTypes)
const User = UserModel(sequelize, DataTypes)
const Plant = PlantModel(sequelize, DataTypes)
const Family = FamilyModel(sequelize, DataTypes)

const initDb = () => {
  return sequelize.sync({ force: true }).then(_ => {
    pokemons.map(pokemon => {
      Pokemon.create({
        name: pokemon.name,
        hp: pokemon.hp,
        cp: pokemon.cp,
        picture: pokemon.picture,
        types: pokemon.types.join()
      }).then(pokemon=>console.log(pokemon.toJSON()))
    })
    console.log('La base de donnée a bien été initialisée')
  })
}

module.exports = {
  initDb, Pokemon, User, Plant, Family
}