const db = require('../models');

const User = db.User;

module.exports = async (req, res, next) => {
    const base64Credentials =  req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [email, password] = credentials.split(':');
    const user = await User.findOne({ where: { email, password } });
    if (!user) {
        return res.status(401).json({ message: 'Invalid Authentication Credentials' });
    }

    next();
};