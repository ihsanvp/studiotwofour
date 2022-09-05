import {
  createStyles,
  Navbar,
  Group,
  Code,
  Box,
  UnstyledButton,
  Indicator,
  Divider,
} from "@mantine/core";
import { Outlet } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import {
  IconBellRinging,
  IconSettings,
  IconLogout,
  IconSmartHome,
  IconFiles,
  IconCloudUpload,
  IconDownload,
  IconAd,
  IconArchive,
} from "@tabler/icons";
// import { MantineLogo } from "@mantine/ds";
import NavbarButton from "../components/NavbarButton";

const data: any[] = [
  { link: "/", label: "Dashboard", icon: IconSmartHome },
  { link: "/assets", label: "Assets", icon: IconFiles },
  { link: "/banners", label: "Banners", icon: IconAd },
  { link: "/projects", label: "Projects", icon: IconArchive },
  { link: "/notifications", label: "Notifications", icon: IconBellRinging },
  { link: "/settings", label: "Settings", icon: IconSettings },
];

const useStyles = createStyles((theme, _params, getRef) => {
  const icon: any = getRef("icon");
  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      width: "100%",
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === "dark" ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkLogout: {
      ...theme.fn.focusStyles(),
      width: "100%",
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color: theme.colors.red[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor: theme.colors.red[7],
        color: theme.colorScheme === "dark" ? theme.black : theme.white,

        [`& .${icon}`]: {
          color: theme.colorScheme === "dark" ? theme.black : theme.white,
        },
      },
    },

    linkIconLogout: {
      ref: icon,
      color: theme.colors.red[7],
      marginRight: theme.spacing.sm,
    },
  };
});

export default function DashboardLayout() {
  const logout = useLogout();
  const { classes } = useStyles();

  return (
    <Box style={{ height: "100vh" }}>
      <Group align="start" style={{ height: "100%" }} spacing={0}>
        <Navbar height="100%" width={{ sm: 300 }} p="md">
          <Navbar.Section grow>
            <Group className={classes.header} position="apart">
              {/* <MantineLogo size={28} /> */}
              <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
            </Group>
            {data.map((item) => (
              <NavbarButton
                key={item.label}
                href={item.link}
                icon={item.icon}
                label={item.label}
              />
            ))}
          </Navbar.Section>

          <Navbar.Section className={classes.footer}>
            <Indicator position="middle-end" offset={20} disabled={false}>
              <UnstyledButton className={classes.link}>
                {/* <IconCloudUpload className={classes.linkIcon} stroke={1.5} /> */}
                <span>Uploads</span>
              </UnstyledButton>
            </Indicator>
            <Indicator position="middle-end" offset={20} disabled={true}>
              <UnstyledButton className={classes.link}>
                {/* <IconDownload className={classes.linkIcon} stroke={1.5} /> */}
                <span>Downloads</span>
              </UnstyledButton>
            </Indicator>
            <Divider
              my={20}
              sx={(theme) => ({
                borderTop: `1px solid ${
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[4]
                    : theme.colors.gray[2]
                }`,
              })}
            />
            <UnstyledButton className={classes.linkLogout} onClick={logout}>
              {/* <IconLogout className={classes.linkIconLogout} stroke={1.5} /> */}
              <span>Logout</span>
            </UnstyledButton>
          </Navbar.Section>
        </Navbar>
        <Box style={{ flex: 1, overflowY: "auto", height: "100%" }}>
          {/* {children} */}
          <Outlet />
        </Box>
      </Group>
    </Box>
  );
}
