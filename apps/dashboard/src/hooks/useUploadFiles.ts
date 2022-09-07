import { useContext } from "react";
import { UploadFilesContext } from "../providers/UploadProvider/context";

export default function useUploadFiles() {
  return useContext(UploadFilesContext);
}
