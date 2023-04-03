const {Router} = require("express");
const { getregister,saveregister } = require("./controller");
const router = Router()


router.get('/' , getregister)
router.post('/save' , saveregister)

module.exports = router;