import { useCallback, useEffect, useMemo, useState } from "react";
import useIncrementingId from "../../hooks/useIncrementingId";
import { UploadFile } from "../../models/UploadFile";
import http from "../../utils/http";
import { UploadContext, UploadFilesContext, UploadManager } from "./context";

interface UploadContextWrapperProps {
  children: JSX.Element | JSX.Element[];
}

export default function UploadProvider({
  children,
}: UploadContextWrapperProps): JSX.Element {
  const [files, setFiles] = useState<UploadFile[]>([]);
  const [refreshCallbacks, setRefreshCallbacks] = useState<Array<() => void>>(
    []
  );
  const [needsRefreshing, setNeedsRefreshing] = useState<boolean>(false);
  const generateUID = useIncrementingId();

  const updateFileFactory =
    (id: number) => (getUpdated: (oldFile: UploadFile) => UploadFile) => {
      setFiles((oldFiles) => {
        const oldFile = oldFiles.find((f) => f.id === id);
        if (oldFile) {
          return oldFiles
            .filter((f) => f.id !== id)
            .concat([getUpdated(oldFile)])
            .sort((a, b) => b.id - a.id);
        }
        return oldFiles;
      });
    };

  const upload = useCallback(
    (fileList: File[]) => {
      Array.from(fileList).forEach((file) => {
        const id = generateUID();
        const updateFile = updateFileFactory(id);
        const data = new FormData();
        data.append("file", file);

        setFiles((oldFiles) =>
          oldFiles.concat([
            {
              id,
              name: file.name,
              status: "pending",
              type: file.type,
              loaded: 0,
              total: file.size,
            },
          ])
        );

        http
          .post("/assets/upload", data, {
            onUploadProgress: (e: ProgressEvent) =>
              updateFile((oldFile) => ({
                ...oldFile,
                loaded: e.loaded,
                total: e.total,
              })),
          })
          .then(() => {
            updateFile((oldFile) => ({
              ...oldFile,
              status: "success",
            }));
            setNeedsRefreshing(true);
          })
          .catch(() => {
            updateFile((oldFile) => ({
              ...oldFile,
              status: "failed",
            }));
          });
      });
    },
    [generateUID]
  );

  const uploadManager: UploadManager = useMemo(
    () => ({
      upload,
      addRefreshCallback: (cb) => {
        setRefreshCallbacks((oldCbs) => [...oldCbs, cb]);
      },
      removeRefreshCallback: (cb) => {
        setRefreshCallbacks((oldCbs) => oldCbs.filter((oldCb) => oldCb !== cb));
      },
    }),
    [upload]
  );

  useEffect(() => {
    if (needsRefreshing) {
      refreshCallbacks.forEach((cb) => cb());
      setNeedsRefreshing(false);
    }
  }, [needsRefreshing, refreshCallbacks]);

  return (
    <UploadContext.Provider value={uploadManager}>
      <UploadFilesContext.Provider value={files}>
        {children}
      </UploadFilesContext.Provider>
    </UploadContext.Provider>
  );
}
