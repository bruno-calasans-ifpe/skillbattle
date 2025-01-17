import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { UploadThingError } from 'uploadthing/server';

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const uploadRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  createChallengeUpload: f({
    image: {
      maxFileSize: '4MB',
      maxFileCount: 1,
      minFileCount: 1,
    },
  }).onUploadComplete(async ({ metadata, file }) => {
    // This code RUNS ON YOUR SERVER after upload
    //   console.log('Upload complete for userId:', metadata.userId);

    console.log('file url', file.url);

    // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
    return {};
  }),
  submitChallengeUpload: f({
    image: {
      maxFileSize: '4MB',
      maxFileCount: 1,
      minFileCount: 1,
    },
    video: {
      maxFileSize: '16MB',
      maxFileCount: 1,
      minFileCount: 1,
    },
    text: {
      maxFileSize: '4MB',
      maxFileCount: 1,
      minFileCount: 1,
    },
  }).onUploadComplete(async ({ metadata, file }) => {
    // This code RUNS ON YOUR SERVER after upload
    //   console.log('Upload complete for userId:', metadata.userId);

    console.log('file url', file.url);

    // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
    return {};
  }),
} satisfies FileRouter;

export type UploadRouter = typeof uploadRouter;
