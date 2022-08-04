//  todo : This codes will be changed like previous projects with MVC architecture 

const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.render("index", {title: " home page"})
})

module.exports = router
