import { Navbar, Group, Box, Divider } from "@mantine/core";
import { Outlet } from "react-router-dom";
import DASHBOARD_CONFIG from "../configs/dashboard";
import NavbarButton from "../components/NavbarButton";
import DashboardHeader from "../components/Dashboard/Header";
import DashboardFooter from "../components/Dashboard/Footer";

export default function DashboardLayout() {
  return (
    <Box style={{ height: "100vh" }}>
      <Group align="start" style={{ height: "100%" }} spacing={0}>
        <Navbar height="100%" width={{ sm: 300 }} p="md">
          <Navbar.Section grow>
            <DashboardHeader />
            <Divider
              my={15}
              sx={(theme) => ({
                borderTop: `1px solid ${
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[4]
                    : theme.colors.gray[2]
                }`,
              })}
            />
            {DASHBOARD_CONFIG.links.map((item) => (
              <NavbarButton
                key={item.label}
                href={item.link}
                icon={item.icon}
                label={item.label}
              />
            ))}
          </Navbar.Section>

          <DashboardFooter />
        </Navbar>
        <Box style={{ flex: 1, overflowY: "auto", height: "100%" }}>
          <Outlet />
        </Box>
      </Group>
    </Box>
  );
}
