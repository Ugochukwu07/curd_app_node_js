const axios = require('axios')
const APP_URL = process.env.APP_URL

exports.homeRoutes = ( req, res ) => {
    //Make a get request to /api/users
    axios.get(`${APP_URL}/api/`)
        .then(function(response){
            res.render('index', {users: response.data})
        })
        .catch(err => {
            res.send(err.message)
        })
}

exports.add_user = (req, res) => {
    res.render('add_user')
}

exports.update_user = (req, res) => {
    res.render('update_user')
}