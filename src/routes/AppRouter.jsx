import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "./routes";
import { HomePage } from "../pages/HomePage";
import { Layout } from "../Layout";
import AuthMiddleware from "./AuthMiddleware";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Loginhome from "../components/Loginhome";
import Bonuscasino from "../components/Bonuscasino";
import Deposit from "../components/Deposit";
import LoginModal from "../components/Modals/LoginModal";
import Withdrawal from "../components/Withdrawal";
import Accountstate from "../components/Accountstate";
import Slots from "../components/Slots";
import Market from "../components/Market";
import Testmatch from "../components/Testmatch";
import TestMatchs from "../components/TestMatchs";
import Casino from "../components/Casino";
import Live from "../components/Live";
import Sport from "../components/Sport";
export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={AppRoutes.home} element={<HomePage />} />
        <Route path={AppRoutes.login} element={<Login />} />
        <Route path={AppRoutes.signup} element={<Signup />} />
        <Route path={AppRoutes.Loginhome} element={<Loginhome />} />
        <Route path={AppRoutes.Bonuscasino} element={<Bonuscasino />} />
        <Route path={AppRoutes.Deposit} element={<Deposit />} />
        <Route path={AppRoutes.LoginModal} element={<LoginModal />} />
        <Route path={AppRoutes.Withdrawal} element={<Withdrawal />} />
        <Route path={AppRoutes.Accountstate} element={<Accountstate />} />
        <Route path={AppRoutes.Slots} element={<Slots />} />
        <Route path={AppRoutes.Market} element={<Market />} />
        <Route path={AppRoutes.Testmatch} element={<Testmatch />} />
        <Route path={AppRoutes.TestMatchs} element={<TestMatchs />} />
        <Route path={AppRoutes.Casino} element={<Casino />} />
        <Route path={AppRoutes.Live} element={<Live />} />
        <Route path={AppRoutes.Sport} element={<Sport />} />
        <Route element={<AuthMiddleware />}>
          {/* <Route
            path={AppRoutes.accountstatement}
            element={<AccountStatementPage />}
          /> */}
        </Route>
      </Route>
    </Routes>
  );
};
