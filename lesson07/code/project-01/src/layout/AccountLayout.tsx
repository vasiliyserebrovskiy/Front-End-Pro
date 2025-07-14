import { NavLink, Outlet } from "react-router-dom";
import { ROUTES } from "../constants/routes";

export default function AccountLayout() {
  return (
    <>
      <nav>
        <NavLink to={ROUTES.ACCOUNT_SETTINGS}>Account Settings</NavLink>
        <NavLink to={ROUTES.ACCOUNT_INFO}>Personal Information</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
