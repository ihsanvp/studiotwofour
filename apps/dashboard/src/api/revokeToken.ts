import http from "../utils/http";

interface Response {
  revoked: true;
}

export default async function revokeToken() {
  const res = await http.post<Response>("/auth/logout");
  return res.data;
}
