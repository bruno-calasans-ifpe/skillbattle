'use client';

import { X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ClientUploadedFileData } from 'uploadthing/types';

import useCustomToast from '@/hooks/use-custom-toast';
import { removeFile } from '@/services/uploadthing/file';
import useCreateChallengeStore from '@/store/createChallengeStore';

import { UploadDropzone } from '../custom/UploadDropZone';

type CreateChallengeUploadDropZoneProps = {
  onUploadComplete: (url: string) => void;
};

export default function CreateChallengeUploadDropZone({
  onUploadComplete,
}: CreateChallengeUploadDropZoneProps) {
  const { challenge, updateChallenge } = useCreateChallengeStore();
  const [image, setImage] = useState<ClientUploadedFileData<{}> | null>(null);
  const { successToast, errorToast } = useCustomToast();

  const uploadCompleteHandler = (response: ClientUploadedFileData<{}>[]) => {
    const file = response[0];
    setImage(file);
    onUploadComplete(response[0].url);
    updateChallenge({ image: file.url });
  };

  const removeImageHandler = async () => {
    if (!image) return;
    try {
      await removeFile(image.key);
      setImage(null);
      successToast('Imagem Removida', 'A sua imagem foi removida');
      updateChallenge({ image: '' });
    } catch {
      errorToast('Erro ao remover imagem', 'Não foi possível remover a imagem');
    }
  };

  useEffect(() => {
    const removeLeftoverFile = async (event: Event) => {
      await removeFile(challenge.image);
    };

    window.addEventListener('beforeunload', removeLeftoverFile);

    return () => {
      window.removeEventListener('beforeunload', removeLeftoverFile);
    };
  }, []);

  return (
    <div>
      {/* Image Preview */}
      {challenge.image && (
        <div className='flex flex-col items-center'>
          <div className='flex items-center justify-center relative h-52 w-52'>
            <Image src={challenge.image} alt={challenge.image} fill />
            <X
              size={16}
              color='red'
              className='absolute top-0 right-0 cursor-pointer'
              onClick={removeImageHandler}
            />
          </div>
          <p>Preview da Imagem</p>
        </div>
      )}
      {/* Dropzone */}
      {!challenge.image && (
        <UploadDropzone
          content={{
            label: 'Escolha um arquivo e arraste',
            button: (
              <p className='text-sm bg-transparent cursor-pointer flex-1 font-bold'>
                Fazer Upload
              </p>
            ),
          }}
          endpoint='createChallengeUpload'
          appearance={{
            button: {
              padding: '0px',
            },
          }}
          onUploadError={() => {
            errorToast(
              'Erro ao fazer upload',
              'Não foi possível realizar o upload da sua imagem',
            );
          }}
          onClientUploadComplete={uploadCompleteHandler}
        ></UploadDropzone>
      )}
    </div>
  );
}
