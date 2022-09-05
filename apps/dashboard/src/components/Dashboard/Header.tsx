import { Code, Group } from "@mantine/core";

export default function DashboardHeader() {
  return (
    <Group
      sx={(theme) => ({
        header: {
          paddingBottom: theme.spacing.md,
          marginBottom: theme.spacing.md * 1.5,
          borderBottom: `1px solid ${
            theme.colorScheme === "dark"
              ? theme.colors.dark[4]
              : theme.colors.gray[2]
          }`,
        },
      })}
      position="apart"
    >
      <span>Logo Here</span>
      <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
    </Group>
  );
}
