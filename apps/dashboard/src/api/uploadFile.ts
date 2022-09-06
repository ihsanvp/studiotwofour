import { Upload } from "tus-js-client";

interface Params {
  file: File;
}

export default async function uploadFile(params: Params): Promise<void> {
  return new Promise((resolve, reject) => {
    const upload = new Upload(params.file, {
      endpoint: "http://localhost:8001/upload",
      metadata: {
        filename: params.file.name,
        filetype: params.file.type,
      },
      onError: (error) => {
        console.log("Failed because: " + error);
        reject(error);
      },
      onProgress: (loaded, total) => {
        const percentage = ((loaded / total) * 100).toFixed(2);
        console.log(loaded, total, percentage + "%");
      },
      onSuccess: () => {
        console.log("Download %s from %s", params.file.name, upload.url);
        resolve();
      },
    });

    upload.start();

    // upload.findPreviousUploads().then(function (previousUploads) {
    //   // if (previousUploads.length ) {
    //   //   upload.resumeFromPreviousUpload(previousUploads[0]);
    //   //   console.log(previousUploads);
    //   // }

    //   upload.start();
    // });
  });
}
