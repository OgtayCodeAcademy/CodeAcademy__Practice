import { Outlet } from "react-router-dom";
import AdminNavbar from "../../../Components/AdminNavbar";

export default function AdminRoot() {
  return (
    <>
      <AdminNavbar></AdminNavbar>
      <Outlet></Outlet>
    </>
  );
}
