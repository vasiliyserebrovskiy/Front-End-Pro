import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

export const NavBar = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to={ROUTES.REGISTRATION}>Sign up</Link>
        <Link to={ROUTES.GENDER_PREDICTOR}>Gender predictor</Link>
        <Link to={ROUTES.AGE_PREDICTOR}>Age predictor</Link>
        <Link to={ROUTES.COUNTER}>Counter</Link>
        <Link to={ROUTES.PONY}>Pony Layout</Link>
      </nav>
    </>
  );
};
