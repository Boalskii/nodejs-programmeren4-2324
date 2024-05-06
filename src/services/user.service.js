const database = require('../dao/inmem-db')

const userService = {
    create: (user, callback) => {
        database.add(user, (err, data) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, {
                    message: `User created with id ${data.id}.`,
                    data: data
                })
            }
        })
    },

    getAll: (callback) => {
        database.getAll((err, data) => {
            if (err) {
                callback(err, null)
            } else {
                console.log(data)
                callback(null, {
                    message: `Found ${data.length} users.`,
                    data: data
                })
            }
        })
    },

    getById: (id, callback) => {
        database.getById(id, (err, data) => {
            if (err) {
                callback(err, null)
            } else {
                console.log(data)
                callback(null, {
                    message: `Found 1 user with id ${data.id}.`,
                    data: data
                })
            }
        })
    },


    put: (user, userId, callback) => {

        database.getById(userId, (err1) => {
            if (err1) {
                callback(err1, null)
            } else {

                database.put(user, (err2, data) => {
                    if (err2) {
                        callback(err2, null)
                    } else {
                        callback(null, {
                            message: `Changed the data of user with id ${data.id}.`,
                            data: data
                        })
                    }
                })

            }
        })

    },


    delete: (id, callback) => {
        database.delete(id, (err, id) => {
            if (err) {
                callback(err, null)
            } else {
                console.log(id)
                callback(null, {
                    message: `Deleted user with id ${id}.`
                })
            }
        })
    }
}

module.exports = userService
