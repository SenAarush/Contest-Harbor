const express = require("express")
const userController = require("../controllers/userController")
// const contestController = require('../controllers/contestController')
const auth = require('../middleware/Auth')
const router = express.Router()

router.post('/signup', userController.signup)
router.post('/login', userController.login)
// router.get('/auth', (req,res) => {
//     res.send("login?")
// })
router.get('/auth', auth, (req, res) => {
    res.json({message: "successfull auth"})
})
module.exports = router

