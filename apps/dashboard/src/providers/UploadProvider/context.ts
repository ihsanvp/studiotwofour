import { createContext } from "react";
import { UploadFile } from "../../models/UploadFile";

export interface UploadManager {
  upload: (files: File[]) => void;
  addRefreshCallback: (cb: () => void) => void;
  removeRefreshCallback: (cb: () => void) => void;
}

export const UploadContext = createContext<UploadManager>({
  upload: () => {
    throw Error("UploadContext has no Provider!");
  },
  addRefreshCallback: () => {
    throw Error("UploadContext has no Provider!");
  },
  removeRefreshCallback: () => {
    throw Error("UploadContext has no Provider!");
  },
});

export const UploadFilesContext = createContext<UploadFile[]>([]);
