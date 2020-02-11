const postForm = require('../templates/PostForm.handlebars')
const commonEvents = require('../common/events')

const loadPostForm = () => {
  const postFormHtml = postForm()
  $('#content').html(postFormHtml)
}

const addPostSuccess = () => {
  $('form').trigger('reset')
  commonEvents.onLoadUserHome()
}

module.exports = {
  loadPostForm,
  addPostSuccess
}
