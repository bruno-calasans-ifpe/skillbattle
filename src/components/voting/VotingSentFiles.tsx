import { PLAYER_SENT_FILES_DATA } from '@/config/playerSentFiles';

import PlayerSentFileCard from './PlayerSentFileCard';

type VotingSentFilesProps = {};

export default function VotingSentFiles({}: VotingSentFilesProps) {
  return (
    <div
      id='player-sent-files-container'
      className='grid lg:grid-cols-4 md:grid-cols-3 gap-4'
    >
      {PLAYER_SENT_FILES_DATA.map((sentFile, index) => (
        <PlayerSentFileCard key={index} file={sentFile} />
      ))}
    </div>
  );
}
