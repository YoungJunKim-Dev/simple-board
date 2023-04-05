const connection = require("../db/connect");
const md5 = require("md5");
const passport = require("passport");
const { Strategy: LocalStrategy } = require("passport-local");
const utils = require("../utils/passport");

//gravata - identicon 생성 (md5이용 hash)
const generateIdenticon = (email) => {
  const address = String(email).trim().toLowerCase();

  const hash = md5(address);

  return `https://www.gravatar.com/avatar/${hash}?s=100&d=identicon&r=x`;
};

const postSignUp = async (req, res) => {
  const { username, email, birthday, password } = req.body;
  const image = generateIdenticon(email);
  const nationality = "France";
  const joining_method = "N";

  //db저장 전 비밀번호 암호화
  const hash = await utils.makeHash(password);

  const sql = `INSERT INTO Members(username, email, birthday, image, nationality, joining_method, password) VALUES("${username}","${email}","${birthday}","${image}","${nationality}","${joining_method}", "${hash}")`;

  connection.execute(sql, (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      console.log(rows);
      console.log(fields);
      //signup도 토큰 발행? 해야하나?
      res.send("SignUp succeded");
    }
  });
};

const postSignIn = (req, res) => {
  const { email, password } = req.body;
  const sql = `SELECT * FROM Members WHERE email = "${email}"`;
  //email이 존재하는지 check
  connection.execute(sql, async (err, rows, fields) => {
    const user = rows[0];
    if (err) {
      console.log(err);
    } else {
      if (user !== undefined) {
        //email의 password와 입력한 password가 일치하는지 check
        const isValid = await utils.validPassword(password, user.password);

        if (isValid) {
          const jwt = utils.issueJWT(user.member_id);
          console.log("password is right");
          res.status(200).json({
            success: true,
            token: jwt.token,
            expire: jwt.expires,
            member_id: user.member_id,
            username: user.username,
            image: user.image,
          });
        } else {
          res.status(401).json({
            success: false,
            msg: "Bro, you entered the wrong password!",
          });
        }
      } else {
        res
          .status(401)
          .json({ success: false, msg: "Sorry, no one has that email" });
      }
    }
  });

  //위 과정을 passport로?
  //passport authenticate 호출
  //  passport.authenticate("jwt", {
  //   successRedirect: "/",
  //   failureRedirect: "/signin",
  // });

  // //token 생성
  // const token = "";
  // //token 발급
  // res.setHeader("Authorization", "JWT JSON_WEB_TOKEN_STRING.....");
  // res.send();
};

module.exports = { postSignIn, postSignUp };
