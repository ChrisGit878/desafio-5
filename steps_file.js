// in this file you can append custom step methods to 'I' object

module.exports = function() {

  return actor({

    loginInLocal: async function () {
      this.amOnPage('/portalIntegral/index');
      this.see('PlexLocal');
    },

  });

}
