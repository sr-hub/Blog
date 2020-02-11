const home = require('../templates/Home.handlebars')
const toast = require('../templates/Toast.handlebars')

// TODO: when GET to /posts is working, update this function to accept data from the api and throw it into handlebars
const loadHome = data => {
  const homeHtml = home({ posts: data.posts })
  $('#content').html(homeHtml)
}

const notification = (text, type = null) => {
  // TODO: refactor opportunity, figure out the correct pattern for this
  const opts = {
    text: text,
    type: type == 'success' ? '🙂' : '😢'
  }
  const toastHtml = toast({ opts })
  $('#content').append(toastHtml)
  $('#toast').toast('show')
  window.setTimeout(() => {
    $('#toast').remove()
  }, 1500)
}

module.exports = {
  loadHome,
  notification
}
