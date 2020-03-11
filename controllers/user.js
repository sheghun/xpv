const userController = {};
const usersJson = require('../_data/users')
const paystack = require('paystack')(process.env.PAYSTACK_KEY)
const faker = require('faker');

/**
 *
 * @param {require('express').Request} req
 * @param {require('express').Response} res
 * @returns {Promise<*>}
 */
userController.getUsers = async (req, res) => {
    return res.status(200).json({
        success: true,
        data: [
            ...usersJson
        ]
    })
}

/**
 *
 * @param {require('express').Request} req
 * @param {require('express').Response} res
 * @returns {Promise<void>}
 */

userController.pay = async (req, res, next) => {
    try {
        const trans = await paystack.transaction.initialize({
            amount: 300 * 100,
            name: faker.name.firstName(),
            email: faker.internet.email(),
            reference: faker.random.alphaNumeric() // Generate a random reference
        })
       res.redirect(trans.data.authorization_url)
    } catch (err) {
        next(err)
    }
}

module.exports = userController;
