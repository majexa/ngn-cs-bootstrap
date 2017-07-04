Ngn.Hm.OperDialog = new Class({
  Extends: Ngn.Dialog.RequestForm.Json,
  options: Object.merge(Ngn.Grid.defaultDialogOpts, {
    title: 'Редактирование',
    // @requiresBefore src/formTmpl/operator.js
    formTmpl: Ngn.formTmpl.operator
  }),
  initialize: function (options) {
    this.parent(Ngn.Hm.BearerDialogOptions(options));
  }
});