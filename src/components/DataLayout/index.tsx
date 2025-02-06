import { Outlet } from "react-router";
import DataControlsBar from "../DataControlsBar";
import Layout from "../Layout";

const DataLayout = () => (
  <Layout>
    <DataControlsBar />
    <Outlet />
  </Layout>
);

export default DataLayout;