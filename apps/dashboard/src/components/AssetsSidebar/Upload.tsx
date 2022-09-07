import { Box, ScrollArea, Stack, Text } from "@mantine/core";
import useUploadFiles from "../../hooks/useUploadFiles";
import AssetsUpload from "../AssetsUpload";
import AssetUploadCard from "../AssetUploadCard";

export default function AssetsSidebarUpload() {
  const files = useUploadFiles().filter((f) => f.status == "pending");

  return (
    <Stack style={{ height: "100%", overflow: "hidden" }} spacing={30}>
      <Box px={20} pt={20}>
        <AssetsUpload />
      </Box>
      {files.length ? (
        <Stack style={{ height: "100%", overflow: "hidden" }}>
          <Text px={20} weight={500} color="dimmed">
            {`Uploading ${files.length} item${files.length > 1 ? "s" : ""}`}
          </Text>
          <ScrollArea style={{ height: "100%" }}>
            <Stack px={20}>
              {files.map((file) => {
                return <AssetUploadCard key={file.id} file={file} />;
              })}
            </Stack>
          </ScrollArea>
        </Stack>
      ) : null}
    </Stack>
  );
}
