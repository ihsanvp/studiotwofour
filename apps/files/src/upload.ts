import express from "express";
import { Server, FileStore } from "tus-node-server";
import { parse } from "./helpers/metadata";
import crypto from "crypto";
import path from "path";

const server = new Server();
server.datastore = new FileStore({
  path: "/uploads",
  namingFunction: (req) => {
    const header = req.headers["upload-metadata"]?.toString();
    const str = crypto.randomBytes(16).toString("hex");

    if (header) {
      const meta = parse(header);

      if (meta.filename) {
        const { ext } = path.parse(meta.filename);

        return str + ext;
      }
    }

    return str;
  },
});

const upload = express();

upload.all("*", server.handle.bind(server));

export default upload;
