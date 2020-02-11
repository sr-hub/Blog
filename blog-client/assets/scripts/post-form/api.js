const config = require('../config')
const store = require('../store')

const add = formData => {
  return $.ajax({
    url: config.apiUrl + '/posts',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

module.exports = {
  add
}
