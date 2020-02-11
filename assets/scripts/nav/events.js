// const api = require('./api')
const commonEvents = require('../common/events.js')
const ui = require('./ui')

const addHandlers = event => {
  $('#nav').on('click', '#back-button', commonEvents.onLoadUserHome)
  $('#nav').on('click', '#to-signup', ui.loadNavSignUpForm)
  $('#nav').on('click', '#to-signin', ui.loadNavSignInForm)
  $('#nav').on('click', '#to-change-password', ui.loadChangePasswordForm)
}

module.exports = {
  addHandlers
}
