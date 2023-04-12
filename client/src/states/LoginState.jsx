import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const LoginState = atom({
  key: "LoginState",
  default: { isLoggedIn: false, member_id: "", username: "", image: "" },
  effects_UNSTABLE: [persistAtom],
});

export default LoginState;
