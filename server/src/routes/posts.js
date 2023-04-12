const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
  getPost,
  getEditPost,
  getMyPosts,
  updatePostViews,
} = require("../controllers/posts");
const passport = require("passport");

router.route("/").get(getAllPosts);
router.route("/:id(\\d+)/").get(getPost);
router.route("/views/:id(\\d+)/").put(updatePostViews);

//이하 인증 필요
router.use(passport.authenticate("jwt", { session: false }));

router.route("/").post(createPost).put(updatePost);
router.route("/:id(\\d+)/").delete(deletePost);
router.route("/user/:id(\\d+)/").get(getMyPosts);
router.route("/editpost/:id(\\d+)/").get(getEditPost);

module.exports = router;
