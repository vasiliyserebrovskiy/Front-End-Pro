import "./App.css";
import { Counter } from "./components/Counter/Counter";
import { AgePredictor } from "./components/AgePredictor/AgePredictor";
import { GenderPredictor } from "./components/GenderPredictor/GenderPredictor";
import { Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration/Registration";
import Home from "./pages/Home/Home";
import { BrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import { MainLayout } from "./layout/MainLayout";
import { PonyLayout } from "./layout/PonyLayout";
import MyPony from "./components/MyPony/MyPony";
import BuyPony from "./components/BuyPony/BuyPony";
import { ROUTES } from "./constants/routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path={ROUTES.REGISTRATION} element={<Registration />} />
            <Route
              path={ROUTES.GENDER_PREDICTOR}
              element={<GenderPredictor />}
            />
            <Route path={ROUTES.AGE_PREDICTOR} element={<AgePredictor />} />
            <Route path={ROUTES.COUNTER} element={<Counter />} />
            <Route path="*" element={<NotFound />} />
            <Route path={ROUTES.PONY} element={<PonyLayout />}>
              <Route path="/pony/my-pony" element={<MyPony />} />
              <Route path="/pony/buy-pony" element={<BuyPony />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
