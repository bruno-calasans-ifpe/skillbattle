import { SystemMessage } from '@/types/Message';

type ChatSystemMessageProps = {
  message: SystemMessage;
};

export default function ChatSystemMessage({ message }: ChatSystemMessageProps) {
  return (
    <div className='flex gap-1'>
      {/* Title */}
      <p className='text-sm font-semibold lower text-stone-600'>[sistema]</p>

      {/* Content */}
      {message.variant === 'join' && (
        <p className='text-sm font-bold text-emerald-600'>{message.content}</p>
      )}

      {message.variant === 'exit' && (
        <p className='text-sm font-bold text-red-600'>{message.content}</p>
      )}
    </div>
  );
}
