Ngn.Hm.AuthDialog = new Class({
  Extends: Ngn.Dialog.RequestForm.Tmpl,
  options: {
    url: Ngn.Hm.config.apiUrl() + '/master/authorize',
    //
    titleClose: false,
    cancel: false,
    okText: 'Войти',
    // @requiresBefore src/formTmpl/auth.js
    formTmpl: Ngn.formTmpl.auth,
    title: 'Авторизуйтесь',
    width: 200,
    onSubmitSuccess: function (r) {
      Ngn.Storage.set('hmcc.token', r.token);
    },
    onOkClose: function() {
      window.location.reload(true);
    }
  }
});