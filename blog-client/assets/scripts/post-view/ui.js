const postView = require('../templates/PostView.handlebars')
const store = require('../store')

const loadPostView = data => {
  // if the user is signed in, check if signed in user matches the post's owner
  if (store.user) {
    const userId = store.user._id
    const postId = data.post.owner._id
    const editable = userId == postId ? true : false
    data.post.editable = editable || false

    // for every comment on the post
    data.post.comments.map(comment => {
      // grab the author
      const commentAuthorId = comment.author
      // compare it with the user id to find out if owner
      const commentEditable = userId == commentAuthorId ? true : false
      // create a new key called 'editable' on the comment object
      comment.editable = commentEditable
    })

    // also create a new key 'signedIn' which tells us we are an authorized user
    data.post.signedIn = true

    // if the user is not signed in - automatically set post and comments editable to false
  } else {
    data.post.editable = false
    data.post.comments.map(comment => {
      comment.editable = false
    })
    data.post.signedIn = false
  }

  const postViewHtml = postView({ data })
  $('#content').html(postViewHtml)
}

module.exports = {
  loadPostView
}
