const connection = require("../db/connect");

// /
const getAllPosts = (req, res) => {
  const sql =
    "SELECT  post_id, title, image, username, A.created_date, views FROM Posts A LEFT JOIN Members B ON A.member_id = B.member_id ORDER BY A.created_date DESC";
  connection.query(sql, (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      res.send(rows);
    }
  });
};

const createPost = (req, res) => {
  const { title, content } = req.body;
  const { member_id } = req.user;
  const sql = `INSERT INTO Posts(title, content, member_id) VALUES("${title}","${content}","${member_id}")`;
  connection.query(sql, (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      res.send("success");
    }
  });
};

const updatePost = (req, res) => {};

const deletePost = (req, res) => {};

// /:id
const getPost = (req, res) => {
  const post_id = req.params.id;
  const sql = `SELECT * FROM Posts WHERE post_id = ${post_id}`;
  connection.query(sql, (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      res.send(rows);
    }
  });
};

module.exports = {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
  getPost,
};
