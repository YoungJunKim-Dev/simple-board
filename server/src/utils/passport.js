const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const pathToKey = path.join(__dirname, "..", "cryptography", "id_rsa_priv.pem");
const PRIV_KEY = fs.readFileSync(pathToKey, "utf8");

//bcrypt - 비밀번호 암호화
const makeHash = async (password) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);

  return hash;
};

const validPassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

const issueJWT = (id) => {
  const expiresIn = "1d";

  const payload = {
    iss: "YJK",
    sub: id,
    iat: Date.now(),
  };

  const signedToken = jwt.sign(payload, PRIV_KEY, {
    expiresIn: expiresIn,
    algorithm: "RS256",
  });

  return {
    token: "Bearer " + signedToken,
    expires: expiresIn,
  };
};

module.exports = {
  validPassword,
  issueJWT,
  makeHash,
};
