module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Settings',
    [
      {
        location: 'smm',
        preRaceDelay: 15540,
        postRaceDelay: 7500,
        startLineTimeout: 10000,
        raceTimeout: 7500,
        attractDelay: 120000,
        latitude: 44.94258,
        longitude: -93.0999668,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        location: 'cns-iu',
        preRaceDelay: 15540,
        postRaceDelay: 7500,
        startLineTimeout: 10000,
        raceTimeout: 7500,
        attractDelay: 120000,
        latitude: 39.1726664,
        longitude: -86.5234313,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        location: 'cosi',
        preRaceDelay: 15540,
        postRaceDelay: 7500,
        startLineTimeout: 10000,
        raceTimeout: 7500,
        attractDelay: 120000,
        latitude: 39.9598362,
        longitude: -83.0092084,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        location: 'dev',
        preRaceDelay: 500,
        postRaceDelay: 500,
        startLineTimeout: 500,
        raceTimeout: 500,
        attractDelay: 5000,
        latitude: 37.0902,
        longitude: -95.7129,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Settings', null, {}),
};
