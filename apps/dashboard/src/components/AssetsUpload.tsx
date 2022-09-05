import { useRef } from "react";
import { Text, Group, Button, createStyles } from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";
import {
  IconCloudUpload,
  IconX,
  IconDownload,
  IconAlertTriangle,
} from "@tabler/icons";
// import { useUpload } from "features/AssetUpload/upload.hookst";
// import { openUploadModal } from "components/Modals/UploadsModal";
// import useAppNotification from "hooks/useAppNotification";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    marginBottom: 30,
  },

  dropzone: {
    borderWidth: 1,
    paddingBottom: 50,
  },

  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[4],
  },

  control: {
    position: "absolute",
    width: 250,
    left: "calc(50% - 125px)",
    bottom: -20,
  },
}));

export default function AssetsUpload() {
  const { classes, theme } = useStyles();
  const openRef = useRef<() => void>(null);
  // const showNotification = useAppNotification("error");
  // const { upload } = useUpload();

  return (
    <div className={classes.wrapper}>
      <Dropzone
        openRef={openRef}
        onDrop={(files) => {
          // upload(files);
          // openUploadModal();
        }}
        onReject={(rejections) => {
          rejections.forEach((err) => {
            err.errors.forEach((e) => {
              if (e.code == "file-too-large") {
                // showNotification({
                //   title: "Error",
                //   message: "File is larger than 30MB",
                // });
              } else {
                // showNotification({
                //   title: e.code,
                //   message: e.message,
                // });
              }
            });
          });
        }}
        className={classes.dropzone}
        radius="md"
        maxSize={30 * 1024 ** 2}
      >
        <div style={{ pointerEvents: "none" }}>
          <Group position="center">
            <Dropzone.Accept>
              <IconDownload
                size={50}
                color={theme.colors[theme.primaryColor][6]}
                stroke={1.5}
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX size={50} color={theme.colors.red[6]} stroke={1.5} />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconCloudUpload
                size={50}
                color={
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[0]
                    : theme.black
                }
                stroke={1.5}
              />
            </Dropzone.Idle>
          </Group>

          <Text align="center" weight={700} size="lg" mt="xl">
            <Dropzone.Accept>Drop files here</Dropzone.Accept>
            <Dropzone.Reject>Files less than 30mb</Dropzone.Reject>
            <Dropzone.Idle>Upload Assets</Dropzone.Idle>
          </Text>
          <Text align="center" size="sm" mt="xs" color="dimmed">
            Drag&apos;n&apos;drop files here to upload. We can accept only files
            that are less than 30mb in size.
          </Text>
        </div>
      </Dropzone>

      <Button
        className={classes.control}
        size="md"
        radius="xl"
        onClick={() => openRef.current?.()}
      >
        Select files
      </Button>
    </div>
  );
}
