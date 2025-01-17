import { createRouteHandler } from 'uploadthing/next';
import { UTApi } from 'uploadthing/server';

import { uploadRouter } from './core';

// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: uploadRouter,
});

export const DELETE = async ({ json }: Request) => {
  const { fileKey } = await json();
  const utapi = new UTApi();

  if (!fileKey) return Response.json({ error: true });

  try {
    await utapi.deleteFiles(fileKey);
    console.log('Arquivo deletado');
    return Response.json({ message: 'ok' });
  } catch {
    console.log('Error ao deletar arquivo');
    return Response.json({ error: true });
  }
};
