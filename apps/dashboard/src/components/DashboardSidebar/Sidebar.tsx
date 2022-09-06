import { Divider, Navbar } from "@mantine/core";
import DASHBOARD_CONFIG from "../../configs/dashboard";
import NavbarButton from "../NavbarButton";
import DashboardFooter from "./Footer";
import DashboardHeader from "./Header";

export default function DashboardSidebar() {
  return (
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
  );
}
