import { Group, Box } from "@mantine/core";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar/Sidebar";

export default function DashboardLayout() {
  return (
    <Box style={{ height: "100vh" }}>
      <Group align="start" style={{ height: "100%" }} spacing={0}>
        <DashboardSidebar />
        <Box style={{ flex: 1, overflowY: "auto", height: "100%" }}>
          <Outlet />
        </Box>
      </Group>
    </Box>
  );
}
