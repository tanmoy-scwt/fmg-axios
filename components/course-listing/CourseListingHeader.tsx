type CourseListingHeaderProps = {
  skill: string;
  location: string;
};

export default function CourseListingHeader({
  skill,
  location,
}: CourseListingHeaderProps) {
  return (
    <header className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-8 shadow-xl shadow-slate-950/40">
      <p className="text-xs uppercase tracking-[0.3em] text-slate-300">
        FMG Course Listing
      </p>
      <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
        {skill || "Tutors"}{" "}
        <span className="text-slate-400">
          {location ? `in ${location}` : "near you"}
        </span>
      </h1>
      <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
        Server-rendered results from the FindMyGuru listing API.
      </p>
    </header>
  );
}
