const Userdb = require('../model/model');

//create and save new user
exports.create = (res, req) => {
    //validate request
    if(!req.body){
        res.status(400).send({message: "Content can not be empty"})
        return;
    }

    //new user instance
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })


    //save user to database
    user
        .save(user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating a create opeation"
            });
        });
}

//retrive and return all usrers/retrive and return a single user
exports.find = (res, req) => {
    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
        .then(data => {
            if(!data){
                res.status(404).send({
                    message: "Not found user with id " + id
                })
            }else{
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({message: err.message || 'Error Occurrued while getting user info'})
        })
    }else{
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({message: err.message || 'Error Occurrued while getting user info'})
            })
    }
}

//retrive and return all usrers/retrive and return a single user
exports.findOne = (res, req) => {
    const id = req.params.id
    Userdb.findById(id)
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({message: err.message || 'Error Occurrued while getting user info'})
        })
}

//update a new identify user by user id
exports.update = (res, req) => {
    if(!req.body){
        return res
            .status(500)
            .send({message: 'Data to update must have a body'})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(400).send({
                    message: `Cannot Update user ${id}. Maybe user not found.`
                })
            }else{
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error Update user information"
            })
        })
}

//delete a user with specified user id
exports.delete = (res, req) => {
    const id = req.params.id

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({
                    message: `Cannot delete ${id}. Maybe id is wrong`
                })
            }else{
                res.send({
                    message: 'User was deleted successfuly'
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Error Delete user information'
            })
        })
}