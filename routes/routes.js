//  todo : This codes will be changed like previous projects with MVC architecture 

const express = require('express')
const router = express.Router

router.get("/users", (req, res) => {
    res.send('Hello to All users')
})

module.exports = router