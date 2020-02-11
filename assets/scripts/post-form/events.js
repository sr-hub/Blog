const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
const commonUi = require('../common/ui')

const onClickPostForm = () => {
  ui.loadPostForm()
}

const onCreatePost = event => {
  event.preventDefault()
  const form = event.target
  const createPostData = getFormFields(form)
  api
    .add(createPostData)
    .then(ui.addPostSuccess)
    .catch(() => commonUi.notification('Unable to update comment', 'failure'))
}

const addHandlers = event => {
  $('#nav').on('click', '#new-post', onClickPostForm)
  $('#content').on('submit', '#new-post-form', onCreatePost)
}

module.exports = {
  addHandlers
}
