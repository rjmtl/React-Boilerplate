import Login from "Views/Authentication/Login";
import SignUp from "Views/Authentication/SignUp";
import ForgotPassword from "Views/Authentication/ForgotPassword";

export const AUTH_ROUTES = [
  {
    path: "/login",
    component: Login,
    title: "Login",
  },
  {
    path: "/signup",
    component: SignUp,
    title: "Signup",
  },
  {
    path: "/forgot-password",
    component: ForgotPassword,
    title: "Forgot Password",
  },
];
