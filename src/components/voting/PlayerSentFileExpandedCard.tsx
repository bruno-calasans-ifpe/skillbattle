import { PlayerSentFile } from '@/types/PlayerSentFile';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Title from '@/components/custom/Title';

type PlayerSentFileExpandedCardProps = {
  open?: boolean;
  file: PlayerSentFile;
};

export default function PlayerSentFileExpandedCard({
  file,
}: PlayerSentFileExpandedCardProps) {
  return (
    <Dialog>
      <DialogTrigger
        asChild
        className='p-1 h-36 flex item justify-center cursor-pointer'
      >
        <img src='/imgs/challenge.svg' alt={file.title} className='w-full' />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <Title>{file.title}</Title>
          </DialogTitle>

          <img src='/imgs/challenge.svg' alt={file.title} className='w-full' />
          <p className='text-sm'>
            Enviado por:{' '}
            <span className='font-semibold italic'>{file.createdBy}</span>
          </p>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
