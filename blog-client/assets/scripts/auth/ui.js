'use strict'
const store = require('../store')
const navUi = require('../nav/ui.js')
const commonEvents = require('../common/events.js')
const commonUi = require('../common/ui')

const onSignUpSuccess = () => {
  $('form').trigger('reset')
  commonUi.notification('Successfully created account', 'success')
}

const onSignUpFailure = () => {
  $('form').trigger('reset')
  commonUi.notification('Error creating account', 'failure')
}

const onSignInSuccess = responseData => {
  $('form').trigger('reset')
  store.user = responseData.user

  navUi.loadNavAuth()
  commonEvents.onLoadUserHome()
  window.setTimeout(() => {
    commonUi.notification('Successfully signed in', 'success')
  }, 200)
}

const onSignInFailure = () => {
  $('form').trigger('reset')
  commonUi.notification('Error signing in', 'failure')
}

const onChangePasswordSuccess = () => {
  $('form').trigger('reset')
  commonEvents.onLoadUserHome()
  window.setTimeout(() => {
    commonUi.notification('Successfully changed password', 'success')
  }, 200)
}

const onChangePasswordFailure = () => {
  $('form').trigger('reset')
  commonUi.notification('Error changing password', 'failure')
}

const onSignoutSuccess = responseData => {
  // clear the store
  store.user = null
  // load the initial state again notify the user
  commonEvents.init()
  window.setTimeout(() => {
    commonUi.notification('Successfully signed out', 'success')
  }, 200)
}

const onSignoutFailure = () => {
  onFailure('something goofed')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignoutSuccess,
  onSignoutFailure
}
