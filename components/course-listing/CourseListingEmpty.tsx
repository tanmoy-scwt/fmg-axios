type CourseListingEmptyProps = {
  message: string;
};

export default function CourseListingEmpty({
  message,
}: CourseListingEmptyProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-slate-300">
      <p className="text-base font-semibold capitalize text-white">{message}</p>
      <p className="mt-2 text-sm text-slate-400">
        Explore now and find your perfect match!
      </p>
    </div>
  );
}
