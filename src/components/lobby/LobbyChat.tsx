'use client';

import { useEffect, useRef, useState } from 'react';

import Title from '@/components/custom/Title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LOBBY_MESSAGES_DATA } from '@/config/lobbyMsgs';
import { PlayerMessage } from '@/types/Message';
import { Player } from '@/types/Player';

import ChatPlayerMessage from './ChatPlayerMessage';
import ChatSystemMessage from './ChatSystemMessage';

type LobbyChatProps = {
  player: Player;
};

export default function LobbyChat({ player }: LobbyChatProps) {
  const [messages, setMessages] = useState(LOBBY_MESSAGES_DATA);
  const [message, setMessage] = useState('');
  const chatBottomRef = useRef<HTMLDivElement>(null);

  const createMessage = () => {
    if (!message) return;
    const newMessage: PlayerMessage = {
      type: 'player',
      content: message,
      sender: player.username,
    };
    setMessages((current) => [...current, newMessage]);
    setMessage('');
  };

  const scrollToBottom = () => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages.length]);

  return (
    <div id='lobby-chat' className='flex flex-col gap-2'>
      <Title>Chat do lobby</Title>

      <div className='flex flex-col gap-1'>
        {/* Messages */}
        <div className='flex flex-col gap-1 p-2 h-56 scrollbar-thumb-purple-300 scrollbar-track-purple-700 overflow-y-scroll scrollbar-thin scrollbar-h-1'>
          {messages.map((message_, index) => {
            if (message_.type === 'system')
              return (
                <ChatSystemMessage
                  key={message_.type + index}
                  message={message_ as any}
                />
              );
            return (
              <ChatPlayerMessage
                key={message_.type + index}
                message={message_}
              />
            );
          })}
          <div ref={chatBottomRef}></div>
        </div>

        {/* Action */}
        <div className='flex items-center gap-1'>
          <Button
            onClick={createMessage}
            size='sm'
            className='bg-purple-500 hover:bg-purple-600 font-bold'
          >
            Enviar
          </Button>
          <Input
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            type='text'
            placeholder='Digite uma mensagem'
            className='focus:outline-none focus:ring-0'
          />
        </div>
      </div>
    </div>
  );
}
