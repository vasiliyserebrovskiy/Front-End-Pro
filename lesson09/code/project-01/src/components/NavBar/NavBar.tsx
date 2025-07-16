import { ROUTES } from "../../constants/routes";
import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useCounter } from "../../hooks/useCounter";

export const NavBar = () => {
  const classSelector = ({ isActive }: { isActive: boolean }) => {
    return isActive ? style.navLinkActive : style.navLink;
  };
  const { user, setIsAuthorized, isAuthorized } = useCurrentUser();
  const { counter } = useCounter();

  function handleLogout() {
    setIsAuthorized(false);
  }

  return (
    <>
      <nav className="flex bg-pink-200 justify-center items-center gap-4 min-h-14 flex-wrap p-6">
        <NavLink to="/" className={classSelector}>
          Home
        </NavLink>
        <NavLink to={ROUTES.REGISTRATION} className={classSelector}>
          Sign Up
        </NavLink>
        <NavLink to={ROUTES.LOGIN} className={classSelector}>
          Sign In
        </NavLink>
        <NavLink to={ROUTES.GENDER_PREDICTOR} className={classSelector}>
          Gender predictor
        </NavLink>
        <NavLink to={ROUTES.AGE_PREDICTOR} className={classSelector}>
          Age predictor
        </NavLink>
        <NavLink to={ROUTES.COUNTER} className={classSelector}>
          Counter
        </NavLink>
        <NavLink to={ROUTES.PONY} className={classSelector}>
          Pony Layout
        </NavLink>
        <NavLink to={ROUTES.ABOUT} className={classSelector}>
          About
        </NavLink>
        <NavLink to={ROUTES.ACCOUNT} className={classSelector}>
          Account
        </NavLink>
        <NavLink to="/products" className={classSelector}>
          Products
        </NavLink>
        <NavLink to={ROUTES.USERS} className={classSelector}>
          Users
        </NavLink>
        <NavLink to="/products/add" className={classSelector}>
          Add product
        </NavLink>
        <NavLink to="/gallery" className={classSelector}>
          Gallery
        </NavLink>
        {user?.email}
        {counter}
        {isAuthorized ? (
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        ) : null}
      </nav>
    </>
  );
};
