import { Box, Divider, Indicator, Stack, Tabs } from "@mantine/core";
import AssetsSidebarActivity from "./Activity";
import AssetsSidebarDetails from "./Details";
import AssetsSidebarUpload from "./Upload";

interface Props {
  width: number;
}

export default function AssetsSidebar(props: Props) {
  return (
    <Stack
      sx={(theme) => ({
        borderLeft: `1px solid ${
          theme.colorScheme === "dark"
            ? theme.colors.dark[4]
            : theme.colors.gray[2]
        }`,
      })}
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        width: props.width,
        zIndex: 10,
        background: "white",
      }}
    >
      <Tabs
        variant="pills"
        defaultValue="upload"
        styles={(theme) => ({
          tabsList: {
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 20,
            paddingRight: 20,
          },
          root: {
            height: "100%",
            display: "flex",
            flexDirection: "column",
          },
          panel: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          },
        })}
      >
        <Tabs.List grow>
          <Indicator
            style={{ flex: 1, display: "flex" }}
            position="middle-end"
            offset={15}
            size={8}
            color="orange"
            // disabled={!uploading.length}
          >
            <Tabs.Tab value="upload">Upload</Tabs.Tab>
          </Indicator>
          <Indicator
            style={{ flex: 1, display: "flex" }}
            position="middle-end"
            offset={15}
            size={8}
            color="orange"
            disabled={true}
          >
            <Tabs.Tab value="activity">Activity</Tabs.Tab>
          </Indicator>
          <Indicator
            style={{ flex: 1, display: "flex" }}
            position="middle-end"
            offset={15}
            size={8}
            color="orange"
            disabled={true}
          >
            <Tabs.Tab value="details">Details</Tabs.Tab>
          </Indicator>
        </Tabs.List>

        <Box px={20}>
          <Divider
            sx={(theme) => ({
              borderTop: `1px solid ${
                theme.colorScheme === "dark"
                  ? theme.colors.dark[4]
                  : theme.colors.gray[2]
              }`,
            })}
          />
        </Box>

        <Tabs.Panel value="upload">
          <AssetsSidebarUpload />
        </Tabs.Panel>

        <Tabs.Panel value="activity">
          <AssetsSidebarActivity />
        </Tabs.Panel>

        <Tabs.Panel value="details">
          <AssetsSidebarDetails />
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}
