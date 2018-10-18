module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Settings',
    [
      {
        location: 'smm',
        preRunDelay: 15540,
        postRunDelay: 7500,
        startLineTimeout: 10000,
        runTimeout: 7500,
        attractDelay: 120000,
        latitude: 44.94258,
        longitude: -93.0999668,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        location: 'cns-iu',
        preRunDelay: 15540,
        postRunDelay: 7500,
        startLineTimeout: 10000,
        runTimeout: 7500,
        attractDelay: 120000,
        latitude: 39.1726664,
        longitude: -86.5234313,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        location: 'cosi',
        preRunDelay: 15540,
        postRunDelay: 7500,
        startLineTimeout: 10000,
        runTimeout: 7500,
        attractDelay: 120000,
        latitude: 39.9598362,
        longitude: -83.0092084,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        location: 'dev',
        preRunDelay: 2000,
        runTimeout: 6000,
        postRunDelay: 2000,
        startLineTimeout: 500,
        attractDelay: 5000,
        latitude: 37.0902,
        longitude: -95.7129,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        location: 'demo',
        preRunDelay: 0,
        runTimeout: 6000,
        postRunDelay: 500,
        startLineTimeout: 500,
        attractDelay: 5000,
        latitude: 39.1726664,
        longitude: -86.5234313,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Settings', null, {}),
};
