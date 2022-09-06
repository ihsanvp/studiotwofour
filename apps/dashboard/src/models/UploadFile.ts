type FetchState = "idle" | "pending" | "success" | "failed";

export interface UploadFile {
  id: number;
  name: string;
  type: string;
  status: FetchState;
  loaded: number;
  total: number;
}
