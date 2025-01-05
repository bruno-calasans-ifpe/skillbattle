import {
  generateUploadButton,
  generateUploadDropzone,
} from '@uploadthing/react';

export const UploadButton = generateUploadButton();
export const UploadDropzone = generateUploadDropzone();

type CreateChallengeImageUploadProps = {};

export default function CreateChallengeImageUpload({}: CreateChallengeImageUploadProps) {
  return (
    <div>
      <UploadDropzone endpoint={'/'}></UploadDropzone>
    </div>
  );
}
