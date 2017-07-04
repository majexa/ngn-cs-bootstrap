Ngn.Hm.OperDialogNew = new Class({
  Extends: Ngn.Dialog.RequestForm.Tmpl,
  options: Object.merge(Ngn.Grid.defaultDialogOpts, {
    title: 'Создание оператора',
    // @requiresBefore src/formTmpl/operator.js
    formTmpl: Ngn.formTmpl.operator
  }),
  initialize: function (options) {
    this.parent(Ngn.Hm.BearerDialogOptions(options));
  }
});