import { Center, MantineColor, RingProgress, Stack, Text } from "@mantine/core";
import {
  IconFile,
  IconFileInvoice,
  IconMusic,
  IconPhoto,
  IconVideo,
} from "@tabler/icons";
import AssetsCategoryInfo from "../AssetsCategoryInfo";

export default function AssetsSidebarDetails() {
  const parsedTotalSize = 32;

  function color(primary: MantineColor): MantineColor {
    if (parsedTotalSize > 90) {
      return "red";
    }

    if (parsedTotalSize > 75) {
      return "yellow";
    }

    return primary;
  }

  return (
    <Stack style={{ height: "100%" }} px={20} py={20}>
      <Center>
        <RingProgress
          size={300}
          thickness={24}
          sections={[{ value: parsedTotalSize, color: color("blue") }]}
          label={
            <Stack align="center" spacing={0}>
              <Text color={color("blue")} size={30} weight={700}>
                {`${parsedTotalSize} GB`}
              </Text>
              <Text color="dimmed">Used of 100 GB</Text>
            </Stack>
          }
        />
      </Center>
      <Stack>
        <AssetsCategoryInfo
          name="Document"
          icon={IconFileInvoice}
          color="yellow"
          count={997}
          size="2.2 GB"
        />
        <AssetsCategoryInfo
          name="Photo"
          icon={IconPhoto}
          color="green"
          count={2328}
          size="13 GB"
        />
        <AssetsCategoryInfo
          name="Video"
          icon={IconVideo}
          color="pink"
          count={432}
          size="42 GB"
        />
        <AssetsCategoryInfo
          name="Audio"
          icon={IconMusic}
          color="blue"
          count={432}
          size="42 GB"
        />
        <AssetsCategoryInfo
          name="Other"
          icon={IconFile}
          color="gray"
          count={432}
          size="42 GB"
        />
      </Stack>
    </Stack>
  );
}
