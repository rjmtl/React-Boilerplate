import Dashbord from "Views/Authenticated/Dashboard";

export const PRIVATE_ROUTES = [
  {
    path: "/dashboard",
    component: Dashbord,
    title: "Dashboard",
  },
  {
    path: "/wishlist",
    component: () => "Your wishlist here",
    title: "Dashboard",
  },
];
