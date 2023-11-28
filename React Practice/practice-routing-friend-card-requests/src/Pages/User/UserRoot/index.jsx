import { Outlet } from "react-router-dom"
import UserNavbar from "../../../Components/UserNavbar"

export default function UserRoot() {
  return (
    <>
        <UserNavbar></UserNavbar>
        <Outlet></Outlet>
    </>
  )
}
