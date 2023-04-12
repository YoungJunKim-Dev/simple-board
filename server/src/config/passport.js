const fs = require("fs");
const path = require("path");
const connection = require("../db/connect");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const pathToKey = path.join(__dirname, "..", "cryptography", "id_rsa_pub.pem");
const PUB_KEY = fs.readFileSync(pathToKey, "utf8");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUB_KEY,
  algorithms: ["RS256"],
};

const strategy = new JwtStrategy(options, (payload, done) => {
  const sql = `SELECT * FROM Members WHERE member_id = "${payload.sub}"`;
  //jwt token의 payload에 들어있는 member_id를 통해 존재하는지 check
  connection.execute(sql, (err, rows, fields) => {
    if (err) {
      console.log("query err" + err);
      return done(err, null);
    } else {
      if (rows[0] !== undefined) {
        //console.log("Authorization succeded!");

        return done(null, rows[0]);
      } else {
        console.log("passport : undefined err");

        return done(null, false);
      }
    }
  });
});

module.exports = strategy;
