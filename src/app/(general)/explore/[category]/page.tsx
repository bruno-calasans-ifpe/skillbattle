import { CHALLENGE_DATA } from "@/config/challenges";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ExpandedChallengeCard from "@/components/custom/ExpandedChallengeCard";
import Title from "@/components/custom/Title";
import ContentContainer from "@/components/custom/ContentContainer";

type ExplorePageProps = {
  params: Promise<{ category: string }>;
};

export default async function ExploreCategoryPage({
  params,
}: ExplorePageProps) {
  const { category } = await params;

  return (
    <ContentContainer>
      <Title>
        <Breadcrumb>
          <BreadcrumbList className="text-xl">
            <BreadcrumbItem>
              <BreadcrumbLink
                className="text-purple-500 hover:text-purple-800"
                href="/explore"
              >
                Explore
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{category}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Title>
      {CHALLENGE_DATA.map((challenge, index) => (
        <ExpandedChallengeCard key={index} challenge={challenge} />
      ))}
    </ContentContainer>
  );
}
