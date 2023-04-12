const connection = require("../db/connect");

const isAdmin = (member_id) => {
  if (member_id === 0) {
    return true;
  } else {
    return false;
  }
};
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

const updatePost = (req, res) => {
  const { post_id, title, content } = req.body;
  const sql = `UPDATE Posts SET title = "${title}", content = "${content}" WHERE post_id=${post_id}`;
  connection.query(sql, (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Update Succeded");
    }
  });
};
const getEditPost = (req, res) => {
  const { member_id } = req.user;
  const post_id = req.params.id;
  const sql = `SELECT title, content, member_id FROM Posts WHERE post_id = ${post_id}`;
  connection.query(sql, (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      if (member_id === rows[0].member_id || member_id === 0) {
        res.send(rows[0]);
      } else {
        res.status(401).send("Unathorized");
      }
    }
  });
};

// /:id get
const getPost = (req, res) => {
  const post_id = req.params.id;
  const sql = `SELECT post_id, content, title, image, username, A.created_date, views FROM Posts A LEFT JOIN Members B ON A.member_id = B.member_id WHERE post_id = ${post_id}`;
  connection.query(sql, (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      res.send(rows);
    }
  });
};

// /:id delete
const deletePost = (req, res) => {
  const post_id = req.params.id;
  const sql = `DELETE FROM Posts WHERE post_id = ${post_id}`;
  connection.query(sql, (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      res.send("deleted");
    }
  });
};

// /mypage
const getMyPosts = (req, res) => {
  const { member_id } = req.user;
  const targetId = req.params.id;
  const sql = `SELECT post_id, title, created_date, views FROM Posts WHERE member_id = ${targetId} ORDER BY created_date desc`;

  if (isAdmin(member_id) || String(member_id) === targetId) {
    connection.query(sql, (err, rows, fields) => {
      if (err) {
        console.log(err);
      } else {
        res.send(rows);
      }
    });
  } else {
    res.status(401).send("Unathorized");
  }
};

const updatePostViews = (req, res) => {
  const post_id = req.params.id;
  const sql = `UPDATE Posts SET views = views + 1 WHERE post_id = ${post_id}`;
  connection.query(sql, (err, rows, fields) => {
    if (err) {
      console.log(err);
      res.status(418).send("db error");
    } else {
      res.status(200).send(post_id + " views + 1");
    }
  });
};

module.exports = {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
  getPost,
  getEditPost,
  getMyPosts,
  updatePostViews,
};
