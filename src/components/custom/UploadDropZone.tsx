import { generateUploadDropzone } from '@uploadthing/react';

import { UploadRouter } from '@/app/api/uploadthing/core';

export const UploadDropzone = generateUploadDropzone<UploadRouter>();
