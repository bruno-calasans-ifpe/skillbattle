import { generateUploadButton } from '@uploadthing/react';

import { UploadRouter } from '@/app/api/uploadthing/core';

export const UploadButton = generateUploadButton<UploadRouter>();
