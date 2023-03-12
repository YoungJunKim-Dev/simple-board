const fs = require("fs");
const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");
const md5 = require("md5");

//const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

//app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync("database.json");
const conf = JSON.parse(data);
const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
});
//gravata - identicon 생성 (md5이용 hash)
const generateIdenticon = (email) => {
  const address = String(email).trim().toLowerCase();

  const hash = md5(address);

  return `https://www.gravatar.com/avatar/${hash}?s=100&d=identicon&r=x`;
};

app.get("/api/members", (req, res) => {
  const sql = "SELECT * FROM Members";
  connection.execute(sql, (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      res.send(rows);
    }
  });
});

app.post("/api/members", (req, res) => {
  const member = req.body;
  member.image = generateIdenticon(member.email);
  member.nationality = "France";
  member.joining_method = "N";

  const sql = `INSERT INTO Members(username, email, birthday, image, nationality, joining_method) VALUES("${member.username}","${member.email}","${member.birthday}","${member.image}","${member.nationality}","${member.joining_method}")`;
  connection.execute(sql, (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      console.log(rows);
    }
  });
  res.send("ok");
});

app.delete("/api/members", (req, res) => {
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
});

app.listen(port, () => console.log(`Server is running on ${port}port.`));

// [
//   {
//     id: 1,
//     image:
//       "https://gravatar.com/avatar/a19eaf33ba3ddb99857e706707c9a633?s=400&d=robohash&r=x",
//     name: "홍길동",
//     birth: "901203",
//     nationality: "ROK",
//   },
//   {
//     id: 2,
//     image:
//       "https://gravatar.com/avatar/f806908a823a4739472e9307f5ef15e6?s=400&d=robohash&r=x",
//     name: "임꺽정",
//     birth: "910823",
//     nationality: "USA",
//   },
//   {
//     id: 3,
//     image:
//       "https://gravatar.com/avatar/1928a113a207238e04db9ef0aefcb2de?s=400&d=robohash&r=x",
//     name: "강호동",
//     birth: "880213",
//     nationality: "UK",
//   },
// ]
