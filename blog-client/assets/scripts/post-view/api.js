const config = require('../config')
const store = require('../store')

const getPost = postID => {
  return $.ajax({
    url: config.apiUrl + '/posts/' + postID,
    method: 'GET'
  })
}

const addComment = formData => {
  return $.ajax({
    url: config.apiUrl + '/comments',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const updatePost = (id, formData) => {
  return $.ajax({
    url: config.apiUrl + '/posts/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const deletePost = id => {
  return $.ajax({
    url: config.apiUrl + '/posts/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const updateComment = (postId, commentId, formData) => {
  return $.ajax({
    url: config.apiUrl + '/comments/' + postId + '/' + commentId,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const deleteComment = (postId, commentId) => {
  return $.ajax({
    url: config.apiUrl + '/comments/' + postId + '/' + commentId,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  deletePost,
  getPost,
  addComment,
  updatePost,
  updateComment,
  deleteComment
}
