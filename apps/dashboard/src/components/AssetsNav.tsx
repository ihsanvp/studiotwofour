import {
  Center,
  Divider,
  Stack,
  Tabs,
  Text,
  ScrollArea,
  Box,
  Indicator,
  RingProgress,
  MantineColor,
  Timeline,
} from "@mantine/core";
import {
  IconFile,
  IconFileInvoice,
  IconMusic,
  IconPhoto,
  IconVideo,
} from "@tabler/icons";
// import { useUploadFiles } from "features/AssetUpload/upload.hookst";
import AssetActivityGroup from "./AssetActivityGroup";
import AssetsCategoryInfo from "./AssetsCategoryInfo";
// import AssetsCategoryInfo from "./AssetsCategoryInfo";
// import AssetsUpload from "./AssetsUpload";
// import AssetUploadCard from "./AssetUploadCard";
// import { UploadFile } from "features/AssetUpload/upload.context";
// import filesize from "file-size";
// import Image from "next/image";
// import AssetActivityGroup from "./AssetActivityGroup";

interface Props {
  width: number;
}

export default function AssetsNav(props: Props) {
  // const files = useUploadFiles();

  // const uploading = files.filter((file) => file.status == "pending");

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
          <UploadSection files={[]} />
        </Tabs.Panel>

        <Tabs.Panel value="activity">
          <ActivitySection />
        </Tabs.Panel>

        <Tabs.Panel value="details">
          <DetailsSection totalSize={75000000000} />
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}

interface UploadSectionProps {
  files: any[];
}

function UploadSection(props: UploadSectionProps) {
  return (
    <Stack style={{ height: "100%", overflow: "hidden" }} spacing={30}>
      <Box px={20} pt={20}>
        {/* <AssetsUpload /> */}
      </Box>
      {props.files.length ? (
        <Stack style={{ height: "100%", overflow: "hidden" }}>
          <Text px={20} weight={500} color="dimmed">
            {`Uploading ${props.files.length} item${
              props.files.length > 1 ? "s" : ""
            }`}
          </Text>
          <ScrollArea style={{ height: "100%" }}>
            <Stack px={20}>
              {/* {props.files.map((file) => {
                return <AssetUploadCard key={file.id} file={file} />;
              })} */}
            </Stack>
          </ScrollArea>
        </Stack>
      ) : null}
    </Stack>
  );
}

function ActivitySection() {
  return (
    <ScrollArea style={{ height: "100%" }} px={20}>
      <Timeline px={10} py={20} active={2}>
        <Timeline.Item title="1 min ago">
          <AssetActivityGroup
            assets={[
              {
                url: "https://images.unsplash.com/photo-1657299143020-4f4bbf05174d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
              },
              {
                url: "https://images.unsplash.com/photo-1659699574359-9f9a24fc7dbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
              },
              {
                url: "https://images.unsplash.com/photo-1659716043641-1fbb627f5e0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
              },
              {
                url: "https://images.unsplash.com/photo-1659716043641-1fbb627f5e0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
              },
            ]}
          />
        </Timeline.Item>
        <Timeline.Item title="2 hours ago">
          <AssetActivityGroup
            assets={[
              {
                url: "https://images.unsplash.com/photo-1659579340193-89659a0f2531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
              },
              {
                url: "https://images.unsplash.com/photo-1659763708148-71eaeee1101e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
              },
              {
                url: "https://images.unsplash.com/photo-1659635748991-70f4e3049788?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
              },
              {
                url: "https://images.unsplash.com/photo-1659772847714-d0284a48bbbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
              },
              {
                url: "",
              },
              {
                url: "",
              },
            ]}
          />
        </Timeline.Item>
        <Timeline.Item title="3 days ago">
          <AssetActivityGroup
            assets={[
              {
                url: "https://images.unsplash.com/photo-1659697067461-f9604d8f9898?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
              },
              {
                url: "https://images.unsplash.com/photo-1659778059522-d280d965fde8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
              },
            ]}
          />
        </Timeline.Item>
      </Timeline>
    </ScrollArea>
  );
}

interface DetailsSectionProps {
  totalSize: number;
}

function DetailsSection(props: DetailsSectionProps) {
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
