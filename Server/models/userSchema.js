const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});


userSchema.statics.signup = async function (name, email, password) {
    //cannot use arrow function here
    try {
        //validation check
        if (!email || !password) {
            throw Error("All fields must be filled")
        }

        if (!validator.isEmail(email)) {
            throw Error("Email not valid")
        }

        if (!validator.isStrongPassword(password)) {
            throw Error("Password is not strong enough")
        }

        // Check if user is already in use
        const exists = await this.findOne({ email })

        if (exists) {
            // this is the error thrown
            throw new Error("Email already in use")
        }
        // parameter is the number of rounds
        const salt = await bcrypt.genSalt(12)

        // Requires two parameters plain password and the salt
        const hashedPassword = await bcrypt.hash(password, salt)

        //create new user with the hashed password
        const user = await this.create({ name, email, password: hashedPassword });
        return user

    } catch (error) {
        throw new Error(error.message)
    }
}

userSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error("All fields must be filled")
    }

    const userExists = await this.findOne({ email })

    if (!userExists) {
        throw Error("Invalid credentials")
    }

    const matchPassword = await bcrypt.compare(password, userExists.password)
    if (!matchPassword) {
        throw Error("Invalid credentials")
    }

    return userExists
}


const User = mongoose.model('registeredUser', userSchema)
module.exports = User;

