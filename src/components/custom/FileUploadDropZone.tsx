import {
  generateUploadButton,
  generateUploadDropzone,
} from '@uploadthing/react';
import { Button } from '../ui/button';

export const UploadButton = generateUploadButton();
export const UploadDropzone = generateUploadDropzone();

type FileUploadDropZoneProps = {};

export default function FileUploadDropZone({}: FileUploadDropZoneProps) {
  return (
    <div>
      <UploadDropzone
        content={{
          label: 'Carregando..',
          button: 'Fazer Upload',
        }}
        disabled
        endpoint={'/'}
      ></UploadDropzone>
    </div>
  );
}
