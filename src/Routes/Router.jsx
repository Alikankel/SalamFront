import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Pages/Home";

const router = [
  {
    path: "/SalamFront/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      //   { path: "home", element: <Home /> },
      //   { path: "Employees", element: <EmployeeFRM /> },
      //   { path: "about", element: <AboutUsPage /> },
      //   { path: "contact", element: <ContactUs /> },
      //   { path: "login", element: <LoginPage /> },
      //   { path: "register", element: <RegisterPage /> },
      //   { path: "dashboard", element: <Dashboared /> },
      //   { path: "employeeAc", element: <EployeeAcording /> },
      //   { path: "ReceiptVoucher", element: <ReceiptVoucher /> },
      //   { path: "MonyBoxs", element: <MonyBoxs /> },
      { path: "*", element: <h2>Not Found</h2> },
    ],
  },
];
const routes = createBrowserRouter(router);

export { router };

export default routes;