const User = require("../models/userSchema");
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')

//_id will be part of the jwt payload 
const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET_KEY, { expiresIn: "2d" })
}

const signup = async (req, res) => {
    const { name, email, password } = req.body
    try {

        const user = await User.signup(name, email, password)

        // Creating a jwt token
        const token = createToken(user._id)

        // Storing the jwt token in the cookie
        res.cookie('access_token', token, {

            // gives the lifetime of the cookie after which it disappears, parameter in milliseconds
            // 1 second = 1000ms
            maxAge: 60 * 60 * 24 * 1000, // 1 day

            // when set to true, it makes the cookie unaccessible using document.cookie
            httpOnly: true
        })
        res.status(200).json({ email, token })

    } catch (err) {

        // error basically gives the error mentioned in the schema file
        res.status(400).json({ error: err.message })
    }
};

const login = async (req, res) => {

    const { email, password } = req.body
    try {

        const user = await User.login(email, password)

        // Creating a jwt token
        const token = createToken(user._id)
        // Storing jwt token in cookie
        res.cookie('access_token', token, {
            maxAge: 60 * 60 * 24 * 1000,
            httpOnly: true,

        })

        res.status(200).json({ email, token })

    } catch (error) {

        // error basically gives the error mentioned in the schema file
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    signup,
    login,
}
