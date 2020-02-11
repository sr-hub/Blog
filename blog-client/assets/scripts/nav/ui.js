const navPublic = require('../templates/NavPublic.handlebars')
const navAuth = require('../templates/NavAuth.handlebars')
const navForm = require('../templates/SignUpForm.handlebars')
const changePasswordForm = require('../templates/ChangePasswordForm.handlebars')
const navSignInForm = require('../templates/SignInForm.handlebars')
const loadNavPublic = () => {
  const navPublicHtml = navPublic()
  $('#nav').html(navPublicHtml)
}

const loadNavAuth = () => {
  const navAuthHtml = navAuth()
  $('#nav').html(navAuthHtml)
}

const loadNavSignUpForm = () => {
  const navSignUpForm = navForm()
  $('#content').html(navSignUpForm)
}

const loadChangePasswordForm = () => {
  const changePasswordHtml = changePasswordForm()
  $('#content').html(changePasswordHtml)
}

const loadNavSignInForm = () => {
  const navSignInHtml = navSignInForm()
  $('#content').html(navSignInHtml)
}

module.exports = {
  loadNavSignUpForm,
  loadNavSignInForm,
  loadNavPublic,
  loadNavAuth,
  loadChangePasswordForm
}
