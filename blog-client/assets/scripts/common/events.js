const api = require('./api')
const ui = require('./ui')
const navUi = require('../nav/ui.js')

const init = () => {
  navUi.loadNavPublic()
  onLoadUserHome()
}

const onLoadUserHome = () => {
  api
    .getUserHome()
    .then(data => ui.loadHome(data))
    .catch(() => ui.notification('unable to load home', 'failure'))
}

module.exports = {
  onLoadUserHome,
  init
}
