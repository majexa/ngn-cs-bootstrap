Ngn.Hm.DateFormatter = function (v) {
  if (!v) {
    return '—';
  }
  var days = Locale.get('Date.days_abbr');
  var d = Date.parse(v);
  return days[d.getDay()] + '. ' + d.format('%d.%m.%Y %H:%M:%S');
};