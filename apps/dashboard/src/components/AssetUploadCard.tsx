import {
  CloseButton,
  Group,
  Progress,
  RingProgress,
  Text,
} from "@mantine/core";
import { UploadFile } from "../models/UploadFile";

interface Props {
  file: UploadFile;
}

export default function AssetUploadCard(props: Props) {
  const progress = Math.ceil((props.file.loaded / props.file.total) * 100);

  return (
    <Group position="apart" align="center">
      <Text size="md" lineClamp={1} style={{ flex: 1 }}>
        {props.file.name}
      </Text>
      <Group>
        <Progress style={{ width: 60 }} value={progress} />
        <CloseButton />
        {/* <RingProgress
          roundCaps
          thickness={4}
          size={50}
          sections={[{ value: progress, color: "indigo" }]}
          label={
            <Text color="indigo" weight={700} align="center" size="xs">
              {progress}
            </Text>
          }
        /> */}
      </Group>
    </Group>
  );
}
