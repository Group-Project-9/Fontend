import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../index.css";
import Layout from "../Components/Layout.jsx";
import Home from "../Pages/home/Home.jsx";
import Register from "../Pages/Register/Register";
import Settings from "../Pages/Setting/Setting";
import UserAccount from "../Pages/Setting/user-account/UserAccount";
import UserAccountEdit from "../Pages/Setting/user-account/UserAccountEdit";
import SecuritySetting from "../Pages/Setting/security-setting/SecuritySetting";
import HelpSupport from "../Pages/Setting/help-support/HelpSupport";
import LogOut from "../Pages/Setting/log-out/LogOut";
import DataViz from "../Pages/Data-vitualization/DataViz";
import PrivateRoute from "../Components/PrivateRoute";

import Form from "../Pages/Form/Form";
import Login from "../Pages/Login/Login";
import Record from "../pages/Record/Record";

// eslint-disable-next-line react-refresh/only-export-components
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/login" 
          element={<Login />} 
        />
        <Route 
          path="/register" 
          element={<Register />} 
        />
        <Route element={<PrivateRoute />}>
          <Route 
            path="/" 
            element={<Layout />}
          >
            <Route 
              index 
              element={<Home />}
            />
            <Route 
              path="/statistic" 
              element={<Record />} 
            />
            <Route 
              path="/form" 
              element={<Form />} 
            />
            <Route 
              path="/settings" 
              element={<Settings />} />
            <Route 
              path="settings/user-account" 
              element={<UserAccount />} 
            />
            <Route
              path="settings/user-account/edit"
              element={<UserAccountEdit />}
            />
            <Route
              path="settings/security-setting"
              element={<SecuritySetting />}
            />
            <Route 
              path="settings/help-support" 
              element={<HelpSupport />} 
            />
            <Route 
              path="settings/log-out" 
              element={<LogOut />} 
            />
            <Route 
              path="/data" 
              element={<DataViz />} 
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}