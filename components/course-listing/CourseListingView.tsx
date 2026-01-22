import type { CourseListingViewProps } from "./types";
import CourseListingHeader from "./CourseListingHeader";
import CourseListingEmpty from "./CourseListingEmpty";
import CourseCardHorizontal from "./CourseCardHorizontal";
import { getAvailabilityMessage, pickList } from "./utils";

export default function CourseListingView({
  data,
  skill,
  location,
}: CourseListingViewProps) {
  const list = pickList(data);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-12">
        <CourseListingHeader skill={skill} location={location} />

        <section className="mb-6 space-y-4">
          {list.length > 0 ? (
            list.map((course) => (
              <CourseCardHorizontal
                key={course.id ?? course.slug ?? course.course_name}
                content={course}
              />
            ))
          ) : (
            <CourseListingEmpty
              message={getAvailabilityMessage(skill, location)}
            />
          )}
        </section>
      </div>
    </div>
  );
}
