import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Layout from "./Components/layout.jsx";
import Home from "./pages/home/Home.jsx";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import Settings from "./pages/Setting/Setting";
import UserAccount from "./pages/Setting/user-account/UserAccount";
import UserAccountEdit from "./pages/Setting/user-account/UserAccountEdit";
import SecuritySetting from "./pages/Setting/security-setting/SecuritySetting";
import HelpSupport from "./pages/Setting/help-support/HelpSupport";
import LogOut from "./pages/Setting/log-out/LogOut";
import DataViz from "./pages/Data-vitualization/DataViz";

import Form from "./pages/Form/Form";
import Login from "./pages/login/Login";

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
        <Route 
          path="/" 
          element={<Layout />}
        >
          <Route 
            index 
            element={<Home />}
           />
          <Route 
            path="/profile" 
            element={<Profile />} 
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
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
