import { PlayerMessage } from '@/types/Message';

type ChatMessageProps = {
  message: PlayerMessage;
};

export default function ChatPlayerMessage({ message }: ChatMessageProps) {
  return (
    <div className='flex gap-1'>
      {/* Title */}
      <p className='text-sm font-bold'>{message.sender}:</p>
      {/* Content */}
      <p className='text-sm'>{message.content}</p>
    </div>
  );
}
