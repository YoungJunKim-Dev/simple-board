const express = require("express");
const passport = require("passport");
const router = express.Router();
const {
  getAllMembers,
  updateMember,
  deleteMember,
  getMember,
} = require("../controllers/members");

router.use(passport.authenticate("jwt", { session: false }));

router.route("/admin").get(getAllMembers).post().put(updateMember);

router.route("/admin/:id(\\d+)/").delete(deleteMember);

router.route("/:id(\\d+)/").get(getMember);

module.exports = router;
