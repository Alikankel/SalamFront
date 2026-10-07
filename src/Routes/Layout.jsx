import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div className="h-20 w-full bg-amber-300">
      <h2>Lay out</h2>
      <Outlet />
    </div>
  );
}

export default Layout