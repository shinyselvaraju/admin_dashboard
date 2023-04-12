const {Router} = require("express");
const { getregister,saveregister, getUsers, deleteAll } = require("./controller");
const router = Router()


router.get('/' , getregister)
router.post('/save' , saveregister)
router.get('/users' , getUsers)
router.get('/delete' , deleteAll)

module.exports = router;