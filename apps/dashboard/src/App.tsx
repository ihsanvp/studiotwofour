import { AuthProvider } from "react-auth-kit";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";
import LoginRoute from "./routes/LoginRoute";
import ProtectedLayout from "./layouts/ProtectedLayout";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    <AuthProvider authType="localstorage" authName="_auth">
      <BrowserRouter>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <Routes>
            <Route path="" element={<ProtectedLayout loginPath="/login" />}>
              <Route path="" element={<DashboardLayout />}>
                <Route index element={<HomeRoute />} />
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
