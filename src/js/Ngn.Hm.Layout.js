Ngn.Hm.Layout = new Class({
  Extends: Ngn.Layout,

  initialize: function(rootElement) {
    this.parent(rootElement, {
      menu: {
        operators: 'Операторы',
        logout: 'Выход'
      }
    });
  },

  clickLogout: function() {
    Ngn.Storage.remove('hmcc.token');
    window.location.reload(true);
  },

  operatorsHtml: function () {
    return '<div id="table"></div>';
  },

  showOperators: function () {
    new Ngn.Hm.OperGrid().reload();
  }

});



