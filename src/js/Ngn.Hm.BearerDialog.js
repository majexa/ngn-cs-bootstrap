Ngn.Hm.BearerDialogOptions = function(options) {
  var requestOptions = {
    headers: {
      'Authorization': 'Bearer ' + Ngn.Storage.get('hmcc.token')
    }
  };
  return Object.merge({
    requestOptions: requestOptions,
    formRequestOptions: requestOptions
  }, options);
};
