'use strict'
const authEvents = require('./auth/events')
const commonEvents = require('./common/events')
const navEvents = require('./nav/events')
const postFormEvents = require('./post-form/events')
const postViewEvents = require('./post-view/events')

$(() => {
  authEvents.addHandlers()
  commonEvents.init()
  navEvents.addHandlers()
  postFormEvents.addHandlers()
  postViewEvents.addHandlers()
})
