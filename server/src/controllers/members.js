const connection = require("../db/connect");

const isAdmin = (member_id) => {
  if (member_id === 0) {
    return true;
  } else {
    return false;
  }
};

const getAllMembers = (req, res) => {
  const { member_id } = req.user;
  if (!isAdmin(member_id)) {
    res.status(401).send("Unathorized");
  } else {
    const sql = "SELECT * FROM Members";
    connection.execute(sql, (err, rows, fields) => {
      if (err) {
        console.log(err);
      } else {
        res.send(rows);
      }
    });
  }
};

const updateMember = (req, res) => {
  res.send("updated Member");
};

const deleteMember = (req, res) => {
  const currentUser = req.user.member_id;
  const member_id = req.params.id;

  const sql = `DELETE FROM Members WHERE member_id = ${member_id}`;
  connection.execute(sql, (err, rows, fields) => {
    if (isAdmin(currentUser)) {
      if (err) {
        res
          .status(418)
          .send("If user has posts, delete all posts user wrote and retry!");
      } else {
        res.status(200).send("succedd");
      }
    } else {
      res.status(401).send("Unathorized");
    }
  });
};
const getMember = (req, res) => {
  const { member_id } = req.user;
  const targetId = req.params.id;
  const sql = `SELECT username, email, birthday, nationality FROM Members WHERE member_id="${targetId}"`;

  if (isAdmin(member_id) || String(member_id) === targetId) {
    connection.execute(sql, (err, rows, fields) => {
      if (err) {
        console.log(err);
      } else {
        res.send(rows[0]);
      }
    });
  } else {
    res.status(418).send("Something is wrong");
  }
};

module.exports = {
  getAllMembers,
  updateMember,
  deleteMember,
  getMember,
};
