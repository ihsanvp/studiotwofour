import { createStyles } from "@mantine/core";
import { TablerIcon } from "@tabler/icons";
import { Link, useMatch } from "react-router-dom";

interface Props {
  href: string;
  icon: TablerIcon;
  label: string;
}

const useStyles = createStyles((theme, _params, getRef) => {
  const icon: any = getRef("icon");

  return {
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

    linkActive: {
      "&, &:hover": {
        backgroundColor: theme.fn.variant({
          variant: "light",
          color: theme.primaryColor,
        }).background,
        color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .color,
        [`& .${icon}`]: {
          color: theme.fn.variant({
            variant: "light",
            color: theme.primaryColor,
          }).color,
        },
      },
    },
  };
});

export default function NavbarButton(props: Props) {
  const { classes, cx } = useStyles();
  const isActive = !!useMatch(props.href);

  return (
    <Link
      to={props.href}
      className={cx(classes.link, {
        [classes.linkActive]: isActive,
      })}
    >
      <props.icon className={classes.linkIcon} stroke={1.5} />
      <span>{props.label}</span>
    </Link>
  );
}
