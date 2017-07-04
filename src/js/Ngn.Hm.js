Ngn.Hm = function () {
  if (!Ngn.Storage.get('hmcc.token')) {
    new Ngn.Hm.AuthDialog();
  }
  else {
    new Ngn.Hm.Layout(document.getElement('body'));
  }
};

Ngn.Hm.config = {
  host: 'localhost',
  port: 8000
};
Ngn.Hm.config.apiUrl = function () {
  return 'http://' + Ngn.Hm.config.host + ':' + Ngn.Hm.config.port + '/api/v1';
};
