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
  const member_id = req.query.member_id;
  // const sql = "";
  console.log(member_id);
  const sql = `DELETE FROM Members WHERE member_id = ${member_id}`;
  connection.execute(sql, (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      console.log(rows);
    }
  });
  res.send("Succedd");
};
const getMember = (req, res) => {
  //const { member_id } = req.user;
  //const sql = `SELECT * FROM Members WHERE member_id="${member_id}"`;

  // connection.execute(sql, (err, rows, fields) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     res.send(rows[0]);
  //   }
  // });
  res.send(req.user);
};

module.exports = {
  getAllMembers,
  // createMember,
  updateMember,
  deleteMember,
  getMember,
};
