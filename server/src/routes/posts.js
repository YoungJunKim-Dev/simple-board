const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
  getPost,
} = require("../controllers/posts");
const passport = require("passport");

router.route("/").get(getAllPosts);
router.route("/:id").get(getPost);

router.use(passport.authenticate("jwt", { session: false }));

router.route("/").post(createPost).put(updatePost).delete(deletePost);

module.exports = router;
