const router = require("express").Router();
const { postSignUp, postSignIn } = require("../controllers/auth");

router.route("/signup").get().post(postSignUp).put().delete();
router.route("/signin").get().post(postSignIn).put().delete();

module.exports = router;
