module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'isadmin', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'isadmin');
  },
};
