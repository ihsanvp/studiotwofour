import { useContext } from "react";
import { UploadContext } from "../providers/UploadProvider/context";

export default function useUploadManager() {
  return useContext(UploadContext);
}
