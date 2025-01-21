import useCreateChallengeStore from '@/store/createChallengeStore';
import CreateButton from './CreateButton';
import InfoText from '../custom/InfoText';
import ChallengeCategoryBadge from '../custom/ChallengeCategoryBadge';
import BackButton from './BackButton';

type ResumeChallengeProps = {};

export default function ResumeChallenge({}: ResumeChallengeProps) {
  const { challenge } = useCreateChallengeStore();

  return (
    <div>
      {/* configurações básicas */}
      <div className='flex flex-col gap-2 mb-6'>
        <p className='text-lg font-black'>Resumo das Configurações Básicas</p>
        <div className='flex flex-col gap-1'>
          <InfoText title='Imagem'>
            {challenge.image ? (
              <img src={challenge.image} alt={challenge.title}></img>
            ) : (
              'Imagem do desafio'
            )}
          </InfoText>
          <InfoText title='Título'>
            {challenge.title || 'Título do desafio'}
          </InfoText>
          <InfoText title='Descrição'>
            {challenge.desc || 'Descrição do desafio'}
          </InfoText>
          <InfoText title='Tipo'>
            <p className='capitalize'>{challenge.type || 'Tipo de Desafio'}</p>
          </InfoText>
        </div>
      </div>

      {/* configurações do desafio */}
      <div className='flex flex-col gap-2 mb-6'>
        <p className='text-lg font-black'>Resumo dos Desafios</p>
        <div className='flex flex-col gap-1'>
          <InfoText title='Desafios'>
            <div className='flex flex-col gap-2'>
              {challenge.challenges.map((challenge, index) => (
                <div key={challenge}>
                  <p className='text-sm italic font-bold flex justify-between items-center text-purple-700 bg-purple-200 p-2 rounded-md hover:text-purple-700 transition-all'>
                    Desafio {index + 1}: {challenge} <span></span>
                  </p>
                </div>
              ))}
            </div>
          </InfoText>
          {/* Categories */}
          <InfoText title='Categorias'>
            <div className='grid lg:grid-cols-6 md:grid-cols-5 flex-1 gap-1'>
              {challenge.categories.length > 0 &&
                challenge.categories.map((category) => (
                  <ChallengeCategoryBadge key={category} category={category} />
                ))}
            </div>
          </InfoText>
        </div>
      </div>

      {/* configurações das regras */}
      <div className='flex flex-col gap-2 mb-6'>
        <p className='text-lg font-black'>Resumo das Regras</p>
        <div className='flex flex-col gap-1'>
          {/* Normal or any challenge */}
          <InfoText title='Número máximo de jogadores'>
            {challenge.rules.maxPlayerNum}
          </InfoText>
          {challenge.type !== 'score' && (
            <InfoText title='Tempo máximo do desafio'>
              {challenge.rules.maxTime}
            </InfoText>
          )}

          {/* Speed challenge */}
          {challenge.type === 'speed' && (
            <InfoText title='Número de classificações'>
              {challenge.rules.classifications}
            </InfoText>
          )}
          {challenge.type === 'score' && (
            <>
              <InfoText title='Número máximo de rounds'>
                {challenge.rules.maxRounds}
              </InfoText>
              <InfoText title='Tempo máximo de cada round (minutos)'>
                {challenge.rules.maxRoundTime}
              </InfoText>
              <InfoText title='Tipo de seleção do desafio'>
                <p className='capitalize'>
                  {challenge.rules.selectionType === 'order'
                    ? 'Ordem'
                    : 'Aleatório'}
                </p>
              </InfoText>
            </>
          )}
        </div>
      </div>

      {/* Action */}
      <div className='flex justify-end gap-2'>
        <BackButton />
        <CreateButton />
      </div>
    </div>
  );
}
