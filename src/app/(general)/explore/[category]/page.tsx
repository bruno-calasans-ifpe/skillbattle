import ListChallenges from "@/components/custom/ListChallenges";
import { CHALLENGE_DATA } from "@/config/challenges";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

type ExplorePageProps = {
  params: Promise<{ category: string }>;
};

export default async function ExploreCategoryPage({
  params,
}: ExplorePageProps) {
  const { category } = await params;

  return (
    <section className="flex flex-col gap-10 flex-1 items-center lg:max-w-[900px] md:max-w-[600px] m-auto p-5 mt-5">
      <div className="flex-col flex gap-4">
        <Breadcrumb className="flex items-center justify-start col-span-4 self-start">
          <BreadcrumbList>
        
              <BreadcrumbItem className="text-purple-500">
                <BreadcrumbLink href="/explore">Explore</BreadcrumbLink>
              </BreadcrumbItem>
           
            <BreadcrumbSeparator />
          
              <BreadcrumbItem className="text-purple-500">
                <BreadcrumbLink href={`/explore/${category}`}>
                  {category}
                </BreadcrumbLink>
              </BreadcrumbItem>
          
          </BreadcrumbList>
        </Breadcrumb>
        <ListChallenges title={category} challenges={CHALLENGE_DATA} />
      </div>
    </section>
  );
}
