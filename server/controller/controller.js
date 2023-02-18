const Userdb = require('../model/model');

//create and save new user
exports.create = (res, req) => {
    //validate request
    if(!req.body){
        res.status(400).send({message: "Content can not be empty"})
        return;
    }

    //new user instance
    const user = new Userdb()
}

//retrive and return all usrers/retrive and return a single user
exports.find = (res, req) => {
    
}

//update a new identify user by user id
exports.update = (res, req) => {
    
}

//delete a user with specified user id
exports.delete = (res, req) => {
    
}