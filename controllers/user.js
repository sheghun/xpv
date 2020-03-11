const userController = {};
const usersJson = require('../_data/users')


userController.getUsers = async (req, res) => {
    return res.status(200).json({
        success: true,
        data: [
            ...usersJson
        ]
    })
}

module.exports = userController;
