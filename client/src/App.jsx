import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot, useSetRecoilState } from "recoil";
import Main from "./pages/Main";
import Management from "./pages/Management";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SingIn";
import NotFound from "./pages/NotFound";
import PostList from "./pages/PostList";
import Write from "./pages/WriteTemp";
import Temp from "./pages/Temp";
import MyPage from "./pages/MyPage";
import Test from "./pages/Test";
import Auth from "./services/auth";
// import Header from "./components/Header";
import Footer from "./components/Footer";
import PostContent from "./pages/PostContent";
import Header from "./components/header/Header";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginState from "./states/LoginState";
import { useEffect } from "react";
import PublicRestrictedRoute from "./components/PublicRestrictedRoute";

const App = () => {
  return (
    <RecoilRoot>
      <Router>
        <main className="flex min-h-screen flex-col bg-white bg-[url('./img/beams-basic-transparent.png')] text-slate-500 antialiased dark:bg-slate-900 dark:text-slate-400">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/temp" element={<Temp />} />
            <Route path="/board" element={<PostList />} />
            <Route path="/board/:id" element={<PostContent />} />
            <Route path="/test" element={<Test />} />
            <Route path="*" element={<NotFound />} />

            <Route
              path="/signup"
              element={
                <PublicRestrictedRoute>
                  <SignUp />
                </PublicRestrictedRoute>
              }
            />
            <Route
              path="/signin"
              element={
                <PublicRestrictedRoute>
                  <SignIn />
                </PublicRestrictedRoute>
              }
            />
            <Route
              path="/board/write"
              element={
                <ProtectedRoute>
                  <Write />
                </ProtectedRoute>
              }
            />
            <Route
              path="/management"
              element={
                <ProtectedRoute>
                  <Management />
                </ProtectedRoute>
              }
            />
            <Route
              path="/mypage"
              element={
                <ProtectedRoute>
                  <MyPage />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </main>
      </Router>
    </RecoilRoot>
  );
};

export default App;
