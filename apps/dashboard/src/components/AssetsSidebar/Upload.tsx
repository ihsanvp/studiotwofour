import { Box, ScrollArea, Stack, Text } from "@mantine/core";
import AssetsUpload from "../AssetsUpload";

export default function AssetsSidebarUpload() {
  return (
    <Stack style={{ height: "100%", overflow: "hidden" }} spacing={30}>
      <Box px={20} pt={20}>
        <AssetsUpload />
      </Box>
      {/* {props.files.length ? (
        <Stack style={{ height: "100%", overflow: "hidden" }}>
          <Text px={20} weight={500} color="dimmed">
            {`Uploading ${props.files.length} item${
              props.files.length > 1 ? "s" : ""
            }`}
          </Text>
          <ScrollArea style={{ height: "100%" }}>
            <Stack px={20}>
              {props.files.map((file) => {
                return <AssetUploadCard key={file.id} file={file} />;
              })}
            </Stack>
          </ScrollArea>
        </Stack>
      ) : null} */}
    </Stack>
  );
}
