import ListChallenges from '@/components/custom/ListChallenges';
import SearchChallenge from '@/components/custom/SearchChallenge';
import { CHALLENGE_DATA } from '@/config/challenges';

type SearchPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;

  return (
    <section className='flex flex-col gap-10 flex-1 items-center lg:max-w-[900px] md:max-w-[600px] m-auto p-5 mt-5'>
      <SearchChallenge />
      <ListChallenges
        title={
          params.keyword
            ? `Resultados para "${params.keyword}"`
            : 'Resultados encontrados'
        }
        challenges={CHALLENGE_DATA}
      />
    </section>
  );
}
