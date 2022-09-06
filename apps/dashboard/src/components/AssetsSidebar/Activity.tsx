import { ScrollArea, Timeline } from "@mantine/core";
import AssetActivityGroup from "../AssetActivityGroup";

export default function AssetsSidebarActivity() {
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
