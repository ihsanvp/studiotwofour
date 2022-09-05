import { Box, Group, ThemeIcon, Text, MantineColor } from "@mantine/core";
import { IconFileInvoice, TablerIcon } from "@tabler/icons";

interface Props {
  icon: TablerIcon;
  color: MantineColor;
  name: string;
  count: number;
  size: string;
}

export default function AssetsCategoryInfo(props: Props) {
  return (
    <Group align="center">
      <ThemeIcon
        color={props.color}
        variant="light"
        style={{ width: 45, height: 45 }}
      >
        <props.icon />
      </ThemeIcon>
      <Group style={{ width: "100%", flex: 1 }}>
        <Box style={{ flex: 1 }}>
          <Text weight={500}>{props.name}</Text>
          <Text size={12} color="dimmed">
            {props.count} files
          </Text>
        </Box>
        <Text
          sx={(theme) => ({
            color: theme.colors[theme.primaryColor][7],
          })}
          weight={700}
        >
          {props.size}
        </Text>
      </Group>
    </Group>
  );
}
