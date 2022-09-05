import { createStyles, Navbar, UnstyledButton } from "@mantine/core";
import { IconLogout } from "@tabler/icons";
import useLogout from "../../hooks/useLogout";

const useStyles = createStyles((theme, _params, getRef) => {
  const icon: any = getRef("icon");

  return {
    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
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

export default function DashboardFooter() {
  const logout = useLogout();
  const { classes } = useStyles();

  return (
    <Navbar.Section className={classes.footer}>
      <UnstyledButton onClick={logout} className={classes.linkLogout}>
        <IconLogout className={classes.linkIconLogout} stroke={1.5} />
        <span>Logout</span>
      </UnstyledButton>
    </Navbar.Section>
  );
}
