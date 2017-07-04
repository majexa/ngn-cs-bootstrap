Ngn.Layout = new Class({
  Implements: [Options],

  initialize: function (rootElement, options) {
    this.setOptions(options);
    if (!this.options.defaultName) {
      for (var name in this.options.menu) {
        this.options.defaultName = name;
        break;
      }
    }
    this.view = this.options.defaultName;
    this.rootElement = rootElement;
    var hash = window.location.hash.replace(/#/, '');
    hash ? this.show(hash) : this.show(this.options.defaultName);
  },

  buildElements: function () {
    var menu = '';
    for (var name in this.options.menu) {
      menu += '<a class="menuItem ' + name + '" href="#' + name + '">' + //
        this.options.menu[name] + //
        '<span></span></a>';
    }
    var html = '\
<div class="cont">\
  <div class="submenu">' + menu + '</div>\
  ' + this.viewHtml() + '\
</div>\
';
    this.rootElement.set('html', '');
    Elements.from(html)[0].inject(this.rootElement);
    this.rootElement.getElements('.menuItem.' + this.view).addClass('active');
    this.initMenuActions();
  },

  initMenuActions: function () {
    var layout = this;
    this.rootElement.getElements('.menuItem').each(function (btn) {
      btn.addEvent('click', function (e) {
        e.preventDefault();
        var name = this.get('class').replace(/\s*menuItem\s*/, '').replace(/\s*active\s*/, '');
        var clickMethod = 'click' + Ngn.String.ucfirst(name);
        if (layout[clickMethod]) {
          layout[clickMethod]();
        } else {
          layout.show(name);
        }
      });
    });
  },

  show: function (view) {
    this.view = view;
    this.buildElements();
    this['show' + Ngn.String.ucfirst(view)]();
  },

  viewHtml: function () {
    var name = this.view + 'Html';
    if (!this[name]) throw new Error('Create ' + name + ' method');
    return this[name]();
  }

  // Static HTML injecting
  // --
  // defaultHtml: function () {
  //   return 'html code';
  // },

  // Dynamic part
  // --
  // showDefault: function () {
  //   this.view = 'workers';
  //   this.buildElements();
  //   // new Ngn.Grid;
  // }

});
