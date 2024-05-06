const database = require('../dao/inmem-db')
const logger = require('../util/logger')

const userService = {
    create: (user, callback) => {
        logger.info('create user', user)
        database.add(user, (err, data) => {
            if (err) {
                logger.info(
                    'error creating user: ',
                    err.message || 'unknown error'
                )
                callback(err, null)
            } else {
                logger.trace(`User created with id ${data.id}.`)
                callback(null, {
                    message: `User created with id ${data.id}.`,
                    data: data
                })
            }
        })
    },

    getAll: (callback) => {
        logger.info('getAll')
        database.getAll((err, data) => {
            if (err) {
                callback(err, null)
            } else {
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
