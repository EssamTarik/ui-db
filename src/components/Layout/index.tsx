import { Outlet } from "react-router";
import TopBar from "../TopBar"

const Layout = () => {
  return (
    <>
      <TopBar />
      <main>
        {<Outlet />}
      </main>
    </>
  )
};

export default Layout;