import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import FooterCom from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import VerifyEmail from "./pages/Verify";
import ToasterProvider from "./components/Toast";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <ToasterProvider />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/faqs" element={<Home />} />
        <Route path="/reviews" element={<Home />} />
        <Route path="/seminar-opportunities" element={<Home />} />
        <Route path="/past-drives" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>

        <Route
          path="/verify-email/:verificationToken"
          element={<VerifyEmail />}
        />
      </Routes>
      <div className="m-auto w-full sm:w-11/12 px-4">
        <FooterCom />
      </div>
    </BrowserRouter>
  );
};

export default App;
