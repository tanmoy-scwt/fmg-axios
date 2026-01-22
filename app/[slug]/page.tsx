import CourseListingView from "@/components/course-listing/CourseListingView";
import {
  fetchCourseListing,
  parseListingSlug,
  type ListingSearchParams,
} from "@/lib/courseListing";

export const dynamic = "force-dynamic";

type CourseListingPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<ListingSearchParams>;
};

export default async function CourseListingPage({
  params,
  searchParams,
}: CourseListingPageProps) {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;
  const safeSlug = slug ?? "";
  const listing = await fetchCourseListing(safeSlug, resolvedSearchParams);
  const { skill, location } = parseListingSlug(safeSlug);

  return (
    <CourseListingView data={listing} skill={skill} location={location} />
  );
}
