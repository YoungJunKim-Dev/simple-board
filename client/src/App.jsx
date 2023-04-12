import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot, useSetRecoilState } from "recoil";
import Main from "./pages/Main";
import Management from "./pages/Management";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SingIn";
import NotFound from "./pages/NotFound";
import PostList from "./pages/PostList";
import Write from "./pages/Write";
import MyPage from "./pages/MyPage";
import EditPost from "./pages/EditPost";
import Auth from "./services/auth";
import Footer from "./components/Footer";
import PostContent from "./pages/PostContent";
import UserPage from "./pages/UserPage";
import Header from "./components/header/Header";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import LoginState from "./states/LoginState";
import { useEffect } from "react";
import PublicRestrictedRoute from "./components/routes/PublicRestrictedRoute";
import AdminRoute from "./components/routes/AdminRoute";

const App = () => {
  return (
    <RecoilRoot>
      <Router>
        <main className="flex min-h-screen flex-col bg-white bg-[url('./img/beams-basic-transparent.png')] text-slate-500 antialiased selection:bg-sky-400 selection:text-sky-50 dark:bg-slate-900 dark:text-slate-400 dark:selection:bg-sky-300 dark:selection:text-sky-900">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/board" element={<PostList />} />
            <Route path="/board/:id" element={<PostContent />} />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/userpage/:id"
              element={
                <AdminRoute>
                  <UserPage />
                </AdminRoute>
              }
            />
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
                <AdminRoute>
                  <Management />
                </AdminRoute>
              }
            />
            <Route
              path="/editpost/:id"
              element={
                <ProtectedRoute>
                  <EditPost />
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
