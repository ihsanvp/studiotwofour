import express from "express";
import { Server, FileStore } from "tus-node-server";

const server = new Server();
server.datastore = new FileStore({
  path: "/uploads",
});

const upload = express();

upload.all("*", server.handle.bind(server));

export default upload;
