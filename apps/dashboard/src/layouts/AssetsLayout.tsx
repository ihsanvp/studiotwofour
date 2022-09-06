import { Box, Group, ScrollArea } from "@mantine/core";
import { Outlet } from "react-router-dom";
import AssetsSidebar from "../components/AssetsSidebar/Sidebar";

export default function AssetsLayout() {
  return (
    <Group className="hello" sx={{ height: "100%" }} spacing={0} align="start">
      <Box
        style={{
          flex: 1,
          overflowY: "hidden",
          height: "100%",
          paddingRight: 400,
        }}
      >
        <ScrollArea style={{ width: "100%", height: "100%" }}>
          <Outlet />
        </ScrollArea>
      </Box>
      <AssetsSidebar width={400} />
    </Group>
  );
}
