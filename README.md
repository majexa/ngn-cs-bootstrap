# Ngn.CS Bootstrap - Developing Guide

## Setup

This project is used as start point to develop __Ngn.CS__ based app.

Install node modules `npm install --dev`

### nodejs required
### php5.6 required

    mkdir /home/user/ngn-env
    cd /home/user/ngn-env
    git clone https://github.com/mootools/mootools-core
    git clone https://github.com/mootools/mootools-more
    git clone https://github.com/majexa/majexa/ngn.git
    git clone https://github.com/majexa/majexa/ngn-cs.git
    git clone https://github.com/majexa/majexa/run.git


Create `.env` file with similar configuration

    NGN_ENV_FOLDER = /home/user/ngn-env
    
Run `gulp` command

Or build with gulp command `...`

## Get Started

Create `/index.html` file:

```html
<html>
<head>
  <script src="m/js/main.js"></script>
</head>
<body>
<script>
  new Ngn.YourApp();
</script>
</body>
</html>
```

Create `/src/js/Ngn.YourApp.js` file:

```js
Ngn.YourApp = new Class({
  Extends: Ngn.Dialog,
  options: {
    message: 'Dialog Text'
  }
});
```

Run `gulp` to start develop or `gulp build` to build app bundle.
