import { AuthProvider } from "react-auth-kit";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";
import LoginRoute from "./routes/LoginRoute";
import ProtectedLayout from "./layouts/ProtectedLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import AUTH_CONFIG from "./configs/auth";
import AssetsLayout from "./layouts/AssetsLayout";
import AssetsRoute from "./routes/AssetsRoute";

function App() {
  return (
    <AuthProvider authType={AUTH_CONFIG.storage} authName={AUTH_CONFIG.key}>
      <BrowserRouter>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <Routes>
            <Route element={<ProtectedLayout loginPath="/login" />}>
              <Route element={<DashboardLayout />}>
                <Route index element={<HomeRoute />} />
                <Route path="assets" element={<AssetsLayout />}>
                  <Route path="" element={<AssetsRoute />} />
                </Route>
              </Route>
            </Route>
            <Route path="login" element={<LoginRoute />} />
          </Routes>
        </MantineProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
