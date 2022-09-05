/* eslint-disable @next/next/no-img-element */
import { Box, Grid, Stack, Text } from "@mantine/core";

interface Props {
  assets: Array<{
    url: string;
  }>;
}

export default function AssetActivityGroup(props: Props) {
  const display =
    props.assets.length > 3 ? props.assets.slice(0, 3) : props.assets;
  const extra =
    props.assets.length > 3 ? props.assets.slice(3, undefined).length : 0;

  return (
    <Stack spacing={0} pt={10} pb={20}>
      <Grid style={{ height: 150 }} py={20} pr={20}>
        {display.length
          ? display.map((asset, i) => (
              <Grid.Col key={i} span={4}>
                <AssetDisplay url={asset.url} extra={i >= 2 ? extra : 0} />
              </Grid.Col>
            ))
          : null}
      </Grid>
      {/* <Text weight={600} color="dimmed">{`${props.assets.length} items`}</Text> */}
    </Stack>
  );
}

interface AssetDisplayProps {
  url: string;
  extra?: number;
}

function AssetDisplay(props: AssetDisplayProps) {
  return (
    <Box
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: 10,
      }}
    >
      <img
        alt=""
        src={props.url}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      {/* <Image layout="fill" objectFit="cover" src={props.url} alt="" /> */}
      {props.extra ? (
        <Box
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text color="white">{`+${props.extra} more`}</Text>
        </Box>
      ) : null}
    </Box>
  );
}
