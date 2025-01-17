import axios from 'axios';

export const removeFile = async (fileKey: string) => {
  await axios.delete('api/uploadthing', {
    data: {
      fileKey,
    },
  });
};
