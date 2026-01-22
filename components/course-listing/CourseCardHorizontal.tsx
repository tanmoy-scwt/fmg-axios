import Link from "next/link";
import type { CourseCardHorizontalProps } from "./types";
import { formatMode, stripTags } from "./utils";

type CourseCardHorizontalComponentProps = {
  content: CourseCardHorizontalProps;
};

export default function CourseCardHorizontal({
  content,
}: CourseCardHorizontalComponentProps) {
  const userBIO = stripTags(content.course_content).slice(0, 250);

  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
      <div className="flex items-start justify-between gap-4">
        <div>
          {content.featured ? (
            <span className="rounded-full bg-amber-400/20 px-3 py-1 text-xs font-semibold text-amber-200">
              Featured
            </span>
          ) : null}
        </div>
        <span className="rounded-full bg-sky-400/20 px-3 py-1 text-xs font-semibold text-sky-200">
          {formatMode(content.teaching_mode)}
        </span>
      </div>

      <Link href={`/${content.slug ?? ""}`} className="mt-4 block">
        <h2 className="text-xl font-semibold text-white">
          {content.course_name || "Course"}
        </h2>
      </Link>

      <p className="mt-1 text-sm text-slate-300">
        By {content.f_name || "Tutor"}
      </p>

      <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-300">
        <span>
          Exp{" "}
          <span className="text-slate-100">
            {content.year_of_exp ?? "0"} Years
          </span>
        </span>
        {typeof content.average_rating === "number" &&
        content.average_rating > 0 ? (
          <span>
            Rating{" "}
            <span className="text-slate-100">
              {content.average_rating.toFixed(1)}
            </span>
          </span>
        ) : null}
      </div>

      {content.skills ? (
        <p className="mt-3 text-xs text-slate-300">
          Skill: <span className="text-slate-100">{content.skills}</span>
        </p>
      ) : null}

      {userBIO ? (
        <p className="mt-3 text-sm text-slate-300">{userBIO}</p>
      ) : null}

      <div className="mt-5 flex flex-wrap items-center justify-end gap-3">
        <Link
          href={`/${content.slug ?? ""}`}
          className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white transition hover:border-white/60"
        >
          View Course
        </Link>
        <button
          className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900 transition hover:bg-slate-100"
          type="button"
        >
          Contact
        </button>
      </div>
    </article>
  );
}
