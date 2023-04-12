import moment from "moment";

const setLocalStorage = (responseObj) => {
  return new Promise((resolve, reject) => {
    const num = String(responseObj.data.expire.match("\\d"));
    const unit = String(responseObj.data.expire.match("\\D"));

    const expires = moment().add(num, unit);

    localStorage.setItem("token", responseObj.data.token);
    localStorage.setItem("expires", JSON.stringify(expires.valueOf()));
    const member_id = responseObj.data.member_id;
    const username = responseObj.data.username;
    const image = responseObj.data.image;

    resolve({ member_id, username, image });
  });
};

const logout = () => {
  return new Promise((resolve, reject) => {
    localStorage.removeItem("token");
    localStorage.removeItem("expires");
    resolve();
  });
};

const isLoggedIn = () => {
  const isExpireExist = moment().isBefore(getExpiration());
  const isTokenExist = !!localStorage.getItem("token");

  return isExpireExist && isTokenExist;
};

const isLoggedOut = () => {
  return !isLoggedIn();
};

const getExpiration = () => {
  const expiration = localStorage.getItem("expires");
  const expiresAt = JSON.parse(expiration);

  return moment(expiresAt);
};

const Auth = {
  setLocalStorage,
  logout,
  isLoggedIn,
  isLoggedOut,
  getExpiration,
};

export default Auth;
