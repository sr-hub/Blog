const config = require('../config')

const getUserHome = () => {
  return $.ajax({
    url: config.apiUrl + '/posts',
    method: 'GET'
  })
}

module.exports = {
  getUserHome
}
