const {Router} = require('express')
const router = Router()


router.get('/', (req, res) => {
    res.render('downloads.ejs')
})

module.exports = router

