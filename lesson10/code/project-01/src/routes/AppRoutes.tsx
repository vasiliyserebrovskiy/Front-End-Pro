import { Routes, Route } from "react-router-dom";
import { AgePredictor } from "../components/AgePredictor/AgePredictor";
import BuyPony from "../components/BuyPony/BuyPony";
import { Counter } from "../components/Counter/Counter";
import { GenderPredictor } from "../components/GenderPredictor/GenderPredictor";
import MyPony from "../components/MyPony/MyPony";
import { ROUTES } from "../constants/routes";
import { MainLayout } from "../layout/MainLayout";
import { PonyLayout } from "../layout/PonyLayout";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Registration from "../pages/Registration/Registration";
import About from "../pages/About/About";
import AccountLayout from "../layout/AccountLayout";
import AccountSettings from "../components/AccountSettings/AccountSettings";
import AccountInfo from "../components/AccountInfo/AccountInfo";
import ProductsList from "../components/ProductsList/ProductsList";
import ProductPage from "../pages/ProductPage/ProductPage";
import { UsersPage } from "../pages/UsersPage/UsersPage";
import { UserPage } from "../pages/UserPage/UserPage";
import Login from "../pages/Login/Login";
import CreateProduct from "../pages/CreateProduct/CreateProduct";
import Gallery from "../components/Gallery/Gallery";
import { ToggleCard } from "../components/ToggleCard/ToggleCard";
import { Parent } from "../components/Parent/Parent";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.REGISTRATION} element={<Registration />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.GENDER_PREDICTOR} element={<GenderPredictor />} />
          <Route path={ROUTES.AGE_PREDICTOR} element={<AgePredictor />} />
          <Route path={ROUTES.COUNTER} element={<Counter />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path="/toggle-card" element={<ToggleCard />} />
          <Route path="/Parent" element={<Parent />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path={"/products/:id"} element={<ProductPage />} />

          <Route path="*" element={<NotFound />} />
          <Route path={ROUTES.PONY} element={<PonyLayout />}>
            <Route path="/pony/my-pony" element={<MyPony />} />
            <Route path="/pony/buy-pony" element={<BuyPony />} />
          </Route>
          <Route path={ROUTES.ACCOUNT} element={<AccountLayout />}>
            <Route
              path={ROUTES.ACCOUNT_SETTINGS}
              element={<AccountSettings />}
            />
            <Route path={ROUTES.ACCOUNT_INFO} element={<AccountInfo />} />
          </Route>
          <Route path={ROUTES.USERS} element={<UsersPage />} />
          <Route path={ROUTES.USERS + "/:id"} element={<UserPage />} />
          <Route path={"/products/add"} element={<CreateProduct />} />
          <Route path={"/gallery"} element={<Gallery />} />
        </Route>
      </Routes>
    </>
  );
}
