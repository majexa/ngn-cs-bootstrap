Ngn.Hm.OperGrid = new Class({
  Extends: Ngn.Grid,

  initialize: function () {
    var requestOptions = {
      headers: {
        'Authorization': 'Bearer ' + Ngn.Storage.get('hmcc.token')
      }
    };
    this.parent({
      requestOptions: requestOptions,
      basePath: Ngn.Hm.config.apiUrl(),
      restBasePath: '',
      basicBasePath: 'operator',
      filterPath: new Ngn.FilterPath(0),
      formatters: {
        dt: Ngn.Hm.DateFormatter
      },
      menu: [{
        title: 'Создать',
        cls: 'add',
        action: function (grid) {
          new Ngn.Hm.OperDialogNew({
            url: Ngn.Hm.config.apiUrl() + '/operator',
            requestOptions: requestOptions,
            formRequestOptions: requestOptions,
            onOkClose: function () {
              grid.reload();
            }
          });
        }
      }],
      tools: {
        delete: 'Удалить',
        edit: 'Редактировать'
      },
      rowFlashColor: '#ededed',
      toolActions: {
        delete: function (row, btn) {
        },
        edit: function (row, btn) {
          new Ngn.Hm.OperDialog({
            url: Ngn.Hm.config.apiUrl() + '/operator/' + row.id,
            requestOptions: requestOptions,
            formRequestOptions: requestOptions,
            onOkClose: function () {
              this.reload(row.id);
            }.bind(this)
          });
        }
      }
    });
  },
  getDeleteLink: function (id) {
    return this.getLink(true) + '/' + id + '/delete';
  }
});

Ngn.Grid.defaultDialogOpts = {
  width: 250
};
